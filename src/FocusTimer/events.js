import { controls, cards } from "./elements.js";
import * as actions from "./actions.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });
}

export function registerCards() {
  cards.addEventListener("click", (event) => {
    const card = event.target.closest(".color-changing-svg");

    if (!card) {
      return;
    }

    const action = card.dataset.action;

    if (typeof actions[action] !== "function") {
      return;
    }

    actions[action]();

    const paths = card.querySelectorAll("path");

    paths.forEach((path) => {
      if (path.getAttribute("fill") === "#E1E1E6") {
        path.setAttribute("fill", "#02799D");
      } else if (path.getAttribute("fill") === "#02799D") {
        path.setAttribute("fill", "#E1E1E6");
      } else if (path.getAttribute("fill") === "#323238") {
        path.setAttribute("fill", "white");
      } else if (path.getAttribute("fill") === "white") {
        path.setAttribute("fill", "#323238");
      }
    });
  });
}
