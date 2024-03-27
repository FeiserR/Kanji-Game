//separates the animatable sprites into what they are being used to represent

import Animation from "../Animation/Animation";
import Vector from "../Directions/VectorsXY";
import AnimatableSprite from "./AnimatableSprite";

class Being extends AnimatableSprite {
    health: number;
    dead: boolean = false;
  constructor(
    position: Vector,
    animation: Animation,
    AnimationsArray: Animation[] = [],
    health: number = 100,
  ) {
    super(position, animation, AnimationsArray);
    this.health = health;
  }
}

class MainCharacter extends Being {
    constructor(
        position: Vector,
        animation: Animation,
        AnimationsArray: Animation[] = [],
        health: number = 100
    ) {
        super(position, animation, AnimationsArray, health);
    }
    }

class Enemy extends Being {
  constructor(
    position: Vector,
    animation: Animation,
    AnimationsArray: Animation[] = [],
    health: number = 10,
  ) {
    super(position, animation, AnimationsArray, health);
  }
}

export { MainCharacter, Enemy };