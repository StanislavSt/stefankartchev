// pixi.tsx
import { useEffect, useRef } from "react";
import { Application, utils } from "pixi.js";

export default function Pixi() {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (process.browser) {
      let type = "WebGL";
      if (!utils.isWebGLSupported()) {
        type = "canvas";
      }
      utils.sayHello('bro');
    }
  }, []);
  return <canvas ref={canvasRef} />;
}