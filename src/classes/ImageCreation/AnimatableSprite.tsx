//This class takes care of switching between the animations, drawing in the canvas and making sure the animations stops when it should

import Vector from "../Directions/VectorsXY";
import Animation from "../Animation/Animation";

class AnimatableSprite {
  currentAnimation: Animation;
  position: Vector;
  AnimationsArray: Animation[] = [];
  constructor(
    position: Vector,
    animation: Animation,
    AnimationsArray: Animation[] = []
  ) {
    this.currentAnimation = new Animation(
      animation.image, animation.spriteSize.x, animation.frameDelay, animation.name, animation.shouldLoop
      );
    this.currentAnimation.startAnimation();
    this.position = position;
    this.AnimationsArray = AnimationsArray.map((animation) => {
      return new Animation(
        animation.image, animation.spriteSize.x, animation.frameDelay, animation.name,  animation.shouldLoop
        );
    }
    );
  

  }

  switchAnimation(animation: Animation) {
    if (animation.name === this.currentAnimation.name) { return }
    // console.log("swiching animation");
    this.currentAnimation = animation;
    this.currentAnimation.startAnimation();
  }

  animationEnded() {
    return this.currentAnimation.spriteFrame === this.currentAnimation.totalFrames - 1;
  }



  drawCharacter(c: CanvasRenderingContext2D) {
    let currentFrame = this.currentAnimation.getCurrentFrame()
      if (this.currentAnimation.spriteFrame === this.currentAnimation.totalFrames - 1) {
        currentFrame = this.currentAnimation.getLastFrame();
      }

    
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
