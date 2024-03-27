//creates a two dimensional vector with coordinates x and y

class Vector {
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
      return new Vector(this.x / this.getLength(), this.y / this.getLength());
    }
    add(vector: Vector) {
      return new Vector(this.x + vector.x, this.y + vector.y);
    }
    subtract(vector: Vector) {
      return new Vector(this.x - vector.x, this.y - vector.y);
    }
    multiply(scalar: number) {
      return new Vector(this.x * scalar, this.y * scalar);
    }
  }


  export default Vector;