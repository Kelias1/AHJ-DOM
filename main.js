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

document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");
  const board = [];
  const goblin = document.createElement("img");
  goblin.src = goblin_namespaceObject;
  for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    box.append(div);
    board.push(div);
  }
  let currentBox = 0;
  function moveGoblin() {
    board[currentBox].innerHTML = '';
    currentBox = Math.floor(Math.random() * board.length);
    board[currentBox].append(goblin);
  }
  setInterval(moveGoblin, 1000);
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;