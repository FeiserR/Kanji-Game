import CharacterAnimation from "../../classes/Animation/CharacterAnimation";
import skeletonWalkRight from "../../assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton walkRight.png";
import skeletonWalkLeft from "../../assets/characters/Skeleton Sprite Sheets/Skeleton/Skeletok walkLeft.png";
import skeletonIdleRight from "../../assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton idle.png";
import skeletonAttackRight from "../../assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton attackRight.png";
import skeletonAttackLeft from "../../assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton attackLeft2.png";
import setImage from "../../functions/setImage";
import skeletonHit from "../../assets/characters/Skeleton Sprite Sheets/Skeleton/SkeletonHit.png";
import skeletonDeath from "../../assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton DeathLeft.png";
import SkeletonIdleAnimationLeft from "../../assets/characters/Skeleton Sprite Sheets/Skeleton/Skeleton idleLeft.png";


const SkeletonIdleRightAnimation = new CharacterAnimation(
    setImage(skeletonIdleRight),
    96,
    100,
    "Idle"
  );
const SkeletonIdleLeftAnimation = new CharacterAnimation(
    setImage(SkeletonIdleAnimationLeft),
    96,
    100,
    "Idle"
  );
const SkeletonWalkAnimationRight = new CharacterAnimation(
  setImage(skeletonWalkRight),
  88,
  100,
  "walk"
);
const SkeletonWalkAnimationLeft = new CharacterAnimation(
  setImage(skeletonWalkLeft),
  88,
  100,
  "walk"
);
const SkeletonAttackRight = new CharacterAnimation(
  setImage(skeletonAttackRight),
  172,
  100,
  "attack"
);
const SkeletonAttackLeft = new CharacterAnimation(
  setImage(skeletonAttackLeft),
  172,
  100,
  "attack"
);

const SkeletonHit = new CharacterAnimation(
  setImage(skeletonHit),
  120,
  100,
  "hit"
);

const SkeletonDeathAnimation = new CharacterAnimation(
  setImage(skeletonDeath),
  132,
  50,
  "death",
  1
);

export { SkeletonIdleRightAnimation, SkeletonWalkAnimationRight, SkeletonWalkAnimationLeft, SkeletonAttackRight, SkeletonAttackLeft, SkeletonIdleLeftAnimation,SkeletonHit, SkeletonDeathAnimation}