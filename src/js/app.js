import image from "../img/goblin.png";

  const boxes = document.querySelector(".box");
  const goblin = document.createElement("img");
  goblin.src = image;

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
