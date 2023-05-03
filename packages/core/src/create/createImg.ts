export const createImg = async (data: Uint8Array, parentNode: FrameNode) => {
  try {
    const img = figma.createImage(data);

    const res = figma.createRectangle();
    const { width, height } = parentNode;
    res.x = 0;
    res.y = 0;
    res.resize(width, height);
    res.fills = [
      {
        type: "IMAGE",
        imageHash: img.hash,
        scaleMode: "FILL",
      },
    ];
    return res;
  } catch (error) {
    console.error(error);
    return;
  }
};
