import Sprite from './Sprite';


class CharacterSprite extends Sprite {
    imagePlacementX: number;
    imagePlacementY: number;
    cropWidth: number;
    cropHeight: number;

    constructor(
      c:CanvasRenderingContext2D,
      image:HTMLImageElement,
      imagePlacementX: number,
      imagePlacementY: number,
      positionX:number,
      positionY:number,
      cropWidth: number,
      cropHeight: number
      
      ) {
        super(c, image, positionX, positionY);
        this.imagePlacementX = imagePlacementX
        this.imagePlacementY = imagePlacementY
        this.cropWidth = cropWidth
        this.cropHeight = cropHeight
    }

    drawCharacter () {
      this.c.drawImage(this.image, this.imagePlacementX, this.imagePlacementY, this.cropWidth, this.cropHeight, this.positionX, this.positionY, this.cropWidth, this.cropHeight);
    }

  }

  export default CharacterSprite;