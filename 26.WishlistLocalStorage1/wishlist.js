let apiUrl = "https://fakestoreapi.com/products";
const favCards = document.querySelector(".fav-cards");
const removeAllCards = document.querySelector(".removeAll");
let favCardsArr = JSON.parse(localStorage.getItem("wishlist"));
console.log(favCardsArr);
async function getData() {
  let data = await (await fetch(apiUrl)).json();
  data.forEach((elem) => {
    for (let elemLocal of favCardsArr) {
      if (elemLocal.id == elem.id) {
        let newCard = `
    <div class="card" id="${elem.id}">
          <div class="card-img">
            <img
              src="${elem.image}"
              alt=""
            />
          </div>
          <div class="card-body">
            <div class="card-details">
              <h5>${elem.title}</h5>
              <p style="color: red">${elem.price}</p>
              <p>rate: ${elem.rating.rate} | count: ${elem.rating.count}</p>
            </div>
            <div class="icons">
              <i class="fa-solid fa-xmark removeCard"></i>
            </div>
          </div>
        </div>
    `;
        favCards.innerHTML += newCard;
        let removeCard = document.querySelectorAll(".removeCard");
        for (let btn of removeCard) {
          btn.addEventListener("click", (e) => {
            let id = e.target.parentElement.parentElement.parentElement.id;
            e.target.parentElement.parentElement.parentElement.remove();
            favCardsArr = favCardsArr.filter((elem) => elem.id != id);
            localStorage.setItem("wishlist", JSON.stringify(favCardsArr));
          });
        }
      }
    }
  });
}
removeAllCards.addEventListener("click", () => {
  favCards.innerHTML = "";
  favCardsArr = [];
  localStorage.setItem("wishlist", JSON.stringify(favCardsArr));
});
getData();
