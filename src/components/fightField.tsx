import { useRef, useEffect } from "react";
import animate from "../functions/animate.tsx";

function FightField() {
  const canvas: React.RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);



  useEffect(() => {

    if (canvas.current === null) {
      console.error("Canvas is null");
      return;
    }
    if (!canvas.current.getContext("2d")) {
      console.error("Canvas get content is not true");
      return;
    }


    const ctx = canvas.current.getContext("2d");

    if (ctx === null) {
      console.error("ctx is null");
      return;
    }

    if (canvas.current === null) return;

    animate(ctx);
  }, []);


  return (
    <div className="w-full backdrop-contrast-150 flex justify-center">
      <canvas
        className="shadow-inner"
        width="1800"
        height="300"
        id="fightField"
        ref={canvas}
      ></canvas>
    </div>
  );
}

export default FightField;
