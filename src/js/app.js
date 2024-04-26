import img from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const parentDiv = document.querySelector(".wrapper");
  const image = document.createElement("img");
  image.src = img;
  // console.log(image);

  image.parentElement.removeChild(img);

  for (let i = 0; i < 16; i += 1) {
    const div = document.createElement("div");
    parentDiv.appendChild(div);
  }

  const parentChildrens = parentDiv.children;

  function genPosition() {
    return Math.floor(Math.random() * (parentChildrens.length - 1));
  }

  function setActive() {
    if (image) {
      const activeDiv = image.parentElement;
      // console.log(image);
      activeDiv.removeChild(image);
    }

    const childDivs = parentDiv.children;
    const index = genPosition();
    childDivs[index].appendChild(image);
  }

  const timerId = setInterval(setActive, 1000);
  setTimeout(() => {
    clearInterval(timerId);
  }, 20000);
});


// ====================================
// document.addEventListener("DOMContentLoaded", () => {
//   const parentDiv = document.querySelector(".wrapper");
//   const img = document.images[0];
//   img.parentElement.removeChild(img);

//   for (let i = 0; i < 16; i += 1) {
//     const div = document.createElement("div");
//     parentDiv.appendChild(div);
//   }

//   const parentChildrens = parentDiv.children;

//   function genPosition() {
//     return Math.floor(Math.random() * (parentChildrens.length - 1));
//   }

//   function setActive() {
//     if (document.images[0]) {
//       const activeDiv = document.images[0].parentElement;
//       activeDiv.removeChild(img);
//     }

//     const childDivs = parentDiv.children;
//     const index = genPosition();
//     childDivs[index].appendChild(img);
//   }

//   const timerId = setInterval(setActive, 1000);
//   setTimeout(() => {
//     clearInterval(timerId);
//   }, 20000);
// });

// =================================
