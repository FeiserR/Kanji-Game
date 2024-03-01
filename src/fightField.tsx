import { useRef, useEffect } from "react";
import testMaps from "./assets/maps/testMaps.png";
import adventurer from "./assets/characters/adventurer-v1.5-Sheet.png";
import Sprite from "./Sprite";
import CharacterSprite from "./CharacterSprite";

function setImage(imageRef: string) {
  let sprite = new Image();
  sprite.src = imageRef;
  return sprite;
}

const keys = {
  arrowUp: false,
  arrowDown: false,
  arrowLeft: false,
  arrowRight: false,
};

function FightField() {
  const canvas: React.RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setupMovement();
  }, []);

  function animate() {
    if (canvas.current === null) return;
    if (!canvas.current.getContext("2d")) return;

    const ctx = canvas.current.getContext("2d");
    if (ctx === null)return;

    ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
    const backGroundImg = setImage(testMaps);
    const backGround = new Sprite(ctx, backGroundImg, -100, -200);
    const Characterimg = setImage(adventurer);
    const mainCharacter = new CharacterSprite(
      ctx,
      Characterimg,
      0,
      0,
      canvas.current.width / 2 - Characterimg.width / 8 / 2,
      canvas.current.height / 2 - Characterimg.width / 16 / 2,
      Characterimg.width / 8,
      Characterimg.height / 16
    );
    backGroundImg.onload = () => {
      if (canvas.current !== null) {
        backGround.draw();

        mainCharacter.drawCharacter();
      }
    };
  
    // if (arrowUp) {

    // }
    window.requestAnimationFrame(animate);
  }

  animate();

  function setupMovement() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          keys.arrowUp = true;
          break;
        case "ArrowDown":
          keys.arrowDown = true;
          break;
        case "ArrowLeft":
          keys.arrowLeft = true;
          break;
        case "ArrowRight":
          keys.arrowRight = true;
          break;
        default:
          break;
      }
    });
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg text-center w-1/4 mx-auto my-5 justify-center items-center flex flex-col">
      <p className="text-2xl font-bold text-black">Fight Field</p>
      <canvas
        className=" w-5/6 bg-gray-200"
        id="fightField"
        ref={canvas}
      ></canvas>
    </div>
  );
}

export default FightField;
