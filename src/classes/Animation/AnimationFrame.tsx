//exports an animation Frame which is gonna be used on Animation

import  Vector  from "../Directions/VectorsXY";

class AnimationFrame {
  image: HTMLImageElement;
  topLeft: Vector;
  size: Vector;

  constructor(image: HTMLImageElement, topLeft: Vector, size: Vector) {
    this.image = image;
    this.topLeft = topLeft;
    this.size = size;
  }
}

export default AnimationFrame;