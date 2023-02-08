import { ComputerController } from "./ComputerController";
import { Controller } from "./Controller";

let controller: Controller | null = null;
let computer_controller: ComputerController | null = null;

export const get_controller = () => {
  return controller;
};

export const set_controller = (new_controller: Controller) => {
  controller = new_controller;
};
export const set_computer_controller = (new_controller: ComputerController) => {
  computer_controller = new_controller;
};

export const get_computer_controller = () => {
  return computer_controller;
};
