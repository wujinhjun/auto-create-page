export function helperForColor(str: string): number[] {
  const reg =
    /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:,\s*(\d?\.?\d+))?\)/;
  const matches = str.match(reg)!.map((item, index) => {
    if (index >= 1 && index <= 3) {
      return parseInt(item) / 255;
    } else {
      return parseFloat(item);
    }
  });

  if (isNaN(matches[4])) {
    matches[4] = 1;
  }

  return matches.slice(1);
}
