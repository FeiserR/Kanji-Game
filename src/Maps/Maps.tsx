import  CreateTiles  from "../classes/IteractiveTiles/CreateTiles.tsx";
import AnimatableSprite from "../classes/ImageCreation/AnimatableSprite.tsx";
import  Sprite  from "../classes/ImageCreation/Sprite.tsx";
import collisionMapData from "../assets/Data/collisionTiles 230.tsx";
import { idleAnimation,  walkAnimationRight,  walkAnimationLeft, AttackAnimation } from "../animations/CharacterAnimations/MainCharacterAnimations.tsx";
import { fireEffect, brownCloudEffect } from "../animations/EffectsAnimations/Effects.tsx";
import { dungeonBackground, backGroundImg2, forestShop } from "./Backgrounds.tsx";
import { BattleMap, MovementMap } from "../classes/ImageCreation/Map.tsx";
import { SkeletonIdleRightAnimation, SkeletonIdleLeftAnimation, SkeletonAttackLeft }  from "../animations/CharacterAnimations/SkeletonAnimations.tsx";
import VectorsXY from "../classes/Directions/VectorsXY.tsx";

const mapContentsOffSetPosition = new VectorsXY ( -60, 0 );

const arrayOfSkeletonAnimations = [SkeletonIdleRightAnimation, SkeletonIdleLeftAnimation, SkeletonAttackLeft];

  const dungeon = new Sprite(
    dungeonBackground,
    mapContentsOffSetPosition
  );

  const mainCharacter = new AnimatableSprite(
    new VectorsXY( 400,  160 ),
    idleAnimation,
    [idleAnimation, walkAnimationLeft, walkAnimationRight, AttackAnimation]
  );

  const fire = new AnimatableSprite(
    new VectorsXY( 100, -(fireEffect.spriteSize.x-290)),
    fireEffect
  );

  const brownCloud = new AnimatableSprite(
    new VectorsXY( 900,  -(brownCloudEffect.spriteSize.x-290)),
    brownCloudEffect
  );

  const collisionTiles = new CreateTiles(
    collisionMapData,
    new VectorsXY( 32,  32 ),
    649,
    230,
    mapContentsOffSetPosition
  );


const arrayOfComponets = [fire, brownCloud];

const dungeonMap = new MovementMap(true, dungeon, mainCharacter, arrayOfComponets, [], collisionTiles);


const fightingDungeon = new Sprite(
  backGroundImg2,
  mapContentsOffSetPosition
);


const skeleton = new AnimatableSprite(
  new VectorsXY( 1400,  170 ),
  SkeletonIdleLeftAnimation,
  arrayOfSkeletonAnimations
);

const arrayOfFightingDungeonEnemies = [skeleton];

const fightingDungeonMap = new BattleMap(false, fightingDungeon, mainCharacter, [], arrayOfFightingDungeonEnemies , collisionTiles);

const forestShopBackground = new Sprite(
  forestShop,
  mapContentsOffSetPosition
);


const forestCollisionTiles = new CreateTiles(
  collisionMapData,
  new VectorsXY(3*24 ,  3*14 ),
  649,
  230,
  mapContentsOffSetPosition
);

const forestShopMap = new MovementMap(true, forestShopBackground, mainCharacter, [], [], forestCollisionTiles);

const maps = {
  dungeon: dungeonMap,
  fightingDungeon: fightingDungeonMap,
  forestShopMap: forestShopMap
}

export {maps};