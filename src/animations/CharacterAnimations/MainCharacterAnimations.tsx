import MainCharacterIdleAnimation from "../../assets/characters/MainCharacter/MainCharacter Idle animation.png";
import MainCharacterRunningRight from "../../assets/characters/MainCharacter/MainCharacter running animation.png";
import MainCharacterRunningLeft from "../../assets/characters/MainCharacter/MainCharacter running left animation.png";
import MainCharacterAttack from "../../assets/characters/MainCharacter/MainCharacterAttack.png";
import CharacterAnimation from "../../classes/Animation/CharacterAnimation.tsx";
import setImage from "../../functions/setImage.tsx";

const idleAnimation = new CharacterAnimation(
    setImage(MainCharacterIdleAnimation),
    200,
    200,
    "Idle"
  );
  const walkAnimationRight = new CharacterAnimation(
    setImage(MainCharacterRunningRight),
    200,
    70,
    "walk"
  );
  const walkAnimationLeft = new CharacterAnimation(
    setImage(MainCharacterRunningLeft),
    200,
    70,
    "walk"
  );

  const AttackAnimation = new CharacterAnimation(
    setImage(MainCharacterAttack),
    200,
    40,
    "Attack"
  );


  export {idleAnimation, walkAnimationRight, walkAnimationLeft, AttackAnimation, setImage};