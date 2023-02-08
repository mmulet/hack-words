export type You_Win_State =
  | {
      type: "not_won";
    }
  | {
      type: "waiting_for_big_button";
      time: number;
    }
  | {
      type: "won";
      time: number;
    };

export const update_win_state = (
  state: You_Win_State,
  timeIncrement: number
) => {
  switch (state.type) {
    case "not_won":
      return;
    case "waiting_for_big_button":
      state.time += timeIncrement;
      return;
    case "won":
      state.time += timeIncrement;
      return;
  }
};

export interface DrawInput {
  context: CanvasRenderingContext2D;
  big_button_context: CanvasRenderingContext2D;
  win_state: You_Win_State;
  win_images: HTMLImageElement;
}

const draw_big_button = (
  { big_button_context, win_images }: DrawInput,
  time: number
) => {
  const frame = Math.floor(time * 5) % 10;
  const x = 256 * (frame % 4);
  const y = 256 * (Math.floor(frame / 4) + 1);
  big_button_context.clearRect(0, 0, 256, 256);

  big_button_context.drawImage(win_images, x, y, 256, 256, 0, 0, 256, 256);
};

const draw_win_animation = (
  { context, win_images }: DrawInput,
  time: number
) => {
  const frame = Math.min(14, Math.floor(time * 15));
  const x = 128 * (frame % 8);
  const y = 128 * Math.floor(frame / 8);
  context.drawImage(
    win_images,
    x,
    y,
    128,
    128,
    256 - 128,
    1024 - 400,
    256,
    256
  );
};

export const draw_win_state = (input: DrawInput) => {
  const { win_state, big_button_context } = input;
  switch (win_state.type) {
    case "not_won":
      return;
    case "waiting_for_big_button":
      draw_big_button(input, win_state.time);
      return;
    case "won":
      draw_win_animation(input, win_state.time);
      return;
  }
};
