import FireEffectSprite from "../../assets/effects/Fire-First.png";
import CharacterAnimation from "../../classes/Animation/CharacterAnimation";
import  setImage  from "../../functions/setImage";

const fireEffect = new CharacterAnimation(
    setImage(FireEffectSprite),
    384, 
    80, 
    "fireEffect"
)


export {fireEffect}