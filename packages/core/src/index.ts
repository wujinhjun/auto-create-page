import { VIEW_WIDTH, VIEW_HEIGHT } from "figma-vite-common/constants/ui";
import INode from "./types/INode";
import { createFrame } from "./create/createFrame";

figma.showUI(__html__, {
  width: VIEW_WIDTH,
  height: VIEW_HEIGHT,
});

figma.ui.onmessage = (msg) => {
  let page: INode;
  if (msg.type === "create-rectangles") {
    console.log("Start fetching data...");
    fetch("http://127.0.0.1:3000")
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data); // 在这里处理返回的数据
        page = data as INode;
        await figma.loadFontAsync({ family: "Arial", style: "Regular" });
        createFrame(page, undefined, figma.currentPage);
        figma.closePlugin();
      })
      .catch((error) => {
        console.error(error);
        figma.closePlugin();
      });
    console.log("ok");
  }
};
