import  VectorsXY from './VectorsXY';


class Sprite {
    c: CanvasRenderingContext2D;
    image: HTMLImageElement;
    position: VectorsXY;
    sprites: Array<HTMLImageElement>;

    constructor(
      c: CanvasRenderingContext2D,
      image: HTMLImageElement,
      position: VectorsXY,
      sprites: Array<HTMLImageElement>
      ) {
      this.c = c;
      this.position= position;
      this.image = image;
      this.sprites = sprites;
  }
    
  draw () {
    this.c.drawImage(this.image, this.position.x, this.position.y);
  }

  }
  
  export default Sprite;