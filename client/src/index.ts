import { ComputerController } from "./ComputerController";
import { Controller } from "./Controller";
import { get_models_and_data } from "./get_models_and_data";
import { set_computer_controller, set_controller } from "./globals";

window.onload = async () => {
  set_computer_controller(new ComputerController());
  const test_size = 32;
  const data = await get_models_and_data(test_size);
  document.getElementById("interactive-box")!.style.display = "flex";
  set_controller(new Controller(data, test_size));
};
