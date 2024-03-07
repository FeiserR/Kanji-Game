import { fireMagic, fireMagic2 } from "../animations/EffectsAnimations/Magic";
import CharacterAnimation from "../classes/Animation/CharacterAnimation";
import { FireBall, Magic } from "../classes/ImageCreation/Magic";
import Map from "../classes/ImageCreation/Map";

let keys = {
  arrowLeft: false,
  arrowRight: false,
  enter: false,
  enterJustPressed: false,
};

let lastKey = "";

let spells: CharacterAnimation = fireMagic;

function animate(
  c: CanvasRenderingContext2D,
  collidingLeft: boolean,
  collidingRight: boolean,
  map: Map
) {
  if (map.movement === true) {
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
        default:
          break;
      }
    });

    if (
      map.collisionMap.tilesPositions.length > 0 &&
      map.collisionMap.tilesPositions.length > 0
    ) {
      if (
        map.mainCharacter.position.x <=
        map.collisionMap.tilesPositions[0].position.x
      ) {
        collidingLeft = true;
      } else {
        collidingLeft = false;
      }
      if (
        map.mainCharacter.position.x +
          map.mainCharacter.currentAnimation.spriteSize.x >=
        map.collisionMap.tilesPositions[1].position.x
      ) {
        collidingRight = true;
      } else {
        collidingRight = false;
      }
    }

    if (keys.arrowLeft && lastKey === "ArrowLeft" && !collidingLeft) {
      map.background.position.x += 5;
      for (let i = 0; i < map.effects.length; i++) {
        map.effects[i].position.x += 5;
      }
      map.mainCharacter.switchAnimation(map.mainCharacter.AnimationsArray[1]); // walkAnimationLeft
    }
    if (keys.arrowRight && lastKey === "ArrowRight" && !collidingRight) {
      map.background.position.x -= 5;
      for (let i = 0; i < map.effects.length; i++) {
        map.effects[i].position.x -= 5;
      }
      map.mainCharacter.switchAnimation(map.mainCharacter.AnimationsArray[2]); // walkAnimationRight
    }

    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          keys.arrowLeft = false;
          map.mainCharacter.switchAnimation(
            map.mainCharacter.AnimationsArray[0]
          ); // idleAnimation

          break;
        case "ArrowRight":
          keys.arrowRight = false;
          map.mainCharacter.switchAnimation(
            map.mainCharacter.AnimationsArray[0]
          ); // idleAnimation

          break;
        case "Enter":
          keys.enter = false;
          // idleAnimation

          break;
        default:
          break;
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "Enter":
        if (keys.enter !== true) {
          keys.enterJustPressed = true;
        }
        keys.enter = true;

        break;
      case "1":
        spells = fireMagic;
        break;
      case "2":
        spells = fireMagic2;
        break;
      default:
        break;
    }
  });

  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "Enter":
        keys.enter = false;
        map.mainCharacter.switchAnimation(map.mainCharacter.AnimationsArray[0])
        break;
      default:
        break;
    }
  });

  map.background.draw(c);

  for (let i = 0; i < map.enemies.length; i++) {
    map.enemies[i].drawCharacter(c);
  }

  for (let i = 0; i < map.effects.length; i++) {
    map.effects[i].drawCharacter(c);
  }
  if (map.movement === false) {
    if (keys.enterJustPressed === true) {
      map.mainCharacter.switchAnimation(map.mainCharacter.AnimationsArray[3]);
      const magic = new FireBall(
        map.mainCharacter.position,
        map.enemies[0].position,
        5,
        spells
      );
      map.effects.push(magic);
    }
  }

  const activeMagicEffects = map.effects
    .filter((effect) => effect instanceof Magic)
    .filter((effect) => (effect as Magic).active === true);
  const nonMagicEffects = map.effects.filter(
    (effect) => !(effect instanceof Magic)
  );
  map.effects = [...activeMagicEffects, ...nonMagicEffects];

  map.collisionMap.drawTiles(c);
  map.mainCharacter.drawCharacter(c);
  keys.enterJustPressed = false;
  
  requestAnimationFrame(() => {
    animate(c, collidingLeft, collidingRight, map);
  });
}

export default animate;
