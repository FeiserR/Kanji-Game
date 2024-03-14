import CharacterAnimation from "../Animation/CharacterAnimation";
import VectorsXY from "../Directions/VectorsXY";
import AnimatableSprite from "./AnimatableSprite";

class Being extends AnimatableSprite {
    health: number;
    dead: boolean = false;
  constructor(
    position: VectorsXY,
    animation: CharacterAnimation,
    AnimationsArray: CharacterAnimation[] = [],
    health: number = 100,
  ) {
    super(position, animation, AnimationsArray);
    this.health = health;
  }
}

class MainCharacter extends Being {
    constructor(
        position: VectorsXY,
        animation: CharacterAnimation,
        AnimationsArray: CharacterAnimation[] = [],
        health: number = 100
    ) {
        super(position, animation, AnimationsArray, health);
    }
    }

class Enemy extends Being {
  constructor(
    position: VectorsXY,
    animation: CharacterAnimation,
    AnimationsArray: CharacterAnimation[] = [],
    health: number = 10,
  ) {
    super(position, animation, AnimationsArray, health);
  }
}

export { MainCharacter, Enemy };