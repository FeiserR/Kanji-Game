import Sprite from "../../classes/ImageCreation/Sprite.tsx";
import AnimatableSprite from "../../classes/ImageCreation/AnimatableSprite.tsx";
import CreateTiles from "../../classes/IteractiveTiles/CreateTiles.tsx";
import { Magic, ProjectileMagic } from "./Magic.tsx";
import { KeyMap } from "../../Maps/Keys.tsx";
import {
  fireMagic,
  fireMagic2,
} from "../../animations/EffectsAnimations/Magic.tsx";
import Vector from "../Directions/VectorsXY.tsx";
import { Enemy } from "./Being.tsx";

class BaseMap {
  movement: boolean;
  background: Sprite;
  mainCharacter: AnimatableSprite;
  effects: (AnimatableSprite | Magic)[] = [];
  enemies: Enemy[] = [];
  collisionMap: CreateTiles;

  constructor(
    movement: boolean,
    background: Sprite,
    mainCharacter: AnimatableSprite,
    effects: (AnimatableSprite | Magic)[],
    enemies: Enemy[],
    collisionMap: CreateTiles
  ) {
    this.movement = movement;
    this.background = background;
    this.mainCharacter = mainCharacter;
    this.effects = effects;
    this.enemies = enemies;
    this.collisionMap = collisionMap;
  }

  drawMap(c: CanvasRenderingContext2D, keyMap: KeyMap) {
    keyMap = keyMap;
    this.background.draw(c);

    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].drawCharacter(c);
    }

    for (let i = 0; i < this.effects.length; i++) {
      this.effects[i].drawCharacter(c);
    }

    this.collisionMap.drawTiles(c);
    this.mainCharacter.drawCharacter(c);

    const activeMagicEffects = this.effects
      .filter((effect) => effect instanceof Magic)
      .filter((effect) => (effect as Magic).active === true);
    const nonMagicEffects = this.effects.filter(
      (effect) => !(effect instanceof Magic)
    );
    this.effects = [...activeMagicEffects, ...nonMagicEffects];
  }
}

class MovementMap extends BaseMap {
  constructor(
    movement: boolean,
    background: Sprite,
    mainCharacter: AnimatableSprite,
    effects: (AnimatableSprite | Magic)[],
    enemies: Enemy[],
    collisionMap: CreateTiles
  ) {
    super(movement, background, mainCharacter, effects, enemies, collisionMap);
  }

  drawMap(c: CanvasRenderingContext2D, keyMap: KeyMap) {
    let collidingLeft: boolean = false;
    let collidingRight: boolean = false;
    let movementDirection =
      Number(
        "ArrowRight" in keyMap.keyDictionary &&
          keyMap.keyDictionary.ArrowRight.pressed
      ) -
      Number(
        "ArrowLeft" in keyMap.keyDictionary &&
          keyMap.keyDictionary.ArrowLeft.pressed
      );

    if (
      this.collisionMap.tilesPositions.length > 0 &&
      this.collisionMap.tilesPositions.length > 0
    ) {
      if (0 <= this.collisionMap.tilesPositions[0].position.x) {
        collidingLeft = true;
      } else {
        collidingLeft = false;
      }
      if (1868 >= this.collisionMap.tilesPositions[1].position.x) {
        collidingRight = true;
      } else {
        collidingRight = false;
      }
    }

    if (movementDirection < 0 && !collidingLeft) {
      this.background.position.x += 5;
      for (let i = 0; i < this.effects.length; i++) {
        this.effects[i].position.x += 5;
      }
      this.mainCharacter.switchAnimation(this.mainCharacter.AnimationsArray[1]); // walkAnimationLeft
    }
    if (movementDirection > 0 && !collidingRight) {
      this.background.position.x -= 5;
      for (let i = 0; i < this.effects.length; i++) {
        this.effects[i].position.x -= 5;
      }
      this.mainCharacter.switchAnimation(this.mainCharacter.AnimationsArray[2]); // walkAnimationRight
    }

    if (movementDirection === 0) {
      this.mainCharacter.switchAnimation(this.mainCharacter.AnimationsArray[0]); // idleAnimation
    }
    super.drawMap(c, keyMap);
  }
}

class BattleMap extends BaseMap {
  projectiles: ProjectileMagic[] = [];
  spellLibrary: {
    [key: string]: (position: Vector, target: Vector) => ProjectileMagic;
  } = {};

  constructor(
    movement: boolean,
    background: Sprite,
    mainCharacter: AnimatableSprite,
    effects: (AnimatableSprite | Magic)[],
    projectiles: ProjectileMagic[],
    enemies: Enemy[],
    collisionMap: CreateTiles
  ) {
    super(movement, background, mainCharacter, effects, enemies, collisionMap);
    this.projectiles = projectiles;
    // this.spellLibrary["1"] = (position: VectorsXY, target: VectorsXY) => {
    //   return new ProjectileMagic(position, target, 5, fireMagic);
    // };
    this.spellLibrary["Enter"] = (position: Vector, target: Vector) => {
      return new ProjectileMagic(position, target, 5, fireMagic2);
    };
  }
  drawMap(c: CanvasRenderingContext2D, keyMap: KeyMap) {
    const spawnPostion = new Vector(
      this.mainCharacter.position.x + 100,
      this.mainCharacter.position.y
    );

    Object.keys(this.spellLibrary).forEach((spellKey) => {
      if (
        spellKey in keyMap.keyDictionary &&
        keyMap.keyDictionary[spellKey].justPressed
      ) {
        const magic = this.spellLibrary[spellKey](
          spawnPostion,
          this.enemies[0].position
        );
        this.effects.push(magic);
        this.projectiles.push(magic);
      }
    });

    //filter effects to only ProjectileMagic
    this.projectiles
      .forEach((spell) => {
        if (spell.targetHit) {
          this.projectiles = this.projectiles.filter(
            (projectile) => projectile !== spell
          );
          // console.log("Inside if",spell.targetHit);
          const enemy = this.enemies[0];
          if (enemy.health > 0) {
            enemy.health -= 10;
          }
          console.log(enemy.health);
          if ( !enemy.dead && enemy.health <= 0) {
            enemy.dead = true;
            console.log("Enemy Dead");
            enemy.switchAnimation(enemy.AnimationsArray[4]
              );
          }
        }
      });

    super.drawMap(c, keyMap);
  }
}

export { BaseMap, MovementMap, BattleMap };
