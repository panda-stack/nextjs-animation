import { Howl } from "howler";
import buttonClick from "./button_click_1.mp3";
import buttonHover from "./button_hover.mp3";
import rocket1 from "./rocket_1.mp3";
import rocket2 from "./rocket_2.mp3";
import wrong from "./wrong.mp3";
import correct from "./correct.mp3";
import background from "./bgSound.mp3";

var click = new Howl({
  src: [buttonClick]
});

var hover = new Howl({
  src: [buttonHover]
});

var rocket = new Howl({
  src: [rocket2]
});

var wrongAnswer = new Howl({
  src: [wrong]
});

var correctAnswer = new Howl({
  src: [correct]
});


var backgroundSound = new Howl({
  src: [background],
  autoplay: true,
  loop: true,
  volume: 0.5
});

export {
  buttonClick,
  buttonHover,
  click,
  hover,
  rocket1,
  rocket2,
  wrong,
  correct,
  background,
  backgroundSound,
  rocket,
  wrongAnswer,
  correctAnswer
};
