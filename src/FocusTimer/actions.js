import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";
import * as el from "./elements.js";
import { updateDisplay } from "./timer.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();

  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function plus() {
  el.minutes.addEventListener("click", plus);
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);
  minutes = minutes + 5;
  seconds = seconds + 0;
  updateDisplay(minutes, seconds);
  sounds.buttonPressAudio.play();
}

export function minus() {
  el.minutes.addEventListener("click", minus);
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);
  minutes = minutes - 5;
  seconds = seconds - 0;
  updateDisplay(minutes, seconds);
  sounds.buttonPressAudio.play();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  if (state.isMute) {
    sounds.bgTreeAudio.play();

    return;
  }
  sounds.bgTreeAudio.pause();
}

export function toggleMusic2() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  if (state.isMute) {
    sounds.bgCloudRain.play();
    return;
  }
  sounds.bgCloudRain.pause();
}

export function toggleMusic3() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  if (state.isMute) {
    sounds.bgCoffeeShop.play();
    return;
  }
  sounds.bgCoffeeShop.pause();
}

export function toggleMusic4() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  if (state.isMute) {
    sounds.bgFlame.play();
    return;
  }
  sounds.bgFlame.pause();
}
