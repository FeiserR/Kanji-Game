import  CreateTiles  from "../../classes/IteractiveTiles/CreateTiles";
import AnimatableSprite from "../../classes/ImageCreation/AnimatableSprite";
import  Sprite  from "../../classes/ImageCreation/Sprite";
import collisionMapData from "../../assets/maps/mapIteractiveTiles/CollisionTiles/MapTest2 16x16 tiles.tsx";
import { idleAnimation,  walkAnimationRight,  walkAnimationLeft, } from "../../animations/CharacterAnimations/MainCharacterAnimations.tsx";
import { fireEffect, brownCloudEffect } from "../../animations/EffectsAnimations/Effects.tsx";
import { backGroundImg } from "../../Maps/Dungeon/Backgrounds.tsx";
import Map from "../../classes/ImageCreation/Map";


const mapContentsOffSetPosition = { x: -60, y: -30 };

const arrayOfMainCharacterAnimations = [idleAnimation, walkAnimationLeft, walkAnimationRight];

  const dungeon = new Sprite(
    backGroundImg,
    mapContentsOffSetPosition
  );

  const mainCharacter = new AnimatableSprite(
    { x: 400, y: 150 },
    idleAnimation,
    arrayOfMainCharacterAnimations
  );

  const fire = new AnimatableSprite(
    { x: -60, y: -95 },
    fireEffect
  );

  const brownCloud = new AnimatableSprite(
    { x: 900, y: -30},
    brownCloudEffect
  );

  const collisionTiles = new CreateTiles(
    collisionMapData,
    { x: 32, y: 32 },
    649,
    200,
    mapContentsOffSetPosition
  );


  const arrayOfEffects = [fire, brownCloud];

const dungeonMap = new Map( dungeon, mainCharacter, arrayOfEffects, [], collisionTiles);

export {dungeonMap};