//creates and exports animations

import MainCharacterIdleAnimation from "../../assets/characters/MainCharacter/MainCharacter Idle animation.png";
import MainCharacterRunningRight from "../../assets/characters/MainCharacter/MainCharacter running animation.png";
import MainCharacterRunningLeft from "../../assets/characters/MainCharacter/MainCharacter running left animation.png";
import MainCharacterAttack from "../../assets/characters/MainCharacter/MainCharacterAttack.png";
import Animation from "../../classes/Animation/Animation.tsx";
import setImage from "../../functions/setImage.tsx";

const idleAnimation = new Animation(
    setImage(MainCharacterIdleAnimation),
    200,
    200,
    "Idle"
  );
  const walkAnimationRight = new Animation(
    setImage(MainCharacterRunningRight),
    200,
    70,
    "walk"
  );
  const walkAnimationLeft = new Animation(
    setImage(MainCharacterRunningLeft),
    200,
    70,
    "walk"
  );

  const AttackAnimation = new Animation(
    setImage(MainCharacterAttack),
    200,
    40,
    "Attack"
  );


  export {idleAnimation, walkAnimationRight, walkAnimationLeft, AttackAnimation, setImage as setImage};