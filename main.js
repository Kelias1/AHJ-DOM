/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/app.js

const boxes = document.querySelector(".box");
const goblin = document.createElement("img");
goblin.src = goblin_namespaceObject;
for (let i = 0; i < 16; i++) {
  let div = document.createElement("div");
  boxes.appendChild(div);
}
let currentBox = null;
function getBox() {
  const i = Math.floor(Math.random() * boxes.length);
  return boxes[i];
}
function moveGoblin() {
  const newBox = getBox();
  if (newBox !== currentBox) {
    currentBox = newBox;
    currentBox.append(goblin);
  }
}
setInterval(moveGoblin, 1000);

// import image from "../img/goblin.png";

// document.addEventListener("DOMContentLoaded", () => {
//   const boxes = document.querySelector(".box");
//   const goblin = document.createElement("img");
//   goblin.src = image;

//   for (let i = 0; i < 16; i++) {
//     let div = document.createElement("div");
//     boxes.appendChild(div);
//   }

//   let currentBox = null;

//   function getBox() {
//     const i = Math.floor(Math.random() * boxes.length);
//     return boxes[i];
//   }

//   function moveGoblin() {
//     const newBox = getBox();
//     if (newBox !== currentBox) {
//       currentBox = newBox;
//       currentBox.appendChild(goblin);
//     }
//   }
//   setInterval(moveGoblin, 1000);
// });
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;