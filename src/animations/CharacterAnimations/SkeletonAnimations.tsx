import CharacterAnimation from "../../classes/Animation/CharacterAnimation";
import skeletonWalkRight from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton walkRight.png";
import skeletonWalkLeft from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeletok walkLeft.png";
import skeletonIdle from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton idle.png";
import skeletonAttackRight from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton attackRight.png";
import skeletonAttackLeft from "./assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton attackLeft2.png";
import setImage from "../../functions/setImage";


const idleAnimation = new CharacterAnimation(
    setImage(skeletonIdle),
    96,
    100,
    "Idle"
  );
  const walkAnimationRight = new CharacterAnimation(
    setImage(skeletonWalkRight),
    88,
    100,
    "walk"
  );
  const walkAnimationLeft = new CharacterAnimation(
    setImage(skeletonWalkLeft),
    88,
    100,
    "walk"
  );
  const attackRight = new CharacterAnimation(
    setImage(skeletonAttackRight),
    172,
    100,
    "attack"
  );
  const attackLeft = new CharacterAnimation(
    setImage(skeletonAttackLeft),
    172,
    100,
    "attack"
  );