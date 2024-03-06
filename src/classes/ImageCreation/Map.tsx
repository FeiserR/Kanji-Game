import Sprite from "../../classes/ImageCreation/Sprite.tsx";
import AnimatableSprite from "../../classes/ImageCreation/AnimatableSprite.tsx";
import CreateTiles from "../../classes/IteractiveTiles/CreateTiles.tsx";


class Map {
    background: Sprite;
    mainCharacter: AnimatableSprite;
    effects: AnimatableSprite[];
    collisionMap: CreateTiles;

    constructor(
        background: Sprite,
        mainCharacter: AnimatableSprite,
        effects: AnimatableSprite[],
        collisionMap: CreateTiles
    ) {
        this.background = background;
        this.mainCharacter = mainCharacter;
        this.effects = effects;
        this.collisionMap = collisionMap;
    }
    
}