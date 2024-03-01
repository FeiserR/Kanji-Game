


class Sprite {
    c: CanvasRenderingContext2D;
    image: HTMLImageElement;
    positionX: number;
    positionY: number;

    constructor(
      c: CanvasRenderingContext2D,
      image: HTMLImageElement,
      positionX: number,
      positionY: number, 
      ) {
      this.c = c;
      this.positionX = positionX;
      this.positionY = positionY;
      this.image = image;
  }
    
  draw () {
    this.c.drawImage(this.image, this.positionX, this.positionY);
  }

  }
  
  export default Sprite;