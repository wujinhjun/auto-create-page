type TAlign = "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
export const dealText = (align: string): TAlign => {
  if (align === "start" || align === "left") {
    1;
    return "LEFT";
  } else if (align === "end" || align === "right") {
    return "RIGHT";
  } else if (align === "center") {
    return "CENTER";
  } else {
    return "JUSTIFIED";
  }
};
