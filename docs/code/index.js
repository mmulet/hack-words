(() => {
  // ../client/src/ColorTube.ts
  var color_to_sx_sy = {
    blue: {
      sx: 0,
      sy: 0
    },
    green: {
      sx: 512,
      sy: 0
    },
    red: {
      sx: 0,
      sy: 512
    }
  };
  var draw_tube = ({ context, tube_images }, tube) => {
    const { sx, sy } = color_to_sx_sy[tube.color];
    const index = Math.min(29, Math.floor(30 * tube.height));
    const x = sx + index % 6 * 86;
    const y = sy + Math.floor(index / 6) * 86;
    context.drawImage(tube_images, x, y, 86, 86, tube.x, tube.y, 86, 86);
  };

  // ../client/src/load_image.ts
  var load_image = (path) => {
    const image = new Image();
    image.src = path;
    return image;
  };

  // ../client/src/vertices_blue_left.ts
  var vertices = [[205, 850], [197, 863], [199, 868], [198, 873], [201, 878], [203, 882], [202, 888], [207, 892], [205, 898], [199, 902], [201, 913], [200, 918], [187, 930]];

  // ../client/src/vertices_blue_right.ts
  var vertices2 = [[298, 853], [292, 860], [287, 871], [287, 876], [288, 883], [289, 885], [292, 888], [295, 893], [301, 899], [306, 899], [310, 902], [309, 909], [311, 913], [316, 919], [324, 921], [329, 919], [334, 920], [338, 923], [350, 918], [358, 926], [355, 930]];

  // ../client/src/vertices_fuel_1.ts
  var vertices3 = [
    [96, 159],
    [92, 162],
    [87, 168],
    [82, 176],
    [81, 178],
    [83, 185],
    [79, 192],
    [74, 201],
    [76, 209],
    [73, 217],
    [70, 226],
    [71, 234],
    [72, 243],
    [71, 250],
    [71, 258],
    [72, 271],
    [71, 277],
    [71, 284],
    [70, 291],
    [70, 298],
    [69, 305],
    [67, 311],
    [66, 319],
    [65, 327],
    [64, 335],
    [63, 342],
    [63, 350],
    [63, 358],
    [65, 368],
    [63, 380],
    [62, 390],
    [62, 401],
    [60, 410],
    [62, 418],
    [68, 425],
    [67, 434],
    [72, 439],
    [76, 445],
    [82, 453],
    [87, 462],
    [98, 470],
    [108, 469],
    [111, 473],
    [119, 482],
    [127, 486],
    [136, 487],
    [144, 492],
    [153, 497],
    [157, 506],
    [162, 515],
    [167, 522],
    [178, 527],
    [183, 530],
    [192, 534],
    [200, 539],
    [208, 542],
    [212, 545],
    [216, 546],
    [217, 551],
    [219, 557],
    [222, 559],
    [226, 561],
    [228, 564],
    [231, 567],
    [234, 568],
    [238, 568],
    [239, 565],
    [240, 563],
    [239, 556],
    [243, 557],
    [242, 551],
    [241, 546],
    [238, 543],
    [235, 540]
  ];

  // ../client/src/vertices_fuel_2_left.ts
  var vertices4 = [[215, 695], [217, 702], [218, 708], [217, 717], [219, 724], [226, 735], [230, 743], [233, 748], [236, 750], [238, 761], [239, 769], [237, 786], [236, 789], [237, 797], [234, 801], [228, 807], [223, 820]];

  // ../client/src/vertices_fuel_2_right.ts
  var vertices5 = [[293, 695], [294, 705], [295, 712], [294, 717], [291, 722], [284, 734], [281, 740], [281, 750], [280, 759], [279, 764], [277, 769], [276, 779], [279, 786], [273, 790], [271, 796], [270, 800], [268, 803], [267, 808], [266, 811], [264, 815], [264, 821], [266, 824], [273, 824], [282, 826], [285, 827], [292, 828]];

  // ../client/src/vertices_green_left.ts
  var vertices6 = [[197, 828], [193, 825], [189, 825], [185, 826], [180, 826], [171, 820], [167, 820], [163, 816], [156, 816], [149, 818], [144, 819], [138, 817], [134, 812], [129, 807], [123, 807], [117, 805], [113, 802], [110, 800], [108, 797], [102, 790], [96, 790], [90, 792], [87, 797]];

  // ../client/src/vertices_green_right.ts
  var vertices7 = [[322, 843], [328, 847], [332, 850], [334, 851], [340, 853], [345, 848], [350, 847], [354, 844], [360, 839], [365, 840], [373, 838], [377, 836], [383, 833], [387, 832], [394, 825], [396, 823], [397, 816], [397, 813], [397, 807], [396, 802], [399, 798], [405, 793], [412, 790], [415, 788], [417, 784], [424, 785], [431, 788], [435, 797]];

  // ../client/src/vertices_red_left.ts
  var vertices8 = [[209, 821], [207, 812], [206, 808], [206, 799], [202, 796], [201, 791], [194, 785], [191, 781], [194, 771], [192, 767], [190, 763], [189, 752], [183, 754], [177, 752], [174, 749], [171, 747], [168, 743], [163, 735], [157, 736], [150, 739], [147, 744]];

  // ../client/src/vertices_red_right.ts
  var vertices9 = [[301, 820], [302, 815], [302, 810], [308, 798], [308, 797], [311, 790], [313, 783], [313, 777], [315, 771], [315, 768], [316, 761], [319, 754], [320, 749], [322, 745], [327, 737], [333, 735], [341, 733], [348, 735], [355, 738], [358, 742], [359, 748], [361, 751]];

  // ../client/src/vertices_tablet_1.ts
  var vertices10 = [[111, 118], [105, 118], [97, 119]];

  // ../client/src/vertices_tablet_2.ts
  var vertices11 = [[112, 84], [103, 84], [103, 68], [97, 68]];

  // ../client/src/vertices_tablet_3.ts
  var vertices12 = [[155, 32], [155, 25], [187, 24], [187, 18]];

  // ../client/src/vertices_tablet_4.ts
  var vertices13 = [[167, 202], [167, 207], [167, 209], [167, 217]];

  // ../client/src/vertices_tablet_5.ts
  var vertices14 = [[204, 203], [204, 209], [204, 217], [204, 209]];

  // ../client/src/vertices_tablet_6.ts
  var vertices15 = [[281, 104], [285, 104], [290, 104], [305, 104], [321, 104], [337, 104], [352, 105], [352, 98], [352, 92], [341, 92], [331, 92], [331, 88], [331, 83], [356, 83], [380, 84], [380, 71], [380, 58], [365, 57], [350, 57], [349, 48], [349, 39], [361, 39], [373, 39], [372, 31], [372, 24], [369, 24], [366, 24], [365, 21], [365, 18]];

  // ../client/src/vertices_tablet_7.ts
  var vertices16 = [[288, 104], [288, 116], [307, 117], [327, 117], [327, 135], [337, 134], [337, 147], [359, 146], [381, 146], [381, 135], [369, 134], [369, 118], [374, 117], [374, 106]];

  // ../client/src/vertices_tablet_8.ts
  var vertices17 = [[430, 134], [415, 134], [400, 134], [401, 117], [396, 117], [396, 107], [412, 106], [412, 92], [405, 91], [405, 85], [414, 84], [414, 69], [426, 67], [426, 58], [415, 58], [404, 58], [404, 49], [404, 40], [417, 40], [430, 39]];

  // ../client/src/vertices_tablet_9.ts
  var vertices18 = [[323, 17], [323, 24], [310, 25], [297, 25], [297, 40], [307, 40], [307, 56], [320, 56], [321, 67], [334, 67], [348, 67], [362, 67], [375, 67], [389, 67], [403, 67], [416, 67], [430, 68]];

  // ../client/src/animate_fuel.ts
  var animate_particle_along_path = (context, time, total_time, path, size) => {
    const vertex_index = path.length * time / total_time;
    if (vertex_index >= path.length - 1 || vertex_index < 0) {
      return;
    }
    const vertex_index_floor = Math.floor(vertex_index);
    const vertex_index_ceil = Math.ceil(vertex_index);
    const vertex_index_fraction = vertex_index - vertex_index_floor;
    const vertex = path[vertex_index_floor];
    const vertex_next = path[vertex_index_ceil];
    const x = vertex[0] + (vertex_next[0] - vertex[0]) * vertex_index_fraction - size / 2;
    const y = vertex[1] + (vertex_next[1] - vertex[1]) * vertex_index_fraction - size / 2;
    context.fillRect(x, y, size, size);
  };
  var animate_fuel = (context, { time, color }) => {
    context.fillStyle = color;
    const short_table_paths = [vertices10, vertices11, vertices12, vertices13, vertices14];
    for (const path of short_table_paths) {
      for (let i = 0; i < 5; i++) {
        animate_particle_along_path(context, time - i * 1, 2, path, 5);
      }
    }
    const long_table_paths = [vertices15, vertices16, vertices17, vertices18];
    for (const path of long_table_paths) {
      for (let i = 0; i < 12; i++) {
        animate_particle_along_path(context, time - i * 0.4, 3, path, 5);
      }
    }
    time = time - 1.5;
    for (let i = 0; i < 25; i++) {
      animate_particle_along_path(context, time - i * 0.2, 2, vertices3, 8);
    }
    time = time - 2.5;
    for (let i = 0; i < 25; i++) {
      animate_particle_along_path(context, time - i * 0.2, 2, vertices4, 5);
    }
    for (let i = 0; i < 25; i++) {
      animate_particle_along_path(context, time - i * 0.2, 2, vertices5, 5);
    }
    time = time - 1.5;
    context.fillStyle = "red";
    for (let i = 0; i < 25; i++) {
      animate_particle_along_path(context, time - i * 0.2, 2, vertices8, 5);
    }
    for (let i = 0; i < 25; i++) {
      animate_particle_along_path(context, time - i * 0.2, 2, vertices9, 5);
    }
    context.fillStyle = "green";
    for (let i = 0; i < 25; i++) {
      animate_particle_along_path(context, time - i * 0.2, 2, vertices6, 5);
    }
    for (let i = 0; i < 25; i++) {
      animate_particle_along_path(context, time - i * 0.2, 2, vertices7, 5);
    }
    context.fillStyle = "blue";
    for (let i = 0; i < 25; i++) {
      animate_particle_along_path(context, time - i * 0.2, 2, vertices, 5);
    }
    for (let i = 0; i < 25; i++) {
      animate_particle_along_path(context, time - i * 0.2, 2, vertices2, 5);
    }
  };

  // ../client/src/WinState.ts
  var update_win_state = (state, timeIncrement) => {
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
  var draw_big_button = ({ big_button_context, win_images }, time) => {
    const frame = Math.floor(time * 5) % 10;
    const x = 256 * (frame % 4);
    const y = 256 * (Math.floor(frame / 4) + 1);
    big_button_context.clearRect(0, 0, 256, 256);
    big_button_context.drawImage(win_images, x, y, 256, 256, 0, 0, 256, 256);
  };
  var draw_win_animation = ({ context, win_images }, time) => {
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
  var draw_win_state = (input) => {
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

  // ../client/src/ComputerController.ts
  var colors = [
    "#FF6E40",
    "#04E762",
    "#BD10E0",
    "#50E3C2",
    "#FFD300",
    "#E86363",
    "#8B572A",
    "#B8E986",
    "#9013FE",
    "#4A90E2",
    "#F5A623"
  ];
  var ComputerController = class {
    constructor() {
      this.output_canvas = document.getElementById(
        "canvas"
      );
      this.canvas = document.getElementById(
        "computer_canvas"
      );
      this.context = this.canvas.getContext("2d");
      this.big_button_canvas = document.getElementById(
        "big-button-canvas"
      );
      this.big_button_context = this.big_button_canvas.getContext("2d");
      this.win_letter = document.getElementById(
        "win-letter"
      );
      this.big_button = document.getElementById(
        "big-button"
      );
      this.computer_image = load_image("static/computer0001.png");
      this.tube_images = load_image("static/tubes.png");
      this.win_images = load_image("static/win.png");
      this.tubes = [
        {
          x: 103,
          y: 697,
          color: "red",
          height: 0
        },
        {
          x: 35,
          y: 742,
          color: "green",
          height: 0
        },
        {
          x: 135,
          y: 875,
          color: "blue",
          height: 0
        },
        {
          x: 315,
          y: 689,
          color: "red",
          height: 0
        },
        {
          x: 400,
          y: 742,
          color: "green",
          height: 0
        },
        {
          x: 316,
          y: 875,
          color: "blue",
          height: 0
        }
      ];
      this.scanlines = load_image("static/scanlines.png");
      this.color_index = 0;
      this.on_puzzle_solved = () => {
        this.fuel_animation.push({
          time: 0,
          color: colors[this.color_index]
        });
        this.color_index = (this.color_index + 1) % colors.length;
      };
      this.play_win_animation = () => {
        if (this.win_state.type != "not_won") {
          return;
        }
        this.big_button.style.display = "unset";
        this.win_state = {
          type: "waiting_for_big_button",
          time: 0
        };
      };
      this.big_button_click = () => {
        if (this.win_state.type != "waiting_for_big_button") {
          return;
        }
        this.win_state = {
          type: "won",
          time: 0
        };
        this.win_letter.style.display = "unset";
      };
      this.fuel_animation = [];
      this.lastFrameTime = null;
      this.timeSinceLastAnimationFrame = 0;
      this.win_state = {
        type: "not_won"
      };
      this.update_and_draw = async (totalTimeElapsed) => {
        const timeDifference = this.lastFrameTime == null ? 0 : totalTimeElapsed - this.lastFrameTime;
        this.lastFrameTime = totalTimeElapsed;
        const timeIncrement = timeDifference / 1e3;
        this.context.clearRect(0, 0, 512, 1024);
        this.context.drawImage(this.computer_image, 0, 0);
        for (const tube of this.tubes) {
          draw_tube(this, tube);
        }
        this.context.fillStyle = `rgb(${this.tubes[0].height / 0.7 * 255}, ${this.tubes[1].height / 0.7 * 255}, ${this.tubes[2].height / 0.7 * 255})`;
        this.context.beginPath();
        this.context.ellipse(214, 836, 14, 14, 0, 0, 2 * Math.PI);
        this.context.fill();
        this.context.fillStyle = `rgb(${this.tubes[3].height / 0.7 * 255}, ${this.tubes[4].height / 0.7 * 255}, ${this.tubes[5].height / 0.7 * 255})`;
        this.context.beginPath();
        this.context.ellipse(306, 838, 14, 14, 0, 0, 2 * Math.PI);
        this.context.fill();
        this.context.font = "60px Mono";
        this.context.drawImage(this.output_canvas, 132, 50, 128, 128);
        const indices_to_remove = [];
        for (let i = 0; i < this.fuel_animation.length; i++) {
          const fuel = this.fuel_animation[i];
          fuel.time += timeIncrement;
          animate_fuel(this.context, fuel);
          if (fuel.time > 12) {
            indices_to_remove.push(i);
          }
        }
        for (const index of indices_to_remove.reverse()) {
          this.fuel_animation.splice(index, 1);
        }
        if (indices_to_remove.length > 0) {
          for (const tube of this.tubes) {
            tube.height = Math.min(
              0.7,
              tube.height + 0.1 * indices_to_remove.length
            );
          }
        }
        update_win_state(this.win_state, timeIncrement);
        draw_win_state(this);
        requestAnimationFrame(this.update_and_draw);
      };
      const ratio = window.devicePixelRatio || 1;
      this.context.imageSmoothingEnabled = false;
      const canvasRect = this.canvas.getBoundingClientRect();
      canvasRect.width;
      const terminal = document.getElementById("terminal");
      terminal.style.left = 113 * (canvasRect.width / 512) + "px";
      terminal.style.top = 256 * (canvasRect.height / 1024) + "px";
      terminal.style.width = 265 * (canvasRect.width / 512) + "px";
      terminal.style.height = 168 * (canvasRect.height / 1024) + "px";
      this.big_button.addEventListener("click", this.big_button_click);
      requestAnimationFrame(this.update_and_draw);
    }
  };

  // ../client/src/write_output_to_data.ts
  var write_output_to_data = (matrix_info, output, data) => {
    for (let i = 0; i < matrix_info.number_of_elements; i++) {
      const value = output[i];
      data.data[i * 4] = value;
      data.data[i * 4 + 1] = value;
      data.data[i * 4 + 2] = value * 0.4;
      data.data[i * 4 + 3] = 255;
    }
  };

  // ../client/src/MatrixInfo.ts
  var make_matrix_info = (size) => {
    return {
      number_of_elements: size * size,
      number_of_measurements: size * size / 4
    };
  };

  // ../client/src/Reconstruction.ts
  var Reconstruction = class {
    constructor(size, samples, model, reconstruct, number_of_iterations) {
      this.size = size;
      this.samples = samples;
      this.model = model;
      this.reconstruct = reconstruct;
      this.number_of_iterations = number_of_iterations;
      this.done = false;
      this.iteration = 0;
      this.start_time = performance.now();
      this.update = async () => {
        if (this.done) {
          return;
        }
        const stop_iteration = this.iteration + 5;
        for (; this.iteration < this.number_of_iterations && this.iteration < stop_iteration; this.iteration++) {
          const output = await this.model.run({
            samples: this.samples,
            "reconstruction.1": this.reconstruction,
            previous_diffs: this.previous_diffs
          });
          this.reconstruction = output.reconstruction;
          this.previous_diffs = output.diffs;
        }
        if (this.iteration < this.number_of_iterations) {
          return;
        }
        console.log(performance.now() - this.start_time);
        this.done = true;
      };
      this.draw = async (to) => {
        if (this.done) {
          return;
        }
        const output = await this.reconstruct.run({
          reconstruction: this.reconstruction
        });
        console.log(this.matrix_info.number_of_elements);
        write_output_to_data(this.matrix_info, output.image.data, to);
      };
      this.matrix_info = make_matrix_info(size);
      this.reconstruction = new ort.Tensor(
        new Float32Array(this.matrix_info.number_of_elements)
      );
      this.previous_diffs = new ort.Tensor(
        new Float32Array(this.matrix_info.number_of_elements)
      );
    }
  };

  // ../client/src/image_to_samples.ts
  var image_to_samples = async (image, x, y, w, h, context, sample_func) => {
    context.clearRect(0, 0, 32, 32);
    context.drawImage(image, x, y, w, h, 0, 0, 32, 32);
    const image_data = context.getImageData(0, 0, 32, 32);
    const out_data = new Uint8Array(image_data.data.byteLength / 4);
    for (let i = 0, k = 0; i < image_data.data.length; i += 4, k++) {
      out_data[k] = image_data.data[i] * 0.2126 + image_data.data[i + 1] * 0.7152 + image_data.data[i + 2] * 0.0722;
    }
    const image_tensor = new ort.Tensor(out_data);
    const result = await sample_func.run({
      image: image_tensor
    });
    return result.samples;
  };

  // ../client/src/puzzles.ts
  var puzzles = {
    0: {
      question: "A symbol of spring, and new beginnings too, What am I, that chews on a carrot or two?",
      answer: "rabbit",
      image_index: 161
    },
    1: {
      question: "A suit of steel, to protect and defend, Against weapons and arrows, until the end",
      answer: "armor",
      image_index: 92
    },
    2: {
      question: "It guides your path, and tells you the way, North, South, East, or West, it never strays",
      answer: "compass",
      image_index: 140
    },
    3: {
      question: "A gooey creature, that oozes and flows, It jiggles and wiggles, wherever it goes",
      answer: "slime",
      image_index: 169
    },
    4: {
      question: "A garment that covers, the upper part of the skin, It's worn with ease, and comes in all kinds of grin",
      answer: "shirt",
      image_index: 89
    },
    5: {
      question: "Without them, we'd crumble, and fall to the ground, What am I, that makes us stand tall and resound?",
      answer: "bone",
      image_index: 130
    },
    6: {
      question: "With no legs to be found, It moves with grace, all over the ground",
      answer: "serpent",
      image_index: 164
    },
    7: {
      question: "It creeps and crawls, with no sound or noise, Waiting for dinner, to make its choice.",
      answer: "spider",
      image_index: 155
    },
    8: {
      question: "A wall of defense, against the enemy's might, It blocks their attacks, and protects the fight",
      answer: "shield",
      image_index: 110
    },
    9: {
      question: "If you have me, you want to share me, if you share me, you haven't got me. What am I?",
      answer: "secret",
      image_index: 151
    },
    10: {
      question: "It creeps through the desert, with a venomous trail. If you feel its sting, you will wail",
      answer: "scorpion",
      image_index: 170
    },
    11: {
      question: "Wrapped in linen, with a curse bold, It rests in its tomb, with secrets untold",
      answer: "pharaoh",
      image_index: 173
    },
    12: {
      question: "A symbol of hope, and a wonder so vast, What am I that lasts and lasts?",
      answer: "star",
      image_index: 31
    },
    13: {
      question: "A container of riches, and memories so fair, It's locked and secured, with treasures so rare",
      answer: "chest",
      image_index: 32
    },
    14: {
      question: "No wealth, no power, no fame can escape, Its grasp, it comes for all, both young and old",
      answer: "death",
      image_index: 129
    },
    15: {
      question: "A symbol of power, and a way to be bold, What am I, the means to protect, or conquer and hold?",
      answer: "blade",
      image_index: 62
    },
    16: {
      question: "A being of terror, that haunts the night, Its form is grotesque, with a chilling sight",
      answer: "monster",
      image_index: 175
    },
    17: {
      question: "A symbol of unity, and a way to show pride, What am I, a flag of glory, that stands on high with stride?",
      answer: "banner",
      image_index: 142
    },
    18: {
      question: "A wand of enchantment, that holds untold sway, a tool of wizards, that casts spells every day?",
      answer: "staff",
      image_index: 117
    },
    19: {
      question: "A length of parchment, that holds a tale, It rolls and unrolls, like the wind in a gale",
      answer: "scroll",
      image_index: 50
    },
    20: {
      question: "Small and delicate, with a cap so round, It pops up from the ground, without a sound",
      answer: "shroom",
      image_index: 160
    },
    21: {
      question: "I am cold and still. In the ground, I lay, Until I decompose and spill.",
      answer: "corpse",
      image_index: 178
    },
    22: {
      question: "A thinking being, with a soul and a heart, With the power to love, and the will to be smart",
      answer: "man",
      image_index: 141
    },
    23: {
      question: "Ticking away, with a dangerous spark, It can bring down buildings, tear them apart",
      answer: "bomb",
      image_index: 82
    },
    24: {
      question: "With tusks so sharp, and a bristly mane, It roams through the forest, and causes some pain",
      answer: "boar",
      image_index: 166
    },
    25: {
      question: "With many legs, it moves so fast, Through the dirt and undergrowth it's cast",
      answer: "centiped",
      image_index: 158
    },
    26: {
      question: "With bow in hand, and arrow nocked tight, They aim for the target, with unerring sight",
      answer: "archer",
      image_index: 148
    },
    27: {
      question: "It's beyond imagination, its essence indescribable, With a mere glimpse, it drives minds to be undeniable",
      answer: "eldtritc",
      image_index: 171
    },
    28: {
      question: "You can drop me from the tallest building and I\u2019ll be fine, but if you drop me in water I die.",
      answer: "paper",
      image_index: 48
    },
    29: {
      question: "An incantation of magic, that's cast with a word, It weaves the arcane, to do what's preferred",
      answer: "spell",
      image_index: 136
    },
    30: {
      question: "A final resting place, for the dead to lie, Beneath the cold earth, until the sky",
      answer: "headston",
      image_index: 131
    },
    31: {
      question: "With wings like a cloak, it flies through the night, Echolocation guiding, its hunt for delight",
      answer: "bat",
      image_index: 163
    },
    32: {
      question: "A symbol of strength, and a fierce wild force, What am I, a hunter, of course.",
      answer: "bear",
      image_index: 167
    },
    33: {
      question: "A master of survival, in pond and in land, What am I, a creature, with legs so grand?",
      answer: "toad",
      image_index: 156
    },
    34: {
      question: "A key to adventure, and discovery untold, What am I  to unfold?",
      answer: "map",
      image_index: 51
    },
    35: {
      question: "A shell for the head, protection it brings, For knights in battle, or for kings",
      answer: "helmet",
      image_index: 103
    },
    36: {
      question: "A marker that points, to the path you should take, It guides the lost, and helps decisions to make",
      answer: "post",
      image_index: 143
    },
    37: {
      question: "What has a neck but no head?",
      answer: "bottle",
      image_index: 40
    },
    38: {
      question: "A creature that barks, with a wag of its tail, It's a faithful friend, who'll never fail",
      answer: "pooch",
      image_index: 165
    },
    39: {
      question: "A mixture of liquids, with magic inside,  It's bottled and brewed, with ingredients tried",
      answer: "potion",
      image_index: 44
    },
    40: {
      question: "I have a hard shell, many legs and sometimes I fly, I can be found crawling or taking to the sky.",
      answer: "beetle",
      image_index: 157
    },
    41: {
      question: "An apparition, a spirit so light, It haunts in the shadows, and gives us a fright",
      answer: "phantom",
      image_index: 174
    },
    42: {
      question: "I am weightless, but you can see me. Put me in a bucket, and I\u2019ll make it lighter?",
      answer: "hole",
      image_index: 20
    },
    43: {
      question: "What has a head and a tail, but no body?",
      answer: "coin",
      image_index: 121
    },
    44: {
      question: "I am not alive, but I can die. I don't have muscles, but I move. I don't have a mind, but I can think.",
      answer: "robot",
      image_index: 182
    },
    45: {
      question: "A treasure of knowledge, and wisdom untold, What am I, a monument of words, from the ancient and old?",
      answer: "tome",
      image_index: 52
    },
    46: {
      question: "With a long, slender tail and pointy ears, I scurry and sneak without any fears.",
      answer: "rat",
      image_index: 152
    },
    47: {
      question: "What is black when you buy it, red when you use it and gray when you throw it away?",
      answer: "charcoal",
      image_index: 122
    },
    48: {
      question: "Dark and fiery, with horns on its head, It's a creature feared and often depicted as red.",
      answer: "demon",
      image_index: 183
    },
    49: {
      question: "With a battle cry so fierce and bold, This brute with tusks and armor cold,",
      answer: "orc",
      image_index: 179
    }
  };

  // ../client/src/answer_to_byte_pattern.ts
  var letter_to_code = {
    a: [0, 0, 0, 0],
    b: [0, 0, 0, 1],
    c: [0, 0, 1, 0],
    d: [0, 0, 1, 1],
    e: [0, 1, 0, 0],
    f: [0, 1, 0, 1],
    /**
     * no g
     */
    h: [0, 1, 1, 0],
    i: [0, 1, 1, 1],
    /**
     * no j or k
     */
    l: [1, 0, 0, 0],
    m: [1, 0, 0, 1],
    n: [1, 0, 1, 0],
    o: [1, 0, 1, 1],
    p: [1, 1, 0, 0],
    r: [1, 1, 0, 1],
    s: [1, 1, 1, 0],
    t: [1, 1, 1, 1]
    /**
     * no u through z
     */
  };
  var answer_to_byte_pattern = (answer) => {
    const lowercase = answer.toLowerCase();
    const pattern = [];
    for (let i = 0; i < 8; i++) {
      const letter = lowercase[i] ?? "a";
      const code = letter_to_code[letter] ?? letter_to_code["a"];
      pattern.push(...code);
    }
    return pattern;
  };

  // ../client/src/adjust_samples_for_current_guess.ts
  var adjust_samples_for_current_guess = (answer, current_guess, samples) => {
    const byte_pattern = answer_to_byte_pattern(answer);
    const current_guess_pattern = answer_to_byte_pattern(current_guess);
    let current_sample_index = 0;
    let times_through_all_samples = 0;
    for (let i = 0; i < byte_pattern.length; i++) {
      while (true) {
        const sample_data = samples.data[current_sample_index];
        current_sample_index++;
        if (current_sample_index >= samples.dims[0]) {
          current_sample_index = 0;
          times_through_all_samples++;
          if (times_through_all_samples > 2) {
            break;
          }
        }
        const value = (sample_data & 49152) >> 14;
        switch (value) {
          case 0:
            if (byte_pattern[i] != 0) {
              continue;
            }
            break;
          case 3:
            if (byte_pattern[i] != 1) {
              continue;
            }
            break;
          default:
            continue;
        }
        samples.data[current_sample_index] = sample_data & 16383 | (current_guess_pattern[i] == 1 ? 3 : 0) << 14;
        break;
      }
    }
    return samples;
  };

  // ../client/src/filter_text_input.ts
  var filter_text_input = (input) => {
    let new_text = Array.from(input.toLowerCase()).filter((char) => letter_to_code[char] !== void 0).join("");
    if (new_text.length > 8) {
      new_text = new_text.slice(0, 8);
    }
    return new_text;
  };

  // ../client/src/globals.ts
  var controller = null;
  var computer_controller = null;
  var set_controller = (new_controller) => {
    controller = new_controller;
  };
  var set_computer_controller = (new_controller) => {
    computer_controller = new_controller;
  };
  var get_computer_controller = () => {
    return computer_controller;
  };

  // ../client/src/Controller.ts
  var Controller = class {
    constructor(data, test_size) {
      this.test_size = test_size;
      this.canvas = document.getElementById(
        "canvas"
      );
      this.context = this.canvas.getContext("2d");
      this.reconstruction = null;
      // puzzle_index = 1; // Math.floor(Math.random() * puzzles.length);
      // image_index = 29; //Math.floor(Math.random() * 25 * 8);
      this.puzzle_index = Math.floor(Math.random() * Object.keys(puzzles).length);
      this.tileset = load_image("static/fantasy-tileset.png");
      this.image_data_canvas = document.createElement("canvas");
      this.image_data_context = this.image_data_canvas.getContext("2d");
      this.solve_count = 0;
      this.current_guess = "";
      this.question_box = document.getElementById("question-box");
      this.left_button = document.getElementById("left-button");
      this.right_button = document.getElementById("right-button");
      this.win_status = document.getElementById("win-status");
      this.terminal_input = document.getElementById(
        "terminal-input"
      );
      this.on_previous = () => {
        let next_index = this.puzzle_index - 1;
        if (next_index < 0) {
          next_index = Object.keys(puzzles).length - 1;
        }
        this.move_to_new_index(next_index);
      };
      this.on_next = () => {
        this.move_to_new_index(
          (this.puzzle_index + 1) % Object.keys(puzzles).length
        );
      };
      this.move_to_new_index = (index) => {
        this.puzzle_index = index;
        const { solved, answer } = puzzles[this.puzzle_index];
        const guess = solved ? answer : "";
        this.terminal_input.value = guess;
        this.current_guess = guess;
        this.setup_question_box();
        this.re_run_reconstruction();
      };
      this.on_input_change = () => {
        const filtered_input = filter_text_input(this.terminal_input.value);
        if (filtered_input !== this.terminal_input.value) {
          this.terminal_input.value = filtered_input;
        }
        this.current_guess = filtered_input;
        this.check_answer();
        this.re_run_reconstruction();
      };
      this.check_answer = () => {
        const puzzle = puzzles[this.puzzle_index];
        const { solved, answer } = puzzle;
        if (solved) {
          return;
        }
        const guess_substring = this.current_guess.substring(0, answer.length);
        if (guess_substring !== answer) {
          return;
        }
        puzzle.solved = true;
        this.setup_question_box();
        this.solve_count += 1;
        get_computer_controller()?.on_puzzle_solved();
        this.win_status.innerText = `#solved: ${this.solve_count}`;
        if (this.solve_count === 7) {
          this.win_status.innerText = "Press the big button!";
          get_computer_controller()?.play_win_animation();
        }
        if (this.solve_count === Object.keys(puzzles).length) {
          this.win_status.innerText = "Solved all puzzles!";
        }
      };
      this.setup_question_box = () => {
        const { solved, question } = puzzles[this.puzzle_index];
        this.question_box.innerText = `#${this.puzzle_index}:${solved ? " \u2713 solved" : ""}
` + question;
      };
      this.re_run_reconstruction = async () => {
        const { answer, image_index } = puzzles[this.puzzle_index];
        const column = image_index % 8;
        const row = Math.floor(image_index / 8);
        this.samples = await image_to_samples(
          this.tileset,
          column * 32,
          row * 32,
          32,
          32,
          this.image_data_context,
          this.sample_func
        );
        this.samples = adjust_samples_for_current_guess(
          answer,
          this.current_guess,
          this.samples
        );
        this.reconstruction = new Reconstruction(
          this.test_size,
          this.samples,
          this.model,
          this.reconstruct,
          50
        );
      };
      this.update_and_draw = async () => {
        await this.update();
        await this.draw();
        requestAnimationFrame(this.update_and_draw);
      };
      this.update = async () => {
        if (this.reconstruction === null) {
          return;
        }
        await this.reconstruction.update();
      };
      this.draw = async () => {
        if (this.reconstruction === null) {
          return;
        }
        await this.reconstruction.draw(this.color_data);
        this.context.putImageData(this.color_data, 0, 0);
      };
      this.canvas.width = test_size;
      this.canvas.height = test_size;
      this.samples = data.samples;
      this.model = data.model;
      this.reconstruct = data.reconstruct;
      this.sample_func = data.sample_func;
      this.color_data = this.context.createImageData(test_size, test_size);
      this.image_data_canvas.width = 32;
      this.image_data_canvas.height = 32;
      this.image_data_context.imageSmoothingEnabled = false;
      this.re_run_reconstruction();
      this.setup_question_box();
      this.terminal_input.addEventListener("input", this.on_input_change);
      this.left_button.addEventListener("click", this.on_previous);
      this.right_button.addEventListener("click", this.on_next);
      requestAnimationFrame(this.update_and_draw);
    }
  };

  // ../client/src/load_tensor.ts
  var load_tensor = async (path) => {
    const response = await fetch(path);
    const array_buffer = await response.arrayBuffer();
    const float_array = new Float32Array(array_buffer);
    console.log(float_array.length);
    for (let i = 0; i < 50; i++) {
      float_array[i] = 0;
    }
    return new ort.Tensor(float_array);
  };

  // ../client/src/get_models_and_data.ts
  var get_models_and_data = async (size) => {
    const start_time = performance.now();
    const num = size.toString().padStart(2, "0");
    const [samples, model, reconstruct, sample_func] = await Promise.all([
      load_tensor(`static/samples_${num}.bin`),
      ort.InferenceSession.create(`static/web_gradient_descent_${num}.onnx`, {}),
      ort.InferenceSession.create(`static/web_reconstruction_${num}.onnx`),
      ort.InferenceSession.create(`static/web_sample_${num}.onnx`)
    ]);
    console.log(performance.now() - start_time);
    console.log("session created");
    return {
      samples,
      model,
      reconstruct,
      sample_func
    };
  };

  // ../client/src/index.ts
  window.onload = async () => {
    set_computer_controller(new ComputerController());
    const test_size = 32;
    const data = await get_models_and_data(test_size);
    document.getElementById("interactive-box").style.display = "flex";
    set_controller(new Controller(data, test_size));
  };
})();
//# sourceMappingURL=index.js.map
