let boxes = document.querySelectorAll(".box");
let dropBoxes = document.querySelectorAll(".dropBox");
let dropBox1 = document.querySelector(".dropBox1");
let dropBox2 = document.querySelector(".dropBox2");
let dropBox3 = document.querySelector(".dropBox3");
let divs = document.querySelectorAll(".div");
for (let box of boxes) {
  box.addEventListener("dragstart", (e) => {
    let selected = e.target;
    // for (let div of divs) {
    //   div.addEventListener("dragover", (e) => {
    //     e.preventDefault();
    //   });
    //   div.addEventListener("drop", (e) => {
    //     console.log(e.target);
    //   });
    // }s
    document.querySelector(".div1").addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    document.querySelector(".div1").addEventListener("drop", () => {
      dropBox1.appendChild(selected);
      selected = null;
    });
    document.querySelector(".div2").addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    document.querySelector(".div2").addEventListener("drop", () => {
      dropBox2.appendChild(selected);
      selected = null;
    });
    document.querySelector(".div3").addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    document.querySelector(".div3").addEventListener("drop", () => {
      dropBox3.appendChild(selected);
      selected = null;
    });
    document.querySelector(".boxes").addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    document.querySelector(".boxes").addEventListener("drop", (e) => {
      document.querySelector(".dragBox").appendChild(selected);
      selected = null;
    });
  });
}
