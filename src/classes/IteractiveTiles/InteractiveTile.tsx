import VectorsXY from "../Directions/VectorsXY";

class InterativeTile {
    c: CanvasRenderingContext2D;
    position: VectorsXY;
    size: VectorsXY;

    constructor(
        position: VectorsXY, 
        size: VectorsXY , 
        c: CanvasRenderingContext2D
        ) {
        this.c = c;
        this.position = position;
        this.size = size;
    }


    draw() {
        this.c.fillStyle = "green";
        this.c.fillRect( this.position.x, this.position.y, this.size.x, this.size.y);
    }
}


export default InterativeTile;
