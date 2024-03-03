import { useRef, useEffect, useState } from "react";
import testMaps from "./assets/maps/Testmap1.png";
import skeletonWalk from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton walkTest3.png";
import skeletonIdle from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton idleTest3.png";
import skeletonAttack from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton attacktest3.png";
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


  const numberOfPixesPerFrame = [ 96, 88, 172];
  
  const [animationNumber, setAnimationNumber] = useState(0);

  


  const characterImg = setImage(skeletonIdle)


  const idleImg = setImage(skeletonIdle);
  const walkImg = setImage(skeletonWalk);
  const attackImg = setImage(skeletonAttack);
  const arrayOfCharacterImages = [
    idleImg,
    walkImg, 
    attackImg
  ];

  
  const mapPosition = {
    x: -60,
    y: -30,
  };

  //172 for attacktest2.png
  //96 for idleTest3.png
  //88 for walkTest1.png

  const characterSize = new VectorsXY( numberOfPixesPerFrame[animationNumber] , characterImg.height);

  

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

    const backGround = new Sprite(ctx, backGroundImg, mapPosition, []);
    const mainCharacter = new CharacterSprite(
      ctx,
      characterImg,
      { x:canvas.current.width / 2 - characterSize.x / 2,
        y: canvas.current.height / 2 - characterSize.y / 64 },
       characterSize,
      0,
      arrayOfCharacterImages
      
    );
    mainCharacter.createAnimation();

    function animate() {
      window.requestAnimationFrame(animate);

      if (keys.arrowLeft  && lastKey === "ArrowLeft") { 
        backGround.position.x += 1;
        mainCharacter.image = arrayOfCharacterImages[2];
      } 
      else if (keys.arrowRight && lastKey === "ArrowRight") { 
        backGround.position.x -= 1; 
        mainCharacter.image = arrayOfCharacterImages[1];
      }
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
        case "ArrowLeft":
          keys.arrowLeft = true;
          lastKey = "ArrowLeft";
          // animationNumber = 1;
          break;
        case "ArrowRight":
          keys.arrowRight = true;
          lastKey = "ArrowRight";
          // animationNumber = 2;
          break;
        default:
          break;
      }
    });
  }

  function setupNotMovement() {
    window.addEventListener("keyup", (e) => {
      switch (e.key) {
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
