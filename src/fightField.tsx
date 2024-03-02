import { useRef, useEffect } from "react";
import testMaps from "./assets/maps/Testmap1.png";
import skeleton from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton attacktest2.png";
import Sprite from "./Sprite";
import CharacterSprite from "./CharacterSprite";
import VectorsXY from "./VectorsXY";

function setImage(imageRef: string) {
  let sprite = new Image();
  sprite.src = imageRef;
  return sprite;
}

function FightField() {
  const canvas: React.RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  const backGroundImg = setImage(testMaps);

  const characterImg = setImage(skeleton);

  

  const mapPosition = {
    x: -60,
    y: -30,
  };

  const characterSize = new VectorsXY(172, characterImg.height);


  const keys = {
    arrowUp: false,
    arrowDown: false,
    arrowLeft: false,
    arrowRight: false,
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
      characterImg,
      { x:canvas.current.width / 2 - characterSize.x / 2,
        y: canvas.current.height / 2 - characterSize.y / 2 },
       characterSize,
      0
      
    );
    mainCharacter.createAnimation();

    function animate() {
      window.requestAnimationFrame(animate);

      if (keys.arrowUp) {backGround.position.y += 1;} 
      else if (keys.arrowDown) { backGround.position.y -= 1; } 
      else if (keys.arrowLeft) { backGround.position.x += 3; } 
      else if (keys.arrowRight) { backGround.position.x -= 3; }

      if (canvas.current !== null) {
        backGround.draw();
        mainCharacter.drawCharacter();
      }
    }
    animate();
  }, []);

  
  let lastKey = "";
  
  function setupMovement() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        // case "ArrowUp":
        //   keys.arrowUp = true;
        //   break;
        // case "ArrowDown":
        //   keys.arrowDown = true;
        //   break;
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
  }

  function setupNotMovement() {
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
