import { vertices as blue_left } from "./vertices_blue_left";
import { vertices as blue_right } from "./vertices_blue_right";
import { vertices as fuel_1 } from "./vertices_fuel_1";
import { vertices as fuel_2_left } from "./vertices_fuel_2_left";
import { vertices as fuel_2_right } from "./vertices_fuel_2_right";
import { vertices as green_left } from "./vertices_green_left";
import { vertices as green_right } from "./vertices_green_right";
import { vertices as red_left } from "./vertices_red_left";
import { vertices as red_right } from "./vertices_red_right";
import { vertices as tablet_1 } from "./vertices_tablet_1";
import { vertices as tablet_2 } from "./vertices_tablet_2";
import { vertices as tablet_3 } from "./vertices_tablet_3";
import { vertices as tablet_4 } from "./vertices_tablet_4";
import { vertices as tablet_5 } from "./vertices_tablet_5";
import { vertices as tablet_6 } from "./vertices_tablet_6";
import { vertices as tablet_7 } from "./vertices_tablet_7";
import { vertices as tablet_8 } from "./vertices_tablet_8";
import { vertices as tablet_9 } from "./vertices_tablet_9";

export interface FuelAnimation {
  time: number;
  color: string;
}

export const animate_particle_along_path = (
  context: CanvasRenderingContext2D,
  time: number,
  total_time: number,
  path: number[][],
  size: number
) => {
  const vertex_index = (path.length * time) / total_time;
  if (vertex_index >= path.length - 1 || vertex_index < 0) {
    return;
  }
  const vertex_index_floor = Math.floor(vertex_index);
  const vertex_index_ceil = Math.ceil(vertex_index);
  const vertex_index_fraction = vertex_index - vertex_index_floor;

  const vertex = path[vertex_index_floor];
  const vertex_next = path[vertex_index_ceil];

  const x =
    vertex[0] + (vertex_next[0] - vertex[0]) * vertex_index_fraction - size / 2;
  const y =
    vertex[1] + (vertex_next[1] - vertex[1]) * vertex_index_fraction - size / 2;
  context.fillRect(x, y, size, size);
};

export const animate_fuel = (
  context: CanvasRenderingContext2D,
  { time, color }: FuelAnimation
) => {
  context.fillStyle = color;

  const short_table_paths = [tablet_1, tablet_2, tablet_3, tablet_4, tablet_5];
  for (const path of short_table_paths) {
    for (let i = 0; i < 5; i++) {
      animate_particle_along_path(context, time - i * 1, 2, path, 5);
    }
  }
  const long_table_paths = [tablet_6, tablet_7, tablet_8, tablet_9];
  for (const path of long_table_paths) {
    for (let i = 0; i < 12; i++) {
      animate_particle_along_path(context, time - i * 0.4, 3, path, 5);
    }
  }

  time = time - 1.5;

  for (let i = 0; i < 25; i++) {
    animate_particle_along_path(context, time - i * 0.2, 2, fuel_1, 8);
  }

  time = time - 2.5;

  for (let i = 0; i < 25; i++) {
    animate_particle_along_path(context, time - i * 0.2, 2, fuel_2_left, 5);
  }
  for (let i = 0; i < 25; i++) {
    animate_particle_along_path(context, time - i * 0.2, 2, fuel_2_right, 5);
  }

  time = time - 1.5;

  context.fillStyle = "red";

  for (let i = 0; i < 25; i++) {
    animate_particle_along_path(context, time - i * 0.2, 2, red_left, 5);
  }
  for (let i = 0; i < 25; i++) {
    animate_particle_along_path(context, time - i * 0.2, 2, red_right, 5);
  }
  context.fillStyle = "green";
  for (let i = 0; i < 25; i++) {
    animate_particle_along_path(context, time - i * 0.2, 2, green_left, 5);
  }
  for (let i = 0; i < 25; i++) {
    animate_particle_along_path(context, time - i * 0.2, 2, green_right, 5);
  }
  context.fillStyle = "blue";

  for (let i = 0; i < 25; i++) {
    animate_particle_along_path(context, time - i * 0.2, 2, blue_left, 5);
  }
  for (let i = 0; i < 25; i++) {
    animate_particle_along_path(context, time - i * 0.2, 2, blue_right, 5);
  }
};
