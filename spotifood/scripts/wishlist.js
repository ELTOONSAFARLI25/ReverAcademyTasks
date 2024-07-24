let local_fav = JSON.parse(localStorage.getItem("fav"));
let api_url_singers = "http://localhost:3000/singers/";
let container_cards = document.querySelector(".container-cards");
async function getCards() {
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
              <a href="./detail.html"><h3>${item.name}</h3></a>

              <p>${item.name} is in ${item.nationality}</p>
            </div>
            <div class="card-buttons">
              <a href="./detail.html"><button class="detail">Detail</button></a>

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
