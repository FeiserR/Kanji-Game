import VectorsXY from "../Directions/VectorsXY";
import CharacterAnimation from "../Animation/CharacterAnimation";

class AnimatableSprite {
  currentAnimation: CharacterAnimation;
  position: VectorsXY;
  AnimationsArray: CharacterAnimation[] = [];
  constructor(
    position: VectorsXY,
    animation: CharacterAnimation,
    AnimationsArray: CharacterAnimation[] = []
  ) {
    this.currentAnimation = animation;
    this.currentAnimation.startAnimation();
    this.position = position;
    this.AnimationsArray = AnimationsArray;
  }

  switchAnimation(animation: CharacterAnimation) {
    if (animation.name === this.currentAnimation.name) { return }
    this.currentAnimation = animation;
    this.currentAnimation.startAnimation();

  }


  drawCharacter(c: CanvasRenderingContext2D) {
    let currentFrame = this.currentAnimation.getCurrentFrame();
    c.drawImage(
      currentFrame.image,
      currentFrame.topLeft.x,
      currentFrame.topLeft.y,
      currentFrame.size.x,
      currentFrame.size.y,
      this.position.x,
      this.position.y,
      currentFrame.size.x,
      currentFrame.size.y
    );
    // console.log();
  }
}
export default AnimatableSprite;
