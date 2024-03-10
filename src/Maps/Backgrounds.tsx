import { setImage } from "../animations/CharacterAnimations/MainCharacterAnimations.tsx";
import dungeonImage from "../assets/maps/UsableMaps/dungeon.png";
import forestShopImage from "../assets/maps/UsableMaps/forestShop.png";
import testMapsImage from "../assets/maps/Testmaps/testMap1.png";

const dungeonBackground = setImage(dungeonImage);

const backGroundImg2 = setImage(testMapsImage);

const forestShop = setImage(forestShopImage);

export {dungeonBackground, backGroundImg2, forestShop}