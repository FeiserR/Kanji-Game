import{ useRef, useEffect } from 'react'
import testMaps from './assets/maps/testMaps.png'
import adventurer from './assets/characters/adventurer-v1.5-Sheet.png'

type DrawProps = {
  c:CanvasRenderingContext2D
  image:HTMLImageElement
  positionX:number
  positionY:number
}

type drawCharacterProps = {
  c:CanvasRenderingContext2D
  image:HTMLImageElement
  imagePlacementX: number,
  imagePlacementY: number,
  cropWidth: number,
  cropHeight: number,
  positionX:number
  positionY:number

}

class Sprite {
  c: CanvasRenderingContext2D;
  image: HTMLImageElement;
  positionX: number;
  positionY: number;
  draw ({ c:c, image:image, positionX:positionX, positionY:positionY}: DrawProps ) {
    c.drawImage(image, positionX, positionY);
  }
  constructor(
    c: CanvasRenderingContext2D,
    image: HTMLImageElement,
    positionX: number,
    positionY: number, ) {
    this.c = c;
    this.positionX = positionX;
    this.positionY = positionY;
    this.image = image;
}
}

class CharacterSprite extends Sprite {
  imagePlacementX: number;
  imagePlacementY: number;
  cropWidth: number;
  cropHeight: number;


  drawCharacter ({ c:c, image:image, imagePlacementX:imagePlacementX, imagePlacementY:imagePlacementY, cropWidth:cropWidth, cropHeight:cropHeight, positionX:positionX, positionY:positionY}: drawCharacterProps ) {
    c.drawImage(image, imagePlacementX, imagePlacementY, cropWidth, cropHeight, positionX, positionY, cropWidth, cropHeight);
  }
  constructor(
    c:CanvasRenderingContext2D,
    image:HTMLImageElement,
    imagePlacementX: number,
    imagePlacementY: number,
    positionX:number,
    positionY:number,
    cropWidth: number,
    cropHeight: number
    
    ) {
      super(c, image, positionX, positionY);
      this.imagePlacementX = imagePlacementX
      this.imagePlacementY = imagePlacementY
      this.cropWidth = cropWidth
      this.cropHeight = cropHeight
  }
}



function FightField() {
  
const canvas:React.RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
function animate() {
  window.requestAnimationFrame(animate);
}
useEffect(() => {
  if (canvas.current !== null) {
    if (canvas.current.getContext('2d')) {
      const ctx = canvas.current.getContext('2d');
      if (ctx !== null) {
        ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
        const backGroundImg = new Image();
        backGroundImg.src = testMaps;
        const backGround = new Sprite(ctx, backGroundImg, -100,-200);
        const Characterimg = new Image();
        Characterimg.src = adventurer;
        const mainCharacter = new CharacterSprite( ctx,  Characterimg,  0, 0, canvas.current.width / 2 - Characterimg.width / 8 / 2, canvas.current.height / 2 - Characterimg.width / 16 / 2, Characterimg.width / 8, Characterimg.height / 16
        );
        backGroundImg.onload = () => {
          if (canvas.current !== null) { // Add null check
            backGround.draw({ c: ctx, image: backGroundImg, positionX: -100, positionY: -200});
            mainCharacter.drawCharacter({ c: ctx, image: Characterimg, imagePlacementX: 0, imagePlacementY: 0, cropWidth: Characterimg.width / 8, cropHeight: Characterimg.height / 16, positionX: canvas.current.width / 2 - Characterimg.width / 8 / 2, positionY: canvas.current.height / 2 - Characterimg.width / 16 / 2});
          }
        };
      }
    }
  }
}, []);



animate();


window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          console.log('up');
          break;
        case 'ArrowDown':
          console.log('down');
          break;
        case 'ArrowLeft':
          console.log('left');
          break;
        case 'ArrowRight':
          console.log('right');
          break;
        default:
          break;
      }
    }
    );


return (
  <div className='bg-white p-5 rounded-lg shadow-lg text-center w-1/4 mx-auto my-5 justify-center items-center flex flex-col'>
    <p className='text-2xl font-bold text-black'>Fight Field</p>  
    <canvas className=" w-5/6 bg-gray-200" id="fightField"
    ref={canvas}
    ></canvas>
  </div>
)
}

export default FightField
