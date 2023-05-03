import INode from "../types/INode";
import { dealText, helperForColor } from "../utils";

export const createContent = (text: string, parent: INode): TextNode => {
  const temp = figma.createText();
  const color = helperForColor(parent.color);
  const fontSize = parent.fontSize;
  temp.resizeWithoutConstraints(parent.rect.width, parent.rect.height);

  temp.fills = [
    { type: "SOLID", color: { r: color[0], g: color[1], b: color[2] } },
  ];
  temp.fontName = { family: "Arial", style: "Regular" };
  parent.textAlign === "start" && (temp.textAutoResize = "WIDTH_AND_HEIGHT");
  temp.characters = text;
  temp.fontSize = fontSize;
  temp.textAlignHorizontal = dealText(parent.textAlign);
  temp.textAlignVertical = "CENTER";

  return temp;
};
