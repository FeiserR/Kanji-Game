import { useRef, useEffect } from "react";
import testMaps from "./assets/maps/Testmap1.png";
import skeletonWalkRight from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton walkRight.png";
import skeletonWalkLeft from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeletok walkLeft.png";
import skeletonIdle from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton idle.png";
import skeletonAttack from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton attack.png";
import CharacterAnimation from "./CharacterAnimation";
import Sprite from "./Sprite";
import CharacterSprite from "./CharacterSprite";

function setImage(imageRef: string) {
  let sprite = new Image();
  sprite.src = imageRef;
  return sprite;
}

function FightField() {
  const canvas: React.RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  const backGroundImg = setImage(testMaps);
  
  const idleAnimation =  new CharacterAnimation (
    setImage(skeletonIdle),
    96,
    100,
    "Idle"
  );
  const walkAnimationRight =  new CharacterAnimation (
    setImage(skeletonWalkRight),
    88,
    100,
    "walk"
  );
  const walkAnimationLeft =  new CharacterAnimation (
    setImage(skeletonWalkLeft),
    88,
    100,
    "walk"
  );
  const attackAnimation =  new CharacterAnimation (
    setImage(skeletonAttack),
    172,
    100,
    "attack"
  );

  const mapPosition = { x: -60, y: -30,};

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
    
    const backGround = new Sprite(ctx, backGroundImg, mapPosition);
    const mainCharacter = new CharacterSprite(
      ctx,
      { x: canvas.current.width / 2, y: canvas.current.height / 2 },
      idleAnimation 
    );

    animate(backGround, mainCharacter );
    setupMovement();
    setupNotMovement(mainCharacter);
  }, []);
  


  function animate(backGround: Sprite, mainCharacter: CharacterSprite) {
    window.requestAnimationFrame(() => animate(backGround, mainCharacter));

    if (keys.arrowLeft && lastKey === "ArrowLeft") {
      backGround.position.x += 1;
      mainCharacter.switchAnimation(walkAnimationLeft);
    } 
  
    else if (keys.enter && lastKey === "enter") {
      mainCharacter.switchAnimation( attackAnimation);
    }
    else if (keys.arrowRight && lastKey === "ArrowRight") {
      backGround.position.x -= 1;

      mainCharacter.switchAnimation(walkAnimationRight);

    }
    if (canvas.current !== null) {
      backGround.draw();
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
    <div className="bg-white p-5 rounded-lg shadow-lg text-center mx-auto my-5 justify-center items-center flex flex-col object-contain">
      <p className="text-2xl font-bold text-black">Fight Field</p>
      //make the canvas bigger with css
      <canvas
        className=" border-2 border-black rounded-lg mt-5 shadow-lg"
        width="800"
        height="300"
        id="fightField"
        ref={canvas}
      ></canvas>
    </div>
  );
}

export default FightField;
