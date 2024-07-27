let loged_user = JSON.parse(localStorage.getItem("loged_user"));
let nav_list = document.querySelector(".nav-list");
if (loged_user.length > 0) {
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
let id = new URLSearchParams(location.search).get("id");
let api_url_singers = "http://localhost:3000/singers/";
let api_url_meals = "http://localhost:3000/meals/";
let container_card = document.querySelector(".container-card");
async function getData() {
  let data = await (await fetch(api_url_singers + id)).json();
  container_card.innerHTML = `
  <div class="card">
          <div class="img">
            <img
              src="${data.image}"
              alt=""
            />
          </div>
          <div class="card-body">
            <h1>${data.name}</h1>
            <p>${data.name} is in ${data.nationality}</p>
            <p>Age:${data.age}</p>
            <p>Genre: ${data.genre}</p>
            <div class="buttons">
              <a
                href="./singers.html
                "
                ><button class="home-btn">Home</button></a
              >
              <i
                class="fa-regular fa-heart add-to-fav"
                style="color: red; cursor: pointer"
              ></i>
            </div>
          </div>
        </div>
  `;
  let fav_btn = document.querySelector(".add-to-fav");
  let favArr;
  let local_fav = JSON.parse(localStorage.getItem("fav"));
  if (local_fav) {
    favArr = local_fav;
  } else {
    favArr = [];
  }

  let selected_id = fav_btn.parentElement.parentElement.parentElement.id;
  let selected_data = await (await fetch(api_url_singers + selected_id)).json();
  for (let elem of favArr) {
    if (elem.id == selected_id) {
      fav_btn.classList.add("fa-solid");
      fav_btn.classList.remove("fa-regular");
    }
  }
  fav_btn.addEventListener("click", async (e) => {
    if (fav_btn.classList.contains("fa-solid")) {
      fav_btn.classList.remove("fa-solid");
      fav_btn.classList.add("fa-regular");
      favArr = favArr.filter((elem) => elem.id != selected_id);
      localStorage.setItem("fav", JSON.stringify(favArr));
    } else if (fav_btn.classList.contains("fa-regular")) {
      fav_btn.classList.remove("fa-regular");
      fav_btn.classList.add("fa-solid");
      favArr.push(selected_data);
      localStorage.setItem("fav", JSON.stringify(favArr));
    }
  });
}

getData();
