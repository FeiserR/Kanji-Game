import TileMap from "./TileMap";
import InteractiveTile from "./InteractiveTile";
import VectorsXY from "../Directions/VectorsXY";

class CreatedTiles {
  c: CanvasRenderingContext2D;
  TilesMapData: number[];
  sizeOfEachTile: VectorsXY;
  tileNumber: number;
  MapWidth: number;
  offsetPosition: VectorsXY;
  tilesPositionsLeft: number[] = [];
  tilesPositionsRight: number[] = [];

  constructor(
    TilesMapData: number[],
    sizeOfEachTile: VectorsXY,
    c: CanvasRenderingContext2D,
    tileNumber: number,
    MapWidth: number,
    offsetPosition: VectorsXY 
  ) {
    this.c = c;
    this.TilesMapData = TilesMapData;
    this.sizeOfEachTile = sizeOfEachTile;
    this.tileNumber = tileNumber;
    this.MapWidth = MapWidth;
    this.offsetPosition = offsetPosition;
  }

  drawTiles() {
    const CreatedTilesMap = new TileMap( this.MapWidth, this.TilesMapData)
    CreatedTilesMap.parseMap().forEach((row, rowIndex) => {
      row.forEach((tile, colIndex) => {
        if (tile === this.tileNumber) {
          this.tilesPositionsLeft.push(
               colIndex * this.sizeOfEachTile.x + this.offsetPosition.x
          );
          this.tilesPositionsRight.push(
               colIndex * this.sizeOfEachTile.x + this.offsetPosition.x + this.sizeOfEachTile.x
          );
          new InteractiveTile(
            {
              x: colIndex * this.sizeOfEachTile.x + this.offsetPosition.x,
              y: rowIndex * this.sizeOfEachTile.y + this.offsetPosition.y,
            },
            this.sizeOfEachTile,
            this.c
          ).draw();
        }
      });
    });
  }
}

export default CreatedTiles;