import  Vector from '../Directions/VectorsXY';


class Sprite {
    image: HTMLImageElement;
    position: Vector;
    constructor(
      image: HTMLImageElement,
      position: Vector,
      ) {
      this.position= position;
      this.image = image;
  }
    
  draw (c: CanvasRenderingContext2D) {
   c.drawImage(this.image, this.position.x, this.position.y);
  }

  }
  
  export default Sprite;