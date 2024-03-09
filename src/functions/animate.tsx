import {  BaseMap } from "../classes/ImageCreation/Map";
import { maps } from "../Maps/Maps";
import {KeyMap, FrameKeyMap}  from "../Maps/Keys";

const keyMap = new KeyMap();
const frameKeyMap = new FrameKeyMap();
let  currentMap: BaseMap = maps.dungeon

function switchMap (map: BaseMap) : BaseMap {
  let newMap = map;
  if (map == maps.dungeon) {
   newMap = maps.fightingDungeon;
  } else {
    if (map == maps.fightingDungeon) {
      newMap = maps.dungeon;
    }
  }
  return newMap;
}
//the animate function is the main loop of the game and it recalls itself at the end of the function with the requestAnimationFrame function
function animate(
  c: CanvasRenderingContext2D,
) {

  frameKeyMap.processKeyMap(keyMap);

  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  c.beginPath();

  if ("0" in frameKeyMap.keyDictionary && frameKeyMap.keyDictionary["0"].justPressed) {
    currentMap = switchMap(currentMap);
  }


  // console.log("FramekeyMap", frameKeyMap.keyDictionary);


  currentMap.drawMap(c, frameKeyMap);
  
  
  c.closePath();
  requestAnimationFrame(() => {
    animate(c);
  });
};


export default animate;
