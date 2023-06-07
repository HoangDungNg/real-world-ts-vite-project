export type ColorProps = {
  name: string;
  hexColor: string;
  rgbColor: string;
};

export const ECOLOR = {
  SierraBlue: {
    name: "Sierra Blue",
    hexColor: "#9BB5CE",
    rgbColor: "155, 181, 206",
  },
  Gold: {
    name: "Gold",
    hexColor: "#F9E5C9",
    rgbColor: "249, 229, 201",
  },
  AlpineGreen: {
    name: "Alpine Green",
    hexColor: "#505F4E",
    rgbColor: "80, 95, 78",
  },
  DeepPurple: {
    name: "Deep Purple",
    hexColor: "#574f6f",
    rgbColor: "87, 79, 111",
  },
  Red: {
    name: "Red",
    hexColor: "#A50011",
    rgbColor: "165, 0, 17",
  },
  Blue: {
    name: "Blue",
    hexColor: "#215E7C",
    rgbColor: "33, 94, 124",
  },
};

function createColorObject(
  hexCode: string,
  colorName: string,
  rgbValues: string
): Record<string, ColorProps> {
  const rgbColor = rgbValues.split(",").map(Number).join(", ");

  const colorObject: Record<string, ColorProps> = {
    [colorName]: {
      name: colorName,
      hexColor: hexCode,
      rgbColor: rgbColor,
    },
  };

  return colorObject;
}

export { createColorObject };
