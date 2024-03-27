

import  AnimatableSprite  from "../../classes/ImageCreation/AnimatableSprite";
import { idleAnimation, walkAnimationLeft, walkAnimationRight } from "../../animations/CharacterAnimations/MainCharacterAnimations";
import Vector from "../../classes/Directions/VectorsXY";

const arrayOfMainCharacterAnimations = [idleAnimation, walkAnimationLeft, walkAnimationRight];

const mainCharacter = new AnimatableSprite(
    new Vector(400, 150),
    idleAnimation,
    arrayOfMainCharacterAnimations
  );

  export {mainCharacter};

