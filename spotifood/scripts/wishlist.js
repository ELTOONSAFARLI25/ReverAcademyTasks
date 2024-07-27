let loged_user = JSON.parse(localStorage.getItem("loged_user"));
let nav_list = document.querySelector(".nav-list");
if (loged_user.length) {
  nav_list.innerHTML = `

  <li><a href="./singers.html">Singers</a></li>
          <li><a href="./meals.html">Meals</a></li>
          <li><a href="./basket.html">Basket</a></li>
          <li>
            <a href="./wishlist.html" style="position: relative"
              >Wishlist <span class="fav-counter">0</span></a
            >
          </li>
          <li><button class="sign-out">Sign out</button></li>
          
  `;
  let sign_out = document.querySelector(".sign-out");
  sign_out.addEventListener("click", () => {
    loged_user = [];
    localStorage.setItem("loged_user", JSON.stringify(loged_user));
    nav_list.innerHTML = `

    <li><a href="./singers.html">Singers</a></li>
          <li><a href="./meals.html">Meals</a></li>
          <li><a href="./basket.html">Basket</a></li>
          <li>
            <a href="./wishlist.html" style="position: relative">Wishlist </a>
          </li>
          <li>
            <a href="./login.html"
              ><button class="log-in-btn">Log in</button></a
            >
          </li>
          <li><button class="sign-up-btn">Sign up</button></li>
            
    `;
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You signed out!",
      showConfirmButton: false,
      timer: 1500,
    });
  });
}
let local_fav = JSON.parse(localStorage.getItem("fav"));
let api_url_singers = "http://localhost:3000/singers/";
let api_url_meals = "http://localhost:3000/meals/";
let container_cards = document.querySelector(".container-cards");
async function getCards() {
  let local_fav = JSON.parse(localStorage.getItem("fav"));

  let data = await (await fetch(api_url_singers)).json();
  for (let elem of data) {
    for (let item of local_fav) {
      if (item.id == elem.id) {
        let new_card = `
                <div class="card" id="${item.id}">
          <div class="card-img">
            <img
              src="${item.image}"
              alt=""
            />
          </div>
          <div class="card-body">
            <div class="card-details">
              <a href=""><h3>${item.name}</h3></a>

              <p>${item.name} is in ${item.nationality}</p>
            </div>
            <div class="card-buttons">
              <a href="./detail_meals.html?id=${elem.id}"><button class="detail">Detail</button></a>

              <i class="fa-solid fa-heart add-to-fav" style="color: red"></i>

            </div>
          </div>
        </div>
                `;
        container_cards.innerHTML += new_card;
        let fav_btns = document.querySelectorAll(".add-to-fav");
        for (let btn of fav_btns) {
          btn.addEventListener("click", (e) => {
            btn.parentElement.parentElement.parentElement.remove();
            let selected_id = btn.parentElement.parentElement.parentElement.id;
            local_fav = local_fav.filter((elem) => elem.id != selected_id);
            localStorage.setItem("fav", JSON.stringify(local_fav));
          });
        }
      }
    }
  }
}
async function getCardsMeals() {
  let local_fav = JSON.parse(localStorage.getItem("favMeals"));

  let data = await (await fetch(api_url_meals)).json();
  for (let elem of data) {
    for (let item of local_fav) {
      if (item.id == elem.id) {
        let new_card = `
                <div class="card" id="${elem.id}">
          <div class="card-img">
            <img
              src="${elem.imageLink}"
              alt=""
            />
          </div>
          <div class="card-body">
            <div class="card-details">
              <a href="./detail.html"><h3>${elem.name}</h3></a>

              <p>${elem.name} is in ${elem.nationality}</p>
            </div>
            <div class="card-buttons">
              <a href="./detail_meals.html?id=${elem.id}"><button class="detail">Detail</button></a>

              <i class="fa-solid fa-heart add-to-fav" style="color: red"></i>

            </div>
          </div>
        </div>
                `;
        container_cards.innerHTML += new_card;
        let fav_btns = document.querySelectorAll(".add-to-fav");
        for (let btn of fav_btns) {
          btn.addEventListener("click", (e) => {
            btn.parentElement.parentElement.parentElement.remove();
            let selected_id = btn.parentElement.parentElement.parentElement.id;
            local_fav = local_fav.filter((elem) => elem.id != selected_id);
            localStorage.setItem("fav", JSON.stringify(local_fav));
          });
        }
      }
    }
  }
}
getCards();
getCardsMeals();
