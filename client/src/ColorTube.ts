export interface ColorTube {
  x: number;
  y: number;
  color: "red" | "blue" | "green";
  height: number;
}
const color_to_sx_sy = {
  blue: {
    sx: 0,
    sy: 0,
  },
  green: {
    sx: 512,
    sy: 0,
  },
  red: {
    sx: 0,
    sy: 512,
  },
};

export interface DrawInput {
  context: CanvasRenderingContext2D;
  tube_images: HTMLImageElement;
}

export const draw_tube = (
  { context, tube_images }: DrawInput,
  tube: ColorTube
) => {
  const { sx, sy } = color_to_sx_sy[tube.color];
  const index = Math.min(29, Math.floor(30 * (tube.height)));
  const x = sx + (index % 6) * 86;
  const y = sy + Math.floor(index / 6) * 86;
  context.drawImage(tube_images, x, y, 86, 86, tube.x, tube.y, 86, 86);
};
