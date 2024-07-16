const div = document.querySelectorAll(".div");
const icon = document.querySelectorAll(".fa-solid");
let detail = document.querySelectorAll(".detail");
icon.forEach((btn) => {
  let div1;
  btn.addEventListener("click", () => {
    div1 = btn.parentElement;
    let imgUrl =
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg";
    // if (div1.style.backgroundImage == "") {
    //   console.log("Doldur");
    //   div1.style.backgroundImage = `url(${imgUrl})`;
    // } else {
    //   console.log("Bosald");
    //   div1.style.backgroundImage == "";
    // }
    // if (div1.style.backgroundImage) {
    //   div1.style.backgroundImage = "";
    // } else {
    //   div1.style.backgroundImage = `url('${imgUrl}')`;
    // }
    div.forEach((elem) => {
      if (elem != div1) {
        elem.classList.remove("div-transformed");
      }
    });
    div1.classList.toggle("div-transformed");
    // let transformedDiv = document.querySelector(".div-transformed");

    detail.forEach((elem) => {
      if (elem.parentElement == div1 && elem.innerHTML == "") {
        elem.innerHTML = "They make up everything";
      } else {
        elem.innerHTML = "";
      }
    });
  });
});
