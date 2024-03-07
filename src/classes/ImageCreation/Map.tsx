import Sprite from "../../classes/ImageCreation/Sprite.tsx";
import AnimatableSprite from "../../classes/ImageCreation/AnimatableSprite.tsx";
import CreateTiles from "../../classes/IteractiveTiles/CreateTiles.tsx";
import  {Magic}  from "./Magic.tsx";


class Map {
    movement: boolean;
    background: Sprite;
    mainCharacter: AnimatableSprite;
    effects: (AnimatableSprite | Magic)[] = [];
    enemies: AnimatableSprite[] = [];
    collisionMap: CreateTiles;

    constructor(
        movement: boolean,
        background: Sprite,
        mainCharacter: AnimatableSprite,
        effects: (AnimatableSprite | Magic)[],
        enemies: AnimatableSprite[],
        collisionMap: CreateTiles
    ) {
        this.movement = movement;
        this.background = background;
        this.mainCharacter = mainCharacter;
        this.effects = effects;
        this.enemies = enemies;
        this.collisionMap = collisionMap;
    }

    
    
}


export default Map;