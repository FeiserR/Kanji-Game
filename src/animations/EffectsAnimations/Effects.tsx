//creates and exports animations

import fireEffectSprite from "../../assets/effects/Fire-First.png";
import BrownCloudSprite from "../../assets/effects/Brown cloud.png";
import Animation from "../../classes/Animation/Animation";
import  setImage  from "../../functions/setImage";

const fireEffect = new Animation(
    setImage(fireEffectSprite),
    384, 
    80, 
    "fireEffect"
)
const brownCloudEffect = new Animation(
    setImage(BrownCloudSprite),
    320, 
    80, 
    "brownCloudEffect"
)




export {fireEffect, brownCloudEffect}