import {  BaseMap } from "../classes/ImageCreation/Map";
import { maps } from "../Maps/Maps";
import {KeyMap, }  from "../Maps/Keys";
import VectorsXY from "../classes/Directions/VectorsXY";

const keyMap = new KeyMap();
const frameKeyMap = new KeyMap(false);
let  currentMap: BaseMap = maps.dungeon
const mapContentsOffSetPosition = new VectorsXY ( -60, 0 );

//the animate function is the main loop of the game and it recalls itself at the end of the function with the requestAnimationFrame function
function animate(
  c: CanvasRenderingContext2D,
) {

  frameKeyMap.processKeyMap(keyMap);

  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  c.beginPath();

  if ("0" in frameKeyMap.keyDictionary && frameKeyMap.keyDictionary["0"].justPressed) {
    currentMap = maps.fightingDungeon;  
    currentMap.background.position.x = mapContentsOffSetPosition.x;
    currentMap.background.position.y = mapContentsOffSetPosition.y -30;
  }
  if ("9" in frameKeyMap.keyDictionary && frameKeyMap.keyDictionary["9"].justPressed) {
    currentMap = maps.dungeon;
    currentMap.background.position.x = mapContentsOffSetPosition.x;
    currentMap.background.position.y = mapContentsOffSetPosition.y;
  }
  if ("8" in frameKeyMap.keyDictionary && frameKeyMap.keyDictionary["8"].justPressed 
  // && currentMap.collisionMap.tilesPositions[1].position.x >= 1860 
  ) {
    currentMap = maps.forestShopMap;
    currentMap.background.position.x = 0;
    currentMap.background.position.y = -100;
  }
  // console.log("FramekeyMap", frameKeyMap.keyDictionary);


  currentMap.drawMap(c, frameKeyMap);
  
  
  c.closePath();
  requestAnimationFrame(() => {
    animate(c);
  });
};


export default animate;
