import AnimatableSprite from "../classes/ImageCreation/AnimatableSprite";
import { idleAnimation } from "../animations/CharacterAnimations/MainCharacterAnimations";

let keys = {
    arrowLeft: false,
    arrowRight: false,
    enter: false,
    };

let lastKey = "";



function setMovement() {
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


// function setMovementChanges() { 

//   //TODO: the fire changes position once when it shouldn't when the character is colliding
//   if (keys.arrowLeft && lastKey === "ArrowLeft" && !collidingLeft) {
//     backGround.position.x += 5;
//     fire.position.x += 10;
//     mainCharacter.switchAnimation(walkAnimationLeft);
//   }
//   if (keys.arrowRight && lastKey === "ArrowRight" && !collidingRight) {
//     backGround.position.x -= 5;
//     fire.position.x -= 10;
//     mainCharacter.switchAnimation(walkAnimationRight);
// }

export {setMovement, setupNotMovement, keys, lastKey};