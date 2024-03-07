import  CreateTiles  from "../classes/IteractiveTiles/CreateTiles.tsx";
import AnimatableSprite from "../classes/ImageCreation/AnimatableSprite.tsx";
import  Sprite  from "../classes/ImageCreation/Sprite.tsx";
import collisionMapData from "../assets/maps/mapIteractiveTiles/CollisionTiles/MapTest2 16x16 tiles.tsx";
import { idleAnimation,  walkAnimationRight,  walkAnimationLeft, AttackAnimation } from "../animations/CharacterAnimations/MainCharacterAnimations.tsx";
import { fireEffect, brownCloudEffect } from "../animations/EffectsAnimations/Effects.tsx";
import { backGroundImg } from "./Backgrounds.tsx";
import Map from "../classes/ImageCreation/Map.tsx";
import { SkeletonIdleRightAnimation, SkeletonIdleLeftAnimation, SkeletonAttackLeft }  from "../animations/CharacterAnimations/SkeletonAnimations.tsx";
import VectorsXY from "../classes/Directions/VectorsXY.tsx";


const mapContentsOffSetPosition = new VectorsXY ( -60, -30 );

const arrayOfMainCharacterAnimations = [idleAnimation, walkAnimationLeft, walkAnimationRight, AttackAnimation];
const arrayOfSkeletonAnimations = [SkeletonIdleRightAnimation, SkeletonIdleLeftAnimation, SkeletonAttackLeft];

  const dungeon = new Sprite(
    backGroundImg,
    mapContentsOffSetPosition
  );

  const mainCharacter = new AnimatableSprite(
    new VectorsXY( 400,  150 ),
    idleAnimation,
    arrayOfMainCharacterAnimations
  );

  const fire = new AnimatableSprite(
    new VectorsXY( 3000, 150 ),
    fireEffect
  );

  const brownCloud = new AnimatableSprite(
    new VectorsXY( 900,  150 ),
    brownCloudEffect
  );

  const collisionTiles = new CreateTiles(
    collisionMapData,
    new VectorsXY( 32,  32 ),
    649,
    200,
    mapContentsOffSetPosition
  );


const arrayOfComponets = [fire, brownCloud];

const dungeonMap = new Map(true, dungeon, mainCharacter, arrayOfComponets, [], collisionTiles);



const fightingMainCharacter = new AnimatableSprite(
  new VectorsXY( 100,  150 ),
  idleAnimation,
  arrayOfMainCharacterAnimations
);

const fightingDungeon = new Sprite(
  backGroundImg,
  mapContentsOffSetPosition
);


const skeleton = new AnimatableSprite(
  new VectorsXY( 1700,  160 ),
  SkeletonIdleLeftAnimation,
  arrayOfSkeletonAnimations
);

const arrayOfFightingDungeonComponets = [skeleton];

const fightingDungeonMap = new Map(false, fightingDungeon, fightingMainCharacter, [], arrayOfFightingDungeonComponets, collisionTiles);

export {dungeonMap, fightingDungeonMap};