import VectorsXY from "../Directions/VectorsXY";
import AnimationFrame from "./AnimationFrame";

class CharacterAnimation {
  image: HTMLImageElement;
  spriteFrame = 0;
  spriteSize: VectorsXY;
  totalFrames: number;
  FrameStartTime = Date.now();
  frameDelay: number;
  name: string;

  constructor(
    image: HTMLImageElement,
    spriteWidth: number,
    frameDelay: number,
    name: string
  ) {
    this.image = image;
    this.spriteSize = new VectorsXY(spriteWidth, image.height);
    this.totalFrames = Math.floor(image.width / this.spriteSize.x);
    this.frameDelay = frameDelay;
    this.name = name;
  }

  startAnimation() {
    this.FrameStartTime = Date.now();
    this.spriteFrame = 0;
  }


  getCurrentFrame() {
    let currentTime = Date.now();
    let frameTime = currentTime - this.FrameStartTime;
    if (frameTime > this.frameDelay) {
      this.spriteFrame = (this.spriteFrame + 1) % this.totalFrames;
      this.FrameStartTime = currentTime;
    }
    let topLeftXY = new VectorsXY(this.spriteSize.x * this.spriteFrame, 0);
    return new AnimationFrame(this.image, topLeftXY, this.spriteSize);
  }
}

export default CharacterAnimation;
