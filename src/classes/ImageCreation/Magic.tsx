import  AnimatableSprite  from './AnimatableSprite';
import VectorsXY from '../Directions/VectorsXY';
import CharacterAnimation from '../Animation/CharacterAnimation';


class Magic extends AnimatableSprite {
    active: boolean = true;

  constructor(
    position: VectorsXY,
    animation: CharacterAnimation,
    AnimationsArray: CharacterAnimation[] = []
    ) {
    super( position, animation, AnimationsArray);

  }
    
}

class ProjectileMagic extends Magic {
    target: VectorsXY;
    speed: number;
    velocity: VectorsXY;
   public targetHit: boolean = false;

  constructor(
    spawnPosition: VectorsXY,
    target: VectorsXY,
    speed: number,
    spellAnimation: CharacterAnimation
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