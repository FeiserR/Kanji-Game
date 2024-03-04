class TileMap {
    colisionMapLenght: number;
    colisionMapWidth: number;
    mapData: number[];
    constructor(
        colisionMapLenght: number,
        colisionMapWidth: number,
        mapData: number[]
    ) {
        this.colisionMapLenght = colisionMapLenght;
        this.colisionMapWidth = colisionMapWidth;
        this.mapData = mapData;
    }

    parseMap() {
        let map = [];
        for (let i = 0; i < this.colisionMapLenght; i += this.colisionMapWidth ) {
            map.push(this.mapData.slice(i, i + this.colisionMapWidth));
        }
        return map;
    }
}