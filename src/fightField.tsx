import { useRef, useEffect } from "react";
import testMaps from "./assets/maps/testMap2.png";
import MainCharacterIdleAnimation from "./assets/characters/MainCharacter/MainCharacter Idle animation.png";
import MainCharacterRunningRight from "./assets/characters/MainCharacter/MainCharacter running animation.png";
import MainCharacterRunningLeft from "./assets/characters/MainCharacter/MainCharacter running left animation.png";
import CharacterAnimation from "./CharacterAnimation";
import Sprite from "./Sprite";
import CharacterSprite from "./CharacterSprite";
import CreatedTiles from "./CreatedTiles";
import collisionMapData from "./assets/maps/mapIteractiveTiles/CollisionTiles/MapTest2 16x16 tiles.tsx";

const idleAnimation = new CharacterAnimation(
  setImage(MainCharacterIdleAnimation),
  200,
  200,
  "Idle"
);
const walkAnimationRight = new CharacterAnimation(
  setImage(MainCharacterRunningRight),
  200,
  70,
  "walk"
);
const walkAnimationLeft = new CharacterAnimation(
  setImage(MainCharacterRunningLeft),
  200,
  70,
  "walk"
);

function setImage(imageRef: string) {
  let sprite = new Image();
  sprite.src = imageRef;
  return sprite;
}

function FightField() {
  const canvas: React.RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  const backGroundImg = setImage(testMaps);

  const mapContentsOffSetPosition = { x: -60, y: -30 };

  const keys = {
    arrowUp: false,
    arrowDown: false,
    arrowLeft: false,
    arrowRight: false,
    enter: false,
  };

  useEffect(() => {
    if (canvas.current === null) {
      console.error("Canvas is null");
      return;
    }
    if (!canvas.current.getContext("2d")) {
      console.error("Canvas get content is not true");
      return;
    }

    const ctx = canvas.current.getContext("2d");

    if (ctx === null) {
      console.error("ctx is null");
      return;
    }

    const backGround = new Sprite(
      ctx,
      backGroundImg,
      mapContentsOffSetPosition
    );
    const mainCharacter = new CharacterSprite(
      ctx,
      { x: canvas.current.width / 2, y: canvas.current.height / 2 },
      idleAnimation
    );
    const collisionTiles = new CreatedTiles(
      collisionMapData,
      { x: 32, y: 32 },
      ctx,
      649,
      200,
      mapContentsOffSetPosition
    );

    animate(backGround, mainCharacter, collisionTiles);
    setupMovement();
    setupNotMovement(mainCharacter);
  }, []);

  function animate(
    backGround: Sprite,
    mainCharacter: CharacterSprite,
    collisionTiles: CreatedTiles
  ) {
    window.requestAnimationFrame(() =>
      animate(backGround, mainCharacter, collisionTiles)
    );

    if (keys.arrowLeft && lastKey === "ArrowLeft") {
      backGround.position.x += 5;
      mainCharacter.switchAnimation(walkAnimationLeft);
    }
    // else if (keys.enter && lastKey === "enter" || keys.enter && lastKey === "ArrowRight") {
    //   mainCharacter.switchAnimation(attackRight);
    // }
    // else if (keys.enter && lastKey === "ArrowLeft") {
    //   mainCharacter.switchAnimation(attackLeft);
    // }
    else if (keys.arrowRight && lastKey === "ArrowRight") {
      backGround.position.x -= 5;

      mainCharacter.switchAnimation(walkAnimationRight);
    }
    if (canvas.current !== null) {
      backGround.draw();
      collisionTiles.drawTiles();
      mainCharacter.drawCharacter();
    }
  }

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

  function setupNotMovement(mainCharacter: CharacterSprite) {
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

  return (
    <div className=" fightField text-center my-5 justify-center items-center flex flex-col p-5 mx-auto shadow-inner ">
      <canvas
        className="shadow-inner"
        width="1900"
        height="300"
        id="fightField"
        ref={canvas}
      ></canvas>
    </div>
  );
}

export default FightField;
