import AnimatableSprite from "../classes/ImageCreation/AnimatableSprite";
import { idleAnimation } from "../animations/MainCharacterAnimations";

let keys = {
    arrowLeft: false,
    arrowRight: false,
    enter: false,
    };

let lastKey = "";

function setupMovement() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
            keys.arrowLeft = true;
            lastKey = "ArrowLeft";

          break;
        case "ArrowRight":
          keys.arrowRight = true;
          lastKey = "ArrowRight";

          break;
        case "Enter":
          keys.enter = true;
          lastKey = "enter";

          break;
        default:
          break;
      }
    });
    }

function setupNotMovement(mainCharacter: AnimatableSprite) {
    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          keys.arrowLeft = false;
          mainCharacter.switchAnimation(idleAnimation);

          break;
        case "ArrowRight":
          keys.arrowRight = false;
          mainCharacter.switchAnimation(idleAnimation);

          break;
        default:
          break;
      }
    });
  }

export {setupMovement, setupNotMovement, keys, lastKey};