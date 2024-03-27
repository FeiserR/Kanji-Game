//creates and exports animations    

import Animation from "../../classes/Animation/Animation";
import  setImage  from "../../functions/setImage";
import FireMagic from "../../assets/effects/magic/fireSpell.png";
import FireMagic2 from "../../assets/effects/magic/FireSpell2.png";

const fireMagic = new Animation(
    setImage(FireMagic),
    128, 
    120, 
    "fireMagic"
)

const fireMagic2 = new Animation(
    setImage(FireMagic2),
    128, 
    120, 
    "fireMagic2"
)

export {fireMagic, fireMagic2}