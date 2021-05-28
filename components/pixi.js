// pixi.tsx
import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
window.PIXI = PIXI;
require("pixi-projection");
import img from "../public/menu/rest.png";
import img2 from "../public/menu/ambivalence.png";
import img3 from "../public/menu/luxus.png";

const getId = () => document.getElementById("myel");

export default function Pixi({ getLink }) {
  const app = new PIXI.Application({
    transparent: true,
    resizeTo: window,
  });

  const w = app.screen.width / 2;
  const h = app.screen.height / 2;

  function createSprite(img, squares) {
    const quad = squares.map((s) => s.position);

    // add sprite itself
    const containerSprite = new window.PIXI.projection.Sprite2s(
      PIXI.Texture.from(img)
    );
    containerSprite.anchor.set(0.5);

    app.stage.addChild(containerSprite);
    squares.forEach((s) => {
      app.stage.addChild(s);
    });

    // Listen for animate update
    app.ticker.add((delta) => {
      containerSprite.proj.mapBilinearSprite(containerSprite, quad);
    });

    squares.forEach((s) => {
      addInteraction(s);
    });

    // let us add sprite to make it more funny

    const bunny = new window.PIXI.projection.Sprite2s(PIXI.Texture.from(img));
    bunny.anchor.set(0.5);
    containerSprite.addChild(bunny);
    return bunny;
  }

  function createSquare(x, y) {
    const square = new PIXI.Sprite(PIXI.Texture.WHITE);
    square.height = 8;
    square.width = 8;
    square.tint = 0xffaacc;
    square.factor = 1;
    square.anchor.set(0.5);
    square.position.set(x, y);
    return square;
  }

  const squares = [
    createSquare(w - 150, 300),
    createSquare(w + 150, 300),
    createSquare(w + 150, h + 150),
    createSquare(w - 150, h + 150),
  ];
  const squares2 = [
    createSquare(150, h + 144),
    createSquare(650, h + 144),
    createSquare(650, h + 611),
    createSquare(150, h + 611),
  ];
  const squares3 = [
    createSquare(511, 111),
    createSquare(811, 111),
    createSquare(811, 655),
    createSquare(511, 655),
  ];

  const bunny = createSprite(img2, squares);
  const bunny2 = createSprite(img, squares2);
  const bunny3 = createSprite(img3, squares3);

  addInteraction(bunny);
  addInteraction(bunny2);
  addInteraction(bunny3);

  // === INTERACTION CODE  ===

  function toggle(obj) {}

  function snap(obj) {
    if (obj === bunny) {
      obj.position.set(0);
    } else {
      obj.position.x = Math.min(Math.max(obj.position.x, 0), app.screen.width);
      obj.position.y = Math.min(Math.max(obj.position.y, 0), app.screen.height);
    }
  }

  function addInteraction(obj) {
    obj.interactive = true;
    obj
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMove);
    // .on("mouseover", onMouseOver)
    // .on("click", onClick);
  }

  function onClick(event) {
    if (event.currentTarget.texture.textureCacheIds[0].includes("ambivalence"))
      getLink("ambivalence");
    if (event.currentTarget.texture.textureCacheIds[0].includes("rest"))
      getLink("rest");
  }

  function onMouseOver(event) {
    // console.log(event.currentTarget)
  }

  function onDragStart(event) {
    const obj = event.currentTarget;
    console.log(event.currentTarget);
    obj.dragData = event.data;
    obj.dragging = 1;
    obj.dragPointerStart = event.data.getLocalPosition(obj.parent);
    obj.dragObjStart = new PIXI.Point();
    obj.dragObjStart.copyFrom(obj.position);
    obj.dragGlobalStart = new PIXI.Point();
    obj.dragGlobalStart.copyFrom(event.data.global);
  }

  function onDragEnd(event) {
    const obj = event.currentTarget;
    if (obj.dragging === 1) {
      toggle(obj);
    } else {
      snap(obj);
    }
    obj.dragging = 0;
    obj.dragData = null;
    // set the interaction data to null
  }

  function onDragMove(event) {
    const obj = event.currentTarget;
    if (!obj.dragging) return;
    const data = obj.dragData; // it can be different pointer!
    if (obj.dragging === 1) {
      // click or drag?
      if (
        Math.abs(data.global.x - obj.dragGlobalStart.x) +
          Math.abs(data.global.y - obj.dragGlobalStart.y) >=
        3
      ) {
        // DRAG
        obj.dragging = 2;
      }
    }
    if (obj.dragging === 2) {
      const dragPointerEnd = data.getLocalPosition(obj.parent);

      if (
        dragPointerEnd.x >= -2500 &&
        dragPointerEnd.x <= 2500 &&
        dragPointerEnd.y >= -2500 &&
        dragPointerEnd.y <= 2500
      ) {
        // DRAG only if its not too far away, and its not NaN
        obj.position.set(
          obj.dragObjStart.x + (dragPointerEnd.x - obj.dragPointerStart.x),
          obj.dragObjStart.y + (dragPointerEnd.y - obj.dragPointerStart.y)
        );
      }
    }
  }

  const canvasRef = useRef(null);
  useEffect(() => {
    const container = getId();
    container.appendChild(app.view);
  }, []);
  return <div id="myel" style={{ position: "absolute" }}></div>;
}
