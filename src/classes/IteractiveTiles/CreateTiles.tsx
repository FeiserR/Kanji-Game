import TileMap from "./TileMap";
import InteractiveTile from "./InteractiveTile";
import VectorsXY from "../Directions/VectorsXY";
import AnimatableSprite from "../ImageCreation/AnimatableSprite";

class CreateTiles {
  c: CanvasRenderingContext2D;
  TilesMapData: number[];
  sizeOfEachTile: VectorsXY;
  tileNumber: number;
  MapWidth: number;
  offsetPosition: VectorsXY;
  tilesPositions: InteractiveTile[] = [];

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
    this.tilesPositions = [];
    const CreateTilesMap = new TileMap( this.MapWidth, this.TilesMapData)
    CreateTilesMap.parseMap().forEach((row, rowIndex) => {
      row.forEach((tile, colIndex) => {
        if (tile === this.tileNumber) {
          let newTile = new InteractiveTile(
            {
              x: colIndex * this.sizeOfEachTile.x + this.offsetPosition.x,
              y: rowIndex * this.sizeOfEachTile.y + this.offsetPosition.y,
            },
            this.sizeOfEachTile,
            this.c
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