import  CreateTiles  from "../../classes/IteractiveTiles/CreateTiles";
import AnimatableSprite from "../../classes/ImageCreation/AnimatableSprite";
import  Sprite  from "../../classes/ImageCreation/Sprite";
import collisionMapData from "../../assets/maps/mapIteractiveTiles/CollisionTiles/MapTest2 16x16 tiles.tsx";
import { idleAnimation,  walkAnimationRight,  walkAnimationLeft, } from "../../animations/CharacterAnimations/MainCharacterAnimations.tsx";
import { fireEffect, brownCloudEffect } from "../../animations/EffectsAnimations/Effects.tsx";
import { backGroundImg } from "../../Maps/Dungeon/Backgrounds.tsx";



const mapContentsOffSetPosition = { x: -60, y: -30 };

const arrayOfMainCharacterAnimations = [idleAnimation, walkAnimationLeft, walkAnimationRight];


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