import INode from "../types/INode";
import { dealText, helperForColor } from "../utils";

export const createContent = (text: string, parent: INode): TextNode => {
  const temp = figma.createText();
  const color = helperForColor(parent.color);
  const fontSize = parent.fontSize;
  //   temp.textAutoResize();
  //   temp.resize(parent.rect.width, parent.rect.height);

  temp.fills = [
    { type: "SOLID", color: { r: color[0], g: color[1], b: color[2] } },
  ];
  temp.fontName = { family: "Arial", style: "Regular" };
  temp.characters = text.trim();
  //   (parent.textAlign === "start" || parent.textAlign === "right") &&
  //     (temp.textAutoResize = "WIDTH_AND_HEIGHT");
  //   if (temp.width > parent.rect.width) {
  //     temp.textAutoResize = "HEIGHT";
  //     console.log(temp.textAutoResize);
  //     console.log(text);
  //   } else if (parent.textAlign === "start" || parent.textAlign === "right") {
  //     temp.textAutoResize = "WIDTH_AND_HEIGHT";
  //   }
  //   temp.textAutoResize = "HEIGHT";
  //   if (temp.height > parent.rect.height) {
  //   console.log(temp.width > parent.rect.width);

  //   console.log(temp.width - parent.rect.width);
  //   console.log("---");

  if (temp.width <= parent.rect.width) {
    temp.textAutoResize = "WIDTH_AND_HEIGHT";
    temp.resizeWithoutConstraints(parent.rect.width, parent.rect.height);
  }
  if (temp.width > parent.rect.width) {
    console.log(temp.characters);

    temp.textAutoResize = "HEIGHT";
    temp.resizeWithoutConstraints(parent.rect.width, parent.rect.height);
    console.log(temp.width);
    console.log(parent.rect.width);
    console.log("------");
  }
  //   }

  temp.fontSize = fontSize;
  temp.textAlignHorizontal = dealText(parent.textAlign);
  temp.textAlignVertical = "CENTER";
  if (
    text ===
    "学术快讯丨车生泉教授生态设计团队构建LCZ景观类型对大气颗粒物空间分布影响机制，为城市景观生态规划助力"
  ) {
    console.log("temp");

    // //   console.log(parent.rect.height);
    // console.log("---");
    console.log(temp.width);
    console.log(parent.rect.width);
    // // console.log(temp.height);
    console.log(temp.width > parent.rect.width);
    console.log(temp.textAutoResize);
    console.log("___");
  }
  return temp;
};
