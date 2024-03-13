import CharacterAnimation from "../Animation/CharacterAnimation";
import VectorsXY from "../Directions/VectorsXY";
import AnimatableSprite from "./AnimatableSprite";

class Being extends AnimatableSprite {
  constructor(
    position: VectorsXY,
    animation: CharacterAnimation,
    AnimationsArray: CharacterAnimation[] = [],
    health: number = 100,
  ) {
    super(position, animation, AnimationsArray);
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
    health: number = 100,
  ) {
    super(position, animation, AnimationsArray, health);
  }
}

export { MainCharacter, Enemy };