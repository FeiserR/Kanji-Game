class VectorsXY {
    x: number;
    y: number;
    constructor(x:number, y:number) {
      this.x = x;
      this.y = y;
    }

    getLength() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    getDirection() {
      return new VectorsXY(this.x / this.getLength(), this.y / this.getLength());
    }
    add(vector: VectorsXY) {
      return new VectorsXY(this.x + vector.x, this.y + vector.y);
    }
    subtract(vector: VectorsXY) {
      return new VectorsXY(this.x - vector.x, this.y - vector.y);
    }
    multiply(scalar: number) {
      return new VectorsXY(this.x * scalar, this.y * scalar);
    }
  }


  export default VectorsXY;