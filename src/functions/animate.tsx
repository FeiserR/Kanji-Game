import  { keys, lastKey } from "./SetUpMovement";   
import Map from "../classes/ImageCreation/Map";

function animate( 
    c: CanvasRenderingContext2D,
    collidingLeft: boolean,
    collidingRight: boolean,
    map: Map
  ) {

    if (map.collisionMap.tilesPositions.length > 0 && map.collisionMap.tilesPositions.length > 0) {
      if (map.mainCharacter.position.x <= map.collisionMap.tilesPositions[0].position.x) {
        collidingLeft= true;
      } else { 
          collidingLeft= false;
        }
      if (map.mainCharacter.position.x + map.mainCharacter.currentAnimation.spriteSize.x >= map.collisionMap.tilesPositions[1].position.x) {
        collidingRight= true;
      } else { 
          collidingRight= false;
        }
    }

    if (keys.arrowLeft && lastKey === "ArrowLeft" && !collidingLeft) {
        map.background.position.x += 5;
      for (let i = 0; i < map.effects.length; i++) {
        map.effects[i].position.x += 5;
      }
      map.mainCharacter.switchAnimation(map.mainCharacter.AnimationsArray[1]);
    }
    if (keys.arrowRight && lastKey === "ArrowRight" && !collidingRight) {
      map.background.position.x -= 5;
      for (let i = 0; i < map.effects.length; i++) {
        map.effects[i].position.x -= 5;
      }
      map.mainCharacter.switchAnimation(map.mainCharacter.AnimationsArray[2]);
    }

    map.background.draw(c);
      for (let i = 0; i < map.effects.length; i++) {
        map.effects[i].drawCharacter(c);
      }
      map.collisionMap.drawTiles(c);
      map.mainCharacter.drawCharacter(c);

    requestAnimationFrame(() => {
      animate(c, collidingLeft, collidingRight, map);
    });
  }


  export default animate;