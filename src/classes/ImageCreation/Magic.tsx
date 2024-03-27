//separates the animatable sprites into what they are being used to represent

import  AnimatableSprite  from './AnimatableSprite';
import Vector from '../Directions/VectorsXY';
import Animation from '../Animation/Animation';


class Magic extends AnimatableSprite {
    active: boolean = true;

  constructor(
    position: Vector,
    animation: Animation,
    AnimationsArray: Animation[] = []
    ) {
    super( position, animation, AnimationsArray);

  }
    
}

class ProjectileMagic extends Magic {
    target: Vector;
    speed: number;
    velocity: Vector;
   public targetHit: boolean = false;

  constructor(
    spawnPosition: Vector,
    target: Vector,
    speed: number,
    spellAnimation: Animation
  ) {
    super(spawnPosition, spellAnimation, [spellAnimation]);
    this.target = target;
    this.speed = speed;
    this.velocity = target.subtract(spawnPosition).getDirection().multiply(speed);
    this.targetHit = false;
  }

  drawCharacter(c: CanvasRenderingContext2D) {
    if (this.active === false) return;
    super.drawCharacter(c);
    const targetReached = this.target.subtract(this.position).getLength() < this.speed
    // console.log("Outside",this.targetHit);
    if (targetReached) {
        this.position = this.target;
        this.active = false;
        this.targetHit = true;
        // console.log("inside",this.targetHit);
    } else {
    this.position = this.position.add(this.velocity);
    }

    };
    
}

export {Magic , ProjectileMagic};