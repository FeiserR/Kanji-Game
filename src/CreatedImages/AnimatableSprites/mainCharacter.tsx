import  AnimatableSprite  from "../../classes/ImageCreation/AnimatableSprite";
import { idleAnimation, walkAnimationLeft, walkAnimationRight } from "../../animations/CharacterAnimations/MainCharacterAnimations";
import VectorsXY from "../../classes/Directions/VectorsXY";

const arrayOfMainCharacterAnimations = [idleAnimation, walkAnimationLeft, walkAnimationRight];

const mainCharacter = new AnimatableSprite(
    new VectorsXY(400, 150),
    idleAnimation,
    arrayOfMainCharacterAnimations
  );

  export {mainCharacter};

