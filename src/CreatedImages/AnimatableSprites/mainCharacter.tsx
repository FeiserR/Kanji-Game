import  AnimatableSprite  from "../../classes/ImageCreation/AnimatableSprite";
import { idleAnimation, walkAnimationLeft, walkAnimationRight } from "../../animations/CharacterAnimations/MainCharacterAnimations";

const arrayOfMainCharacterAnimations = [idleAnimation, walkAnimationLeft, walkAnimationRight];

const mainCharacter = new AnimatableSprite(
    ctx,
    { x: 400, y: 150},
    idleAnimation,
    arrayOfMainCharacterAnimations
  );