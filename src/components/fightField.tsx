import { useRef, useEffect } from "react";
import animate from "../functions/animate.tsx";
import AnimatableSprite from "../classes/ImageCreation/AnimatableSprite.tsx";
import {  idleAnimation,  walkAnimationRight,  walkAnimationLeft,} from "../animations/CharacterAnimations/MainCharacterAnimations.tsx";
import { setMovement, setupNotMovement } from "../functions/SetUpMovement.tsx";
import { dungeonMap } from "../Maps/Dungeon/Map.tsx";

function FightField() {
  const canvas: React.RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const arrayOfMainCharacterAnimations = [
      idleAnimation,
      walkAnimationLeft,
      walkAnimationRight,
    ];

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
    const mainCharacter = new AnimatableSprite(
      { x: 400, y: 150 },
      idleAnimation,
      arrayOfMainCharacterAnimations
    );

    if (canvas.current === null) return;

    animate(ctx, false, false, dungeonMap);
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
