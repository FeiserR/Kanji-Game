import { useRef, useEffect, useState } from "react";
import Sprite from "../classes/ImageCreation/Sprite.tsx";
import CharacterSprite from "../classes/ImageCreation/CharacterSprite.tsx";
import CreatedTiles from "../classes/IteractiveTiles/CreatedTiles.tsx";
import collisionMapData from "../assets/maps/mapIteractiveTiles/CollisionTiles/MapTest2 16x16 tiles.tsx";
import { idleAnimation,  walkAnimationRight,  walkAnimationLeft,} from "../animations/MainCharacterAnimations.tsx";
import { backGroundImg } from "../backgrounds/Backgrounds.tsx";

function FightField() {
  const canvas: React.RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  const mapContentsOffSetPosition = { x: -60, y: -30 };

//  let collidingLeft = false;
// let collidingRight = false;

  let lastKey = "";
  

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
      { x: 400, y: canvas.current.height / 2 },
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

    animate(false, false, backGround, mainCharacter, collisionTiles);
    setupMovement();
    setupNotMovement(mainCharacter);
  }, []);

  function animate( 
    collidingLeft: boolean,
    collidingRight: boolean,
    backGround: Sprite,
    mainCharacter: CharacterSprite,
    collisionTiles: CreatedTiles
  ) {

    if (collisionTiles.tilesPositionsLeft.length > 0 && collisionTiles.tilesPositionsRight.length > 0) {
      if (mainCharacter.position.x <= collisionTiles.tilesPositionsRight[0]) {
        console.log("colliding");
        console.log(collidingLeft)
        collidingLeft= true;
      } else { 
          console.log("not colliding");
          console.log(collidingLeft)
          collidingLeft= false;
        }
        // if (mainCharacter.position.x +  >= collisionTiles.tilesPositionsLeft[0]) {
        //   collidingRight = true;
        // }
    } 
    
    if (keys.arrowLeft && lastKey === "ArrowLeft" && !collidingLeft) {
      backGround.position.x += 5;
      collisionTiles.tilesPositionsLeft[0] += 5;
      collisionTiles.tilesPositionsRight[0] += 5;
      mainCharacter.switchAnimation(walkAnimationLeft);
    }else {}

    if (keys.arrowRight && lastKey === "ArrowRight") {
      backGround.position.x -= 5;
      collisionTiles.tilesPositionsLeft[0] -= 5;
      collisionTiles.tilesPositionsRight[0] -= 5;
      mainCharacter.switchAnimation(walkAnimationRight);
    }
    if (canvas.current !== null) {
      backGround.draw();
      collisionTiles.drawTiles();
      mainCharacter.drawCharacter();
    }

    requestAnimationFrame(() => {
      animate(collidingLeft, collidingRight, backGround, mainCharacter, collisionTiles);
    });
  }

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
    <div className=" text-center my-5 justify-center items-center flex flex-col p-5 mx-auto shadow-inner ">
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
