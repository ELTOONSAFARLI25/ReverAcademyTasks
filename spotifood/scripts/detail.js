let id = new URLSearchParams(location.search).get("id");
let api_url_singers = "http://localhost:3000/singers/";
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
  //   let data = await (await fetch(api_url_singers)).json();
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
