import INode from "../types/INode";
import { dealShadow, helperForColor } from "../utils";
import { createContent } from "./createContent";
import { createImg } from "./createImg";

export const createFrame = async (
  node: INode,
  parent?: INode,
  parentNode?: PageNode | FrameNode
): Promise<void> => {
  if (node.tag === "SCRIPT") {
    return;
  }

  //   create the frame
  const frame = figma.createFrame();
  parentNode?.appendChild(frame);

  //   the location and the size
  const { x, y, width, height } = node.rect;
  frame.x = parent ? x - parent.rect.x : x;
  frame.y = parent ? y - parent.rect.y : y;
  frame.resizeWithoutConstraints(width, height);

  //   the background
  const color = helperForColor(node.backgroundColor);

  frame.fills = [
    {
      type: "SOLID",
      color: { r: color[0], g: color[1], b: color[2] },
      opacity: color[3],
    },
  ];

  //   the shadow
  //   TODO: I can add the filed: shadow: !styles.boxShadow === "none" to judge
  if (node.boxShadow.length > 0) {
    const { shadowColor, offsetX, offsetY, radius, spread } = dealShadow(
      node.boxShadow
    );
    frame.effects = [
      {
        type: "DROP_SHADOW",
        color: {
          r: shadowColor[0],
          g: shadowColor[1],
          b: shadowColor[2],
          a: shadowColor[3],
        },
        offset: { x: offsetX, y: offsetY },
        radius,
        spread,
        blendMode: "NORMAL",
        visible: true,
      },
    ];

    // because of the difference between Figma and chrome rendering
    // it is necessary to consider the background color when adding shadows
    if (frame.backgrounds[0].opacity === 0) {
      let pointer = frame;
      while (pointer.backgrounds[0].opacity === 0) {
        pointer = pointer.parent as FrameNode;
      }

      frame.fills = pointer.backgrounds;
    }
  }

  //   the border radius
  node.borderRadius && (frame.cornerRadius = node.borderRadius);

  //   corner case
  //   the text
  //   the img: we can use the Uint8Array to fill the frame
  if (node.text.length > 0) {
    const temp = createContent(node.text, node);
    frame.appendChild(temp);
  } else if (node.src.length > 0) {
    const data = new Uint8Array(node.imgData);
    const content = await createImg(data, frame);

    content && frame.appendChild(content);
  }

  for (const child of node.children) {
    createFrame(child, node, frame);
  }
};
