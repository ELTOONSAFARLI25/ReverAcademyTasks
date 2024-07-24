let container_cards = document.querySelector(".container-cards");
let api_url_singers = "http://localhost:3000/meals/";
let submit_search = document.querySelector("#submit-search");
let fav_counter = document.querySelector(".fav-counter");
async function getData() {
  let data = await (await fetch(api_url_singers)).json();

  for (let elem of data) {
    let new_card = `
    <div class="card">
          <div class="card-img">
            <img
              src="${elem.imageLink}"
              alt=""
            />
          </div>
          <div class="card-body">
            <div class="card-details">
              <a href="./detail_meals.html?=${elem.id}"><h3>${elem.name}</h3></a>

              <p>Price: ${elem.price}</p>
            </div>
            <div class="card-buttons">
              <button class="add-to-basket">Add to Basket</button>
              <a href="./detail.html"><button class="detail">Detail</button></a>

              <i class="fa-regular fa-heart add-to-fav" style="color: red"></i>

              <i class="fa-solid fa-trash delete-btn"></i>
            </div>
          </div>
        </div>
    `;
    container_cards.innerHTML += new_card;
    let delete_btns = document.querySelectorAll(".delete-btn");
    for (let btn of delete_btns) {
      btn.addEventListener("click", (e) => {
        btn.parentElement.parentElement.parentElement.remove();
      });
    }
    let fav_btns = document.querySelectorAll(".add-to-fav");
    let favArr;
    let local_fav = JSON.parse(localStorage.getItem("fav"));
    if (local_fav) {
      favArr = local_fav;
    } else {
      favArr = [];
    }
    for (let btn of fav_btns) {
      let selected_id = btn.parentElement.parentElement.parentElement.id;
      let selected_data = await (
        await fetch(api_url_singers + selected_id)
      ).json();
      let data = await (await fetch(api_url_singers)).json();
      for (let elem of favArr) {
        if (elem.id == selected_id) {
          btn.classList.add("fa-solid");
          btn.classList.remove("fa-regular");
        }
      }
      btn.addEventListener("click", async (e) => {
        if (btn.classList.contains("fa-solid")) {
          btn.classList.remove("fa-solid");
          btn.classList.add("fa-regular");
          favArr = favArr.filter((elem) => elem.id != selected_id);
          localStorage.setItem("fav", JSON.stringify(favArr));
          fav_counter.textContent--;
        } else if (btn.classList.contains("fa-regular")) {
          btn.classList.remove("fa-regular");
          btn.classList.add("fa-solid");
          favArr.push(selected_data);
          localStorage.setItem("fav", JSON.stringify(favArr));
          fav_counter.textContent++;
        }
      });
    }
  }
}
submit_search.addEventListener("click", async (e) => {
  container_cards.innerHTML = "";
  e.preventDefault();
  let data = await (await fetch(api_url_singers)).json();

  let sorted_data = data.sort((a, b) => a.name.localeCompare(b.name));
  for (let elem of data) {
    let new_card = `
    <div class="card">
          <div class="card-img">
            <img
              src="${elem.imageLink}"
              alt=""
            />
          </div>
          <div class="card-body">
            <div class="card-details">
              <a href="./detail_meals.html?=${elem.id}"><h3>${elem.name}</h3></a>

              <p>Price: ${elem.price}</p>
            </div>
            <div class="card-buttons">
              <button class="add-to-basket">Add to Basket</button>
              <a href="./detail.html"><button class="detail">Detail</button></a>

              <i class="fa-regular fa-heart add-to-fav" style="color: red"></i>

              <i class="fa-solid fa-trash delete-btn"></i>
            </div>
          </div>
        </div>
    `;
    container_cards.innerHTML += new_card;
    let delete_btns = document.querySelectorAll(".delete-btn");
    for (let btn of delete_btns) {
      btn.addEventListener("click", (e) => {
        btn.parentElement.parentElement.parentElement.remove();
      });
    }
    let fav_btns = document.querySelectorAll(".add-to-fav");
    let favArr;

    let local_fav = JSON.parse(localStorage.getItem("fav"));
    // localStorage.setItem("fav", JSON.stringify([]));

    if (local_fav) {
      favArr = local_fav;
    } else {
      favArr = [];
    }

    for (let btn of fav_btns) {
      let selected_id = btn.parentElement.parentElement.parentElement.id;
      let selected_data = await (
        await fetch(api_url_singers + selected_id)
      ).json();
      let data = await (await fetch(api_url_singers)).json();
      for (let elem of favArr) {
        if (elem.id == selected_id) {
          btn.classList.add("fa-solid");
          btn.classList.remove("fa-regular");
        }
      }
      btn.addEventListener("click", async (e) => {
        if (btn.classList.contains("fa-solid")) {
          btn.classList.remove("fa-solid");
          btn.classList.add("fa-regular");
          favArr = favArr.filter((elem) => elem.id != selected_id);
          localStorage.setItem("fav", JSON.stringify(favArr));
        } else if (btn.classList.contains("fa-regular")) {
          btn.classList.remove("fa-regular");
          btn.classList.add("fa-solid");
          favArr.push(selected_data);
          localStorage.setItem("fav", JSON.stringify(favArr));
        }
      });
    }
  }
});

