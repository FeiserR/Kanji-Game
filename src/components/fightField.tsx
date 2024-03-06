import { useRef, useEffect } from "react";
import  animate  from "../functions/animate.tsx";
import Sprite from "../classes/ImageCreation/Sprite.tsx";
import AnimatableSprite from "../classes/ImageCreation/AnimatableSprite.tsx";
import CreateTiles from "../classes/IteractiveTiles/CreateTiles.tsx";
import collisionMapData from "../assets/maps/mapIteractiveTiles/CollisionTiles/MapTest2 16x16 tiles.tsx";
import { idleAnimation,  walkAnimationRight,  walkAnimationLeft, } from "../animations/CharacterAnimations/MainCharacterAnimations.tsx";
import { fireEffect, brownCloudEffect } from "../animations/EffectsAnimations/Effects.tsx";
import { backGroundImg } from "../Maps/Dungeon/Backgrounds.tsx";
import { setMovement, setupNotMovement } from "../functions/SetUpMovement.tsx";

function FightField() {
  const canvas: React.RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
  
  const mapContentsOffSetPosition = { x: -60, y: -30 };

  const arrayOfMainCharacterAnimations = [idleAnimation, walkAnimationLeft, walkAnimationRight];
  
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
    const dungeon = new Sprite(
      ctx,
      backGroundImg,
      mapContentsOffSetPosition
    );
    const mainCharacter = new AnimatableSprite(
      ctx,
      { x: 400, y: canvas.current.height / 2 },
      idleAnimation,
      arrayOfMainCharacterAnimations
    );
    const fire = new AnimatableSprite(
      ctx,
      { x: -60, y: -95 },
      fireEffect
    );
    const brownCloud = new AnimatableSprite(
      ctx,
      { x: 900, y: -30},
      brownCloudEffect
    );
    const collisionTiles = new CreateTiles(
      collisionMapData,
      { x: 32, y: 32 },
      ctx,
      649,
      200,
      mapContentsOffSetPosition
    );
    const arrayOfEffects = [fire, brownCloud];

    if (canvas.current === null) return;


    animate(false, false, dungeon, mainCharacter, arrayOfEffects, collisionTiles);
    setMovement();
    setupNotMovement(mainCharacter);

  }, []);



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
