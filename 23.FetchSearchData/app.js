const input = document.querySelector(".input");
const cards = document.querySelector(".cards");
const getDataBtn = document.querySelector(".getDataBtn");
const loading = document.querySelector(".loading");
const choose = document.querySelector("#choose");
let apiUrl = "https://jsonplaceholder.typicode.com/users/";
let n = 0;
async function getData() {
  if (n == 0) {
    n++;
    loading.style.display = "block";
    let data = await (await fetch(apiUrl)).json();
    loading.style.display = "none";
    data.forEach((elem) => {
      let newCard = `
        <div class="card" name="${elem.id}" id="card-${elem.id}">
          <img
            src="https://i.pinimg.com/474x/63/0b/c2/630bc2282fffdc8ebd47ce14c12e90c1.jpg"
            alt="img"
            class="img"
          />
          <div class="details">
            <h3 class="name">${elem.name}</h3>
            <p class="address">${elem.address.city},${elem.address.street}</p>
          </div>
          <button id="${elem.id}" class="deleteBtn">Delete</button>
        </div>
        `;
      cards.innerHTML += newCard;

      let deleteBtns = document.querySelectorAll(".deleteBtn");
      for (let btn of deleteBtns) {
        btn.addEventListener("click", async (e) => {
          // cardlardan silme
          e.target.parentElement.remove();
          // apidan silme
          await fetch(apiUrl + e.target.id, {
            method: "DELETE",
          });
        });
      }
    });
  }
}

async function searchData() {
  let data = await (await fetch(apiUrl)).json();
  cards.innerHTML = "";
  data.forEach((elem) => {
    let value = input.value;
    if (choose.value.toLowerCase() == "name") {
      document.querySelector(".alert-message").style.display = "none";

      if (elem.name.toLowerCase().includes(value.toLowerCase())) {
        cards.innerHTML += `
        <div class="card">
          <img
            src="https://i.pinimg.com/474x/63/0b/c2/630bc2282fffdc8ebd47ce14c12e90c1.jpg"
            alt="img"
            class="img"
          />
          <div class="details">
            <h3 class="name">${elem.name}</h3>
            <p class="address">${elem.address.city},${elem.address.street}</p>
          </div>
          <button class="deleteBtn">Delete</button>
        </div>
        `;
      }

      let deleteBtns = document.querySelectorAll(".deleteBtn");
      for (let btn of deleteBtns) {
        btn.addEventListener("click", (e) => {
          e.target.parentElement.remove();
        });
      }
    } else if (choose.value.toLowerCase() == "address") {
      document.querySelector(".alert-message").style.display = "none";

      if (elem.address.city.toLowerCase().includes(value.toLowerCase())) {
        // cards.innerHTML = "";

        cards.innerHTML += `
        <div class="card">
          <img
            src="https://i.pinimg.com/474x/63/0b/c2/630bc2282fffdc8ebd47ce14c12e90c1.jpg"
            alt="img"
            class="img"
          />
          <div class="details">
            <h3 class="name">${elem.name}</h3>
            <p class="address">${elem.address.city},${elem.address.street}</p>
          </div>
          <button class="deleteBtn">Delete</button>
        </div>
        `;
      }
    } else if (choose.value.toLowerCase() == "--") {
      document.querySelector(".alert-message").style.display = "block";
      cards.innerHTML += `
        <div class="card">
          <img
            src="https://i.pinimg.com/474x/63/0b/c2/630bc2282fffdc8ebd47ce14c12e90c1.jpg"
            alt="img"
            class="img"
          />
          <div class="details">
            <h3 class="name">${elem.name}</h3>
            <p class="address">${elem.address.city},${elem.address.street}</p>
          </div>
          <button class="deleteBtn">Delete</button>
        </div>
        `;
    }
  });
}
getDataBtn.addEventListener("click", getData);
input.addEventListener("keyup", searchData);