let search_input = document.querySelector("#search-input");
search_input.addEventListener("input", async (e) => {
  container_cards.innerHTML = "";
  e.preventDefault();
  let data = await (await fetch(api_url_singers)).json();
  for (let elem of data) {
    if (elem.name.toLowerCase().includes(search_input.value.toLowerCase())) {
      let new_card = `
    <div class="card">
          <div class="card-img">
            <img
              src="${elem.imageLink}"
              alt=""
            />
          </div>
          <div class="card-body">
            <div class="card-details">
              <a href="./detail.html"><h3>${elem.name}</h3></a>

              <p>Price: ${elem.price}</p>
            </div>
            <div class="card-buttons">
              <button class="add-to-basket">Add to Basket</button>
              <a href="./detail_meals.html?=${elem.id}"><button class="detail">Detail</button></a>

              <i class="fa-regular fa-heart add-to-fav" style="color: red"></i>

              <i class="fa-solid fa-trash delete-btn"></i>
            </div>
          </div>
        </div>
    `;
      container_cards.innerHTML += new_card;
      let delete_btns = document.querySelectorAll(".delete-btn");
      for (let btn of delete_btns) {
        btn.addEventListener("click", (e) => {
          btn.parentElement.parentElement.parentElement.remove();
        });
      }
      let fav_btns = document.querySelectorAll(".add-to-fav");
      let favArr;
      let local_fav = JSON.parse(localStorage.getItem("fav"));
      if (local_fav) {
        favArr = local_fav;
      } else {
        favArr = [];
      }
      for (let btn of fav_btns) {
        let selected_id = btn.parentElement.parentElement.parentElement.id;
        let selected_data = await (
          await fetch(api_url_singers + selected_id)
        ).json();
        let data = await (await fetch(api_url_singers)).json();
        for (let elem of favArr) {
          if (elem.id == selected_id) {
            btn.classList.add("fa-solid");
            btn.classList.remove("fa-regular");
          }
        }
        btn.addEventListener("click", async (e) => {
          if (btn.classList.contains("fa-solid")) {
            btn.classList.remove("fa-solid");
            btn.classList.add("fa-regular");
            favArr = favArr.filter((elem) => elem.id != selected_id);
            localStorage.setItem("fav", JSON.stringify(favArr));
          } else if (btn.classList.contains("fa-regular")) {
            btn.classList.remove("fa-regular");
            btn.classList.add("fa-solid");
            favArr.push(selected_data);
            localStorage.setItem("fav", JSON.stringify(favArr));
          }
        });
      }
    }
  }
});
getData();
