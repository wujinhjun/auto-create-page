export const createImg = (parentNode: FrameNode) => {
  const res = figma.createRectangle();
  const { width, height } = parentNode;
  res.x = 0;
  res.y = 0;
  res.resize(width, height);
  res.fills = [
    {
      type: "SOLID",
      color: { r: 0, g: 0, b: 1 },
    },
  ];
  return res;
};
