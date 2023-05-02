import { helperForColor } from "./dealColor";

export const dealShadow = (str: string) => {
  const split = str.indexOf(")");

  const color = helperForColor(str.slice(0, split + 1));

  const directions = str
    .slice(split + 1)
    .split(" ")
    .map((item) => parseInt(item));

  return {
    shadowColor: color,
    offsetX: directions[1],
    offsetY: directions[2],
    radius: directions[3] ?? 0,
    spread: directions[4] ?? 0,
  };
};
