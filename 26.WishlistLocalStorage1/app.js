const cardBox = document.querySelector(".card-box");
let apiUrl = "https://fakestoreapi.com/products/";
async function getData() {
  let data = await (await fetch(apiUrl)).json();
  data.forEach((elem) => {
    let newCard = `
    <div class="card" id="${elem.id}">
          <div class="image">
            <img
              src="${elem.image}"
              alt=""
            />
          </div>
          <div class="card-body">
            <div class="details">
              <h5 class="product-title">${elem.title}</h5>
              <p class="price" style="color: red ">$${elem.price}</p>
              <p class="rating">rate : ${elem.rating.rate}| count :${elem.rating.count}</p>
            </div>
            <div class="icons">
              <i class="fa-regular fa-heart favBtn"></i>
            </div>
          </div>
    `;
    cardBox.innerHTML += newCard;

    let wishlistArr = [];
    if (localStorage.getItem("wishlist")) {
      wishlistArr = JSON.parse(localStorage.getItem("wishlist"));
    }
    let favBtns = document.querySelectorAll(".favBtn");
    for (let btn of favBtns) {
      let idFav = btn.parentElement.parentElement.parentElement.id;
      for (let elemArr of wishlistArr) {
        if (elemArr.id == idFav) {
          btn.classList.add("fa-solid");
          btn.classList.remove("fa-regular");
        }
      }

      btn.addEventListener("click", async (e) => {
        let id = e.target.parentElement.parentElement.parentElement.id;
        let dataOne = await (await fetch(apiUrl + id)).json();
        if (btn.classList.contains("fa-solid")) {
          btn.classList.remove("fa-solid");
          btn.classList.add("fa-regular");
          wishlistArr = wishlistArr.filter((elem) => elem.id != id);
          localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
        } else {
          btn.classList.add("fa-solid");
          btn.classList.remove("fa-regular");
          wishlistArr.push(dataOne);
          localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
        }
      });
    }
  });
}
getData();
