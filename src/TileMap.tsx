class TileMap {
    colisionMapWidth: number;
    mapData: number[];
    constructor(
        colisionMapWidth: number,
        mapData: number[]
    ) {
        this.colisionMapWidth = colisionMapWidth;
        this.mapData = mapData;
    }

    parseMap() {
        let map = [];
        for (let i = 0; i < this.mapData.length; i += this.colisionMapWidth ) {
            map.push(this.mapData.slice(i, i + this.colisionMapWidth));
        }
        return map;
    }
}

export default TileMap;