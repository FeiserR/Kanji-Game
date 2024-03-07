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

class FireBall extends Magic {
    target: VectorsXY;
    speed: number;
    velocity: VectorsXY;

  constructor(
    spawnPosition: VectorsXY,
    target: VectorsXY,
    speed: number,
    fireMagic: CharacterAnimation
  ) {
    super(spawnPosition, fireMagic, [fireMagic]);
    this.target = target;
    this.speed = speed;
    this.velocity = target.subtract(spawnPosition).getDirection().multiply(speed);
  }

  drawCharacter(c: CanvasRenderingContext2D) {
    if (this.active === false) return;
    super.drawCharacter(c);
    if (this.target.subtract(this.position).getLength() < this.speed) {
        this.position = this.target;
        this.active = false;
    } else {
    this.position = this.position.add(this.velocity);
    }

    };
    
}

export {Magic , FireBall};