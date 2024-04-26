import image from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const goblin = document.createElement("img");
  goblin.src = image;
  
  let currentBox = null;

  function getBox() {
    const i = Math.floor(Math.random() * boxes.length);
    return boxes[i];
  }

  function moveGoblin() {
    const newBox = getBox();
    if (newBox !== currentBox) {
      currentBox = newBox;
      currentBox.appendChild(goblin);
    }
  }
  setInterval(moveGoblin, 1000);
});