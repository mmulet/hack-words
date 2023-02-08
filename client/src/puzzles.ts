export interface Puzzle {
  question: string;
  answer: string;
  image_index: number;
  solved?: boolean;
}

export const puzzles: {
  [key: number]: Puzzle;
} = {
  0: {
    question:
      "A symbol of spring, and new beginnings too, What am I, that chews on a carrot or two?",
    answer: "rabbit",
    image_index: 161,
  },
  1: {
    question:
      "A suit of steel, to protect and defend, Against weapons and arrows, until the end",
    answer: "armor",
    image_index: 92,
  },
  2: {
    question:
      "It guides your path, and tells you the way, North, South, East, or West, it never strays",
    answer: "compass",
    image_index: 140,
  },
  3: {
    question:
      "A gooey creature, that oozes and flows, It jiggles and wiggles, wherever it goes",
    answer: "slime",
    image_index: 169,
  },
  4: {
    question:
      "A garment that covers, the upper part of the skin, It's worn with ease, and comes in all kinds of grin",
    answer: "shirt",
    image_index: 89,
  },
  5: {
    question:
      "Without them, we'd crumble, and fall to the ground, What am I, that makes us stand tall and resound?",
    answer: "bone",
    image_index: 130,
  },
  6: {
    question:
      "With no legs to be found, It moves with grace, all over the ground",
    answer: "serpent",
    image_index: 164,
  },
  7: {
    question:
      "It creeps and crawls, with no sound or noise, Waiting for dinner, to make its choice.",
    answer: "spider",
    image_index: 155,
  },
  8: {
    question:
      "A wall of defense, against the enemy's might, It blocks their attacks, and protects the fight",
    answer: "shield",
    image_index: 110,
  },
  9: {
    question:
      "If you have me, you want to share me, if you share me, you haven't got me. What am I?",
    answer: "secret",
    image_index: 151,
  },
  10: {
    question:
      "It creeps through the desert, with a venomous trail. If you feel its sting, you will wail",
    answer: "scorpion",
    image_index: 170,
  },
  11: {
    question:
      "Wrapped in linen, with a curse bold, It rests in its tomb, with secrets untold",
    answer: "pharaoh",
    image_index: 173,
  },
  12: {
    question:
      "A symbol of hope, and a wonder so vast, What am I that lasts and lasts?",
    answer: "star",
    image_index: 31,
  },
  13: {
    question:
      "A container of riches, and memories so fair, It's locked and secured, with treasures so rare",
    answer: "chest",
    image_index: 32,
  },
  14: {
    question:
      "No wealth, no power, no fame can escape, Its grasp, it comes for all, both young and old",
    answer: "death",
    image_index: 129,
  },
  15: {
    question:
      "A symbol of power, and a way to be bold, What am I, the means to protect, or conquer and hold?",
    answer: "blade",
    image_index: 62,
  },
  16: {
    question:
      "A being of terror, that haunts the night, Its form is grotesque, with a chilling sight",
    answer: "monster",
    image_index: 175,
  },
  17: {
    question:
      "A symbol of unity, and a way to show pride, What am I, a flag of glory, that stands on high with stride?",
    answer: "banner",
    image_index: 142,
  },
  18: {
    question:
      "A wand of enchantment, that holds untold sway, a tool of wizards, that casts spells every day?",
    answer: "staff",
    image_index: 117,
  },
  19: {
    question:
      "A length of parchment, that holds a tale, It rolls and unrolls, like the wind in a gale",
    answer: "scroll",
    image_index: 50,
  },
  20: {
    question:
      "Small and delicate, with a cap so round, It pops up from the ground, without a sound",
    answer: "shroom",
    image_index: 160,
  },
  21: {
    question:
      "I am cold and still. In the ground, I lay, Until I decompose and spill.",
    answer: "corpse",
    image_index: 178,
  },
  22: {
    question:
      "A thinking being, with a soul and a heart, With the power to love, and the will to be smart",
    answer: "man",
    image_index: 141,
  },
  23: {
    question:
      "Ticking away, with a dangerous spark, It can bring down buildings, tear them apart",
    answer: "bomb",
    image_index: 82,
  },
  24: {
    question:
      "With tusks so sharp, and a bristly mane, It roams through the forest, and causes some pain",
    answer: "boar",
    image_index: 166,
  },
  25: {
    question:
      "With many legs, it moves so fast, Through the dirt and undergrowth it's cast",
    answer: "centiped",
    image_index: 158,
  },
  26: {
    question:
      "With bow in hand, and arrow nocked tight, They aim for the target, with unerring sight",
    answer: "archer",
    image_index: 148,
  },
  27: {
    question:
      "It's beyond imagination, its essence indescribable, With a mere glimpse, it drives minds to be undeniable",
    answer: "eldtritc",
    image_index: 171,
  },
  28: {
    question:
      "You can drop me from the tallest building and I’ll be fine, but if you drop me in water I die.",
    answer: "paper",
    image_index: 48,
  },
  29: {
    question:
      "An incantation of magic, that's cast with a word, It weaves the arcane, to do what's preferred",
    answer: "spell",
    image_index: 136,
  },
  30: {
    question:
      "A final resting place, for the dead to lie, Beneath the cold earth, until the sky",
    answer: "headston",
    image_index: 131,
  },
  31: {
    question:
      "With wings like a cloak, it flies through the night, Echolocation guiding, its hunt for delight",
    answer: "bat",
    image_index: 163,
  },
  32: {
    question:
      "A symbol of strength, and a fierce wild force, What am I, a hunter, of course.",
    answer: "bear",
    image_index: 167,
  },
  33: {
    question:
      "A master of survival, in pond and in land, What am I, a creature, with legs so grand?",
    answer: "toad",
    image_index: 156,
  },
  34: {
    question: "A key to adventure, and discovery untold, What am I  to unfold?",
    answer: "map",
    image_index: 51,
  },
  35: {
    question:
      "A shell for the head, protection it brings, For knights in battle, or for kings",
    answer: "helmet",
    image_index: 103,
  },
  36: {
    question:
      "A marker that points, to the path you should take, It guides the lost, and helps decisions to make",
    answer: "post",
    image_index: 143,
  },
  37: {
    question: "What has a neck but no head?",
    answer: "bottle",
    image_index: 40,
  },
  38: {
    question:
      "A creature that barks, with a wag of its tail, It's a faithful friend, who'll never fail",
    answer: "pooch",
    image_index: 165,
  },
  39: {
    question:
      "A mixture of liquids, with magic inside,  It's bottled and brewed, with ingredients tried",
    answer: "potion",
    image_index: 44,
  },
  40: {
    question:
      "I have a hard shell, many legs and sometimes I fly, I can be found crawling or taking to the sky.",
    answer: "beetle",
    image_index: 157,
  },
  41: {
    question:
      "An apparition, a spirit so light, It haunts in the shadows, and gives us a fright",
    answer: "phantom",
    image_index: 174,
  },
  42: {
    question:
      "I am weightless, but you can see me. Put me in a bucket, and I’ll make it lighter?",
    answer: "hole",
    image_index: 20,
  },
  43: {
    question: "What has a head and a tail, but no body?",
    answer: "coin",
    image_index: 121,
  },
  44: {
    question:
      "I am not alive, but I can die. I don't have muscles, but I move. I don't have a mind, but I can think.",
    answer: "robot",
    image_index: 182,
  },
  45: {
    question:
      "A treasure of knowledge, and wisdom untold, What am I, a monument of words, from the ancient and old?",
    answer: "tome",
    image_index: 52,
  },
  46: {
    question: "With a long, slender tail and pointy ears, I scurry and sneak without any fears.",
    answer: "rat",
    image_index: 152,
  },
  47: {
    question:
      "What is black when you buy it, red when you use it and gray when you throw it away?",
    answer: "charcoal",
    image_index: 122,
  },
  48: {
    question:
      "Dark and fiery, with horns on its head, It's a creature feared and often depicted as red.",
    answer: "demon",
    image_index: 183,
  },
  49: {
    question:
      "With a battle cry so fierce and bold, This brute with tusks and armor cold,",
    answer: "orc",
    image_index: 179,
  },
};
