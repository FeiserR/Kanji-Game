import  VectorsXY from './VectorsXY';


class Sprite {
    c: CanvasRenderingContext2D;
    image: HTMLImageElement;
    position: VectorsXY;

    constructor(
      c: CanvasRenderingContext2D,
      image: HTMLImageElement,
      position: VectorsXY
      ) {
      this.c = c;
      this.position= position;
      this.image = image;
  }
    
  draw () {
    this.c.drawImage(this.image, this.position.x, this.position.y);
  }

  }
  
  export default Sprite;