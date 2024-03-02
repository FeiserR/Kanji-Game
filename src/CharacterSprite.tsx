import Sprite from './Sprite';
import  VectorsXY from './VectorsXY';

class CharacterSprite extends Sprite {
    spriteFrame: number;
    spriteSize: VectorsXY;
    totalFrames: number;

    constructor(
      c:CanvasRenderingContext2D,
      image:HTMLImageElement,
      position: VectorsXY,
      spriteSize: VectorsXY,
      spriteFrame: number
      ) {
        super(c, image, position);
        this.spriteSize = spriteSize;
        this.spriteFrame = spriteFrame;
        this.totalFrames = Math.floor(image.width / spriteSize.x);
    }

    createAnimation (animationDelay: number = 140) {
      for (let i = 0; i < this.totalFrames; i++ ) {
        setTimeout(() => {
          this.spriteFrame = i;
        }, animationDelay * i);
      }
    }

    drawCharacter () {
      let topLeftXY = new VectorsXY(
        this.spriteSize.x * this.spriteFrame,
        0
      );
      this.c.drawImage(this.image, topLeftXY.x, topLeftXY.y, this.spriteSize.x, this.spriteSize.y, this.position.x, this.position.y, this.spriteSize.x, this.spriteSize.y);
      if (this.spriteFrame === this.totalFrames - 1) {
        this.spriteFrame = 0;
        this.createAnimation();
      }
    }

  }

  export default CharacterSprite;
