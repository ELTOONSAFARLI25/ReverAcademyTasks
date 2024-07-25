let loged_user = JSON.parse(localStorage.getItem("logedUser"));
let nav_list = document.querySelector(".nav-list");
let footer_list = document.querySelector(".footer-list");
let api_url_products = "https://fakestoreapi.com/products/";
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

let id = new URLSearchParams(location.search).get("id");
console.log(id);
async function getData() {
  let data = await (await fetch(api_url_products + id)).json();
}
