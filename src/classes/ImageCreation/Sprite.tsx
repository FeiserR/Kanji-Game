import  VectorsXY from '../Directions/VectorsXY';


class Sprite {
    image: HTMLImageElement;
    position: VectorsXY;
    constructor(
      image: HTMLImageElement,
      position: VectorsXY,
      ) {
      this.position= position;
      this.image = image;
  }
    
  draw (c: CanvasRenderingContext2D) {
   c.drawImage(this.image, this.position.x, this.position.y);
  }

  }
  
  export default Sprite;