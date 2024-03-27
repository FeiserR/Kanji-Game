import  CreateTiles  from "../classes/IteractiveTiles/CreateTiles.tsx";
import AnimatableSprite from "../classes/ImageCreation/AnimatableSprite.tsx";
import  Sprite  from "../classes/ImageCreation/Sprite.tsx";
import collisionMapData from "../assets/Data/collisionTiles 230.tsx";
import { idleAnimation,  walkAnimationRight,  walkAnimationLeft, AttackAnimation } from "../animations/CharacterAnimations/MainCharacterAnimations.tsx";
import { fireEffect, brownCloudEffect } from "../animations/EffectsAnimations/Effects.tsx";
import { dungeonBackground, backGroundImg2, forestShop } from "./Backgrounds.tsx";
import { BattleMap, MovementMap } from "../classes/ImageCreation/Map.tsx";
import { SkeletonIdleRightAnimation, SkeletonIdleLeftAnimation, SkeletonAttackLeft, SkeletonHit, SkeletonDeathAnimation }  from "../animations/CharacterAnimations/SkeletonAnimations.tsx";
import Vector from "../classes/Directions/VectorsXY.tsx";
import { Enemy, MainCharacter } from "../classes/ImageCreation/Being.tsx";

const mapContentsOffSetPosition = new Vector ( -60, 0 );

const arrayOfSkeletonAnimations = [SkeletonIdleRightAnimation, SkeletonIdleLeftAnimation, SkeletonAttackLeft, SkeletonHit, SkeletonDeathAnimation];

  const dungeon = new Sprite(
    dungeonBackground,
    mapContentsOffSetPosition
  );

  const mainCharacter = new MainCharacter(
    new Vector( 400,  160 ),
    idleAnimation,
    [idleAnimation, walkAnimationLeft, walkAnimationRight, AttackAnimation]
  );

  const fire = new AnimatableSprite(
    new Vector( 100, -(fireEffect.spriteSize.x-290)),
    fireEffect
  );

  const brownCloud = new AnimatableSprite(
    new Vector( 900,  -(brownCloudEffect.spriteSize.x-290)),
    brownCloudEffect
  );

  const collisionTiles = new CreateTiles(
    collisionMapData,
    new Vector( 32,  32 ),
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


const skeleton = new Enemy(
  new Vector( 1400,  170 ),
  SkeletonIdleLeftAnimation,
  arrayOfSkeletonAnimations
);

const arrayOfFightingDungeonEnemies = [skeleton];

const fightingDungeonMap = new BattleMap(false, fightingDungeon, mainCharacter, [],[], arrayOfFightingDungeonEnemies , collisionTiles);

const forestShopBackground = new Sprite(
  forestShop,
  mapContentsOffSetPosition
);


const forestCollisionTiles = new CreateTiles(
  collisionMapData,
  new Vector(3*24 ,  3*14 ),
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