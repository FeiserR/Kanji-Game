import  VectorsXY  from "./VectorsXY";


class AnimationFrame {
  image: HTMLImageElement;
  topLeft: VectorsXY;
  size: VectorsXY;

  constructor(image: HTMLImageElement, topLeft: VectorsXY, size: VectorsXY) {
    this.image = image;
    this.topLeft = topLeft;
    this.size = size;
  }
}

export default AnimationFrame;