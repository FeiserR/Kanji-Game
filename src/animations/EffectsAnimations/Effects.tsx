import fireEffectSprite from "../../assets/effects/Fire-First.png";
import BrownCloudSprite from "../../assets/effects/Brown cloud.png";
import CharacterAnimation from "../../classes/Animation/CharacterAnimation";
import  setImage  from "../../functions/setImage";

const fireEffect = new CharacterAnimation(
    setImage(fireEffectSprite),
    384, 
    80, 
    "fireEffect"
)
const brownCloudEffect = new CharacterAnimation(
    setImage(BrownCloudSprite),
    320, 
    80, 
    "brownCloudEffect"
)




export {fireEffect, brownCloudEffect}