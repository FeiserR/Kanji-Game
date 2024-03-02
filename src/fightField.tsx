import { useRef, useEffect } from "react";
import testMaps from "./assets/maps/testMaps.png";
import adventurer from "./assets/characters/adventurer-v1.5-Sheet.png";
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

  const Characterimg = setImage(adventurer);

  let mapAxisY = -200;
  let mapAxisX = -100;
  
  const keys = {
    arrowUp: false,
    arrowDown: false,
    arrowLeft: false,
    arrowRight: false,
  };

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

  // ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
  const backGround = new Sprite(ctx, backGroundImg, mapAxisY, mapAxisX);
  const mainCharacter = new CharacterSprite(
    ctx,
    Characterimg,
    0,
    0,
    canvas.current.width / 2 - Characterimg.width / 8 / 2,
    canvas.current.height / 2 - Characterimg.width / 16 / 2,
    Characterimg.width / 8,
    Characterimg.height / 16
  );

  function animate() {
    window.requestAnimationFrame(animate);

    if (keys.arrowUp) {
      backGround.positionY += 1;
    }
    if (keys.arrowDown) {
      backGround.positionY -= 1;
    }
    if (keys.arrowLeft) {
      backGround.positionX += 1;
    }
    if (keys.arrowRight) {
      backGround.positionX -= 1;
    }


    if (canvas.current !== null) {
      backGround.draw();
      mainCharacter.drawCharacter();
    }

  
    
  }

  useEffect(() => {
    animate();
  }, []); 



  async function setupMovement() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          keys.arrowUp = true;
          break;
        case "ArrowDown":
          keys.arrowDown = true;
          break;
        case "ArrowLeft":
          keys.arrowLeft = true;
          break;
        case "ArrowRight":
          keys.arrowRight = true;
          break;
        default:
          break;
      }
    });
  }

  async function setupNotMovement() {
    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowUp":
          keys.arrowUp = false;
          break;
        case "ArrowDown":
          keys.arrowDown = false;
          break;
        case "ArrowLeft":
          keys.arrowLeft = false;
          break;
        case "ArrowRight":
          keys.arrowRight = false;
          break;
        default:
          break;
      }
    });
  }

  useEffect(() => {
    setupMovement();
    setupNotMovement();
  }, []);

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg text-center w-1/4 mx-auto my-5 justify-center items-center flex flex-col">
      <p className="text-2xl font-bold text-black">Fight Field</p>
      <canvas
        className=" w-5/6 bg-gray-200"
        id="fightField"
        ref={canvas}
      ></canvas>
    </div>
  );
}

export default FightField;
