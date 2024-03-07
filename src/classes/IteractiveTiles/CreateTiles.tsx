import TileMap from "./TileMap";
import InteractiveTile from "./InteractiveTile";
import VectorsXY from "../Directions/VectorsXY";

class CreateTiles {
  TilesMapData: number[];
  sizeOfEachTile: VectorsXY;
  tileNumber: number;
  MapWidth: number;
  offsetPosition: VectorsXY;
  tilesPositions: InteractiveTile[] = [];

  constructor(
    TilesMapData: number[],
    sizeOfEachTile: VectorsXY,
    tileNumber: number,
    MapWidth: number,
    offsetPosition: VectorsXY 
  ) {
    this.TilesMapData = TilesMapData;
    this.sizeOfEachTile = sizeOfEachTile;
    this.tileNumber = tileNumber;
    this.MapWidth = MapWidth;
    this.offsetPosition = offsetPosition;
  }

  drawTiles(c: CanvasRenderingContext2D) {
    this.tilesPositions = [];
    const CreateTilesMap = new TileMap( this.MapWidth, this.TilesMapData)
    CreateTilesMap.parseMap().forEach((row, rowIndex) => {
      row.forEach((tile, colIndex) => {
        if (tile === this.tileNumber) {
          let newTile = new InteractiveTile(
            new VectorsXY(
              colIndex * this.sizeOfEachTile.x + this.offsetPosition.x,
              rowIndex * this.sizeOfEachTile.y + this.offsetPosition.y,
            ),
            this.sizeOfEachTile,
            c
          );
          this.tilesPositions.push(newTile);
          newTile.draw();
          // console.log("newTile", newTile);
        }
      });
    });
  }
}

export default CreateTiles;