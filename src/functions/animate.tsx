import  AnimatableSprite  from "../classes/ImageCreation/AnimatableSprite";
import  CreateTiles from "../classes/IteractiveTiles/CreateTiles";
import  Sprite  from "../classes/ImageCreation/Sprite";
import  { keys, lastKey } from "./SetUpMovement";   

function animate( 
    c: CanvasRenderingContext2D,
    collidingLeft: boolean,
    collidingRight: boolean,
    backGround: Sprite,
    mainCharacter: AnimatableSprite,
    effects:  AnimatableSprite[],
    collisionTiles: CreateTiles
  ) {

    if (collisionTiles.tilesPositions.length > 0 && collisionTiles.tilesPositions.length > 0) {
      if (mainCharacter.position.x <= collisionTiles.tilesPositions[0].position.x) {
        collidingLeft= true;
      } else { 
          collidingLeft= false;
        }
      if (mainCharacter.position.x + mainCharacter.currentAnimation.spriteSize.x >= collisionTiles.tilesPositions[1].position.x) {
        collidingRight= true;
      } else { 
          collidingRight= false;
        }
    }
    
    if (keys.arrowLeft && lastKey === "ArrowLeft" && !collidingLeft) {
      backGround.position.x += 5;
      for (let i = 0; i < effects.length; i++) {
        effects[i].position.x += 5;
      }
      mainCharacter.switchAnimation(mainCharacter.AnimationsArray[1]);
    }
    if (keys.arrowRight && lastKey === "ArrowRight" && !collidingRight) {
      backGround.position.x -= 5;
      for (let i = 0; i < effects.length; i++) {
        effects[i].position.x -= 5;
      }
      mainCharacter.switchAnimation(mainCharacter.AnimationsArray[2]);
    }

      backGround.draw(c);
      for (let i = 0; i < effects.length; i++) {
        effects[i].drawCharacter(c);
      }
      collisionTiles.drawTiles(c);
      mainCharacter.drawCharacter(c);

    requestAnimationFrame(() => {
      animate(c, collidingLeft, collidingRight, backGround, mainCharacter, effects, collisionTiles);
    });
  }


  export default animate;