let loged_user = JSON.parse(localStorage.getItem("logedUser"));
let nav_list = document.querySelector(".nav-list");
let footer_list = document.querySelector(".footer-list");

if (loged_user) {
  nav_list.innerHTML = `
 <li><a href="./home.html" class="title-home">mrendyol</a></li>
        <li class="input-list">
          <input
            type="text"
            class="search-input"
            placeholder="product, category or brand"
          />
        </li>
        <li><a href="./basket.html" class="basket">Basket</a></li>
        <li><a href="./wishlist.html" class="wishlist">Wishlist</a></li>
        <li><a href="./about.html" class="about">About</a></li>
        <li><a href="./contact.html" class="contact">Contact</a></li>
        <li>
          <a href="./account.html" class="login"><span style="margin-right:20px">Account</span><i class="fa-regular fa-user"></i></a>
        </li>
        <li>
          <a href=""><i class="fa-solid fa-bars"></i></a>
        </li>
 `;
  footer_list.innerHTML = `
 <li><a href="./home.html">Home</a></li>
        <li><a href="./about.html">About us</a></li>
        <li><a href="./account.html">Account</a></li>

        <li>
          <ul class="contact-list">
            <li>
              <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-youtube"></i></a>
            </li>
          </ul>
 `;
}

let cards = document.querySelector(".cards");
let api_url_products = "https://fakestoreapi.com/products/";
async function getData() {
  let data = await (await fetch(api_url_products)).json();
  for (let elem of data) {
    let new_card = `
    <div class="card" id="${elem.id}">
          <div class="card-img">
            <a href="./detailPage.html">
              <img
                src="${elem.image}"
                alt=""
              />
            </a>
          </div>
          <div class="card-body">
            <div class="details">
              <a href="./detailPage.html"> <h4 class="card-titel">${elem.title.slice(
                0,
                60
              )}...</h4></a>

              <p class="card-rating">Rate: ${elem.rating.rate}</p>
              <p class="card-price">$${elem.price}</p>
            </div>
            <div class="card-icons">
              <i class="fa-regular fa-heart wishlistBtn"></i>
              <i class="fa-solid fa-cart-shopping basketBtn"></i>
            </div>
          </div>
        </div>
    `;
    cards.innerHTML += new_card;
    let basket_arr;
    local_basket = JSON.parse(localStorage.getItem("basket"));
    if (local_basket) {
      basket_arr = local_basket;
    } else {
      basket_arr = [];
    }
    let add_to_basket = document.querySelectorAll(".basketBtn");
    for (let btn of add_to_basket) {
      btn.addEventListener("click", async (e) => {
        let selected_card = e.target.parentElement.parentElement.parentElement;
        let selected_data = await (
          await fetch(api_url_products + selected_card.id)
        ).json();
      });
    }
  }
}
getData();
