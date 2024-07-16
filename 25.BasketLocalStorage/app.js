const cards = document.querySelector(".cards");
const selectCategory = document.querySelector(".selectCategory");
let apiUrl = "https://fakestoreapi.com/products/";

async function getData() {
  let data = await (await fetch(apiUrl)).json();
  data.forEach((elem) => {
    let newCard = `
    <div class="card" id="${elem.id}">
          <img
            class="card-img"
            src="${elem.image}"
            alt=""
          />
          <div class="card-body">
            <div class="card-texts">
              <h3>${elem.title}</h3>
              <p>${elem.category}</p>
              <p>Rate:${elem.rating.rate} |Count: ${elem.rating.count}</p>
              <h4 style="color:red">${elem.price}$</h4>
            </div>
            <div class="icons">
              <i class="fa-regular fa-heart addToFav"></i>
              <i class="fa-solid fa-cart-shopping addToBasket"></i>
            </div>
          </div>
        </div>
    `;
    cards.innerHTML += newCard;
    let addToBasket = document.querySelectorAll(".addToBasket");
    let arr;
    if (localStorage.getItem("basket")) {
      arr = JSON.parse(localStorage.getItem("basket"));
    } else {
      arr = [];
    }
    for (let btn of addToBasket) {
      btn.addEventListener("click", (e) => {
        let id = e.target.parentElement.parentElement.parentElement.id;
        if (!arr.includes(id)) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added to basket",
            showConfirmButton: false,
            timer: 1500,
          });

          arr.push(id);
          console.log(arr);
          localStorage.setItem("basket", JSON.stringify(arr));
        } else {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              arr = arr.filter((elem) => elem != id);
              localStorage.setItem("basket", JSON.stringify(arr));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
    }
    let imgs = document.querySelectorAll(".card-img");
    for (let elem of imgs) {
      elem.addEventListener("click", async (e) => {
        let id = e.target.parentElement.id;
        let dataOne = await (await fetch(apiUrl + id)).json();

        Swal.fire({
          title: `${dataOne.title} | ${dataOne.category}`,
          text: `Description: ${dataOne.description}`,
          footer: `Price:${dataOne.price}$ | Rate:${dataOne.rating.rate} | Count: ${dataOne.rating.count} `,
          imageUrl: `${dataOne.image}`,
          imageWidth: 300,
          imageHeight: 350,
          imageAlt: "Custom image",
          imageClass: "custom-image",
        });
      });
    }
  });
}
selectCategory.addEventListener("change", async () => {
  let data = await (await fetch(apiUrl)).json();
  cards.innerHTML = "";
  data.forEach((elem) => {
    if (elem.category == selectCategory.value) {
      cards.innerHTML += `
         <div class="card" id="${elem.id}">
          <img
            class="card-img"
            src="${elem.image}"
            alt=""
          />
          <div class="card-body">
            <div class="card-texts">
              <h3>${elem.title}</h3>
              <p>${elem.category}</p>
              <p>Rate:${elem.rating.rate} |Count: ${elem.rating.count}</p>
              <h4 style="color:red">${elem.price}$</h4>
            </div>
            <div class="icons">
              <i class="fa-regular fa-heart addToFav"></i>
              <i class="fa-solid fa-cart-shopping addToBasket"></i>
            </div>
          </div>
        </div>
        `;
    } else if (selectCategory.value == "all") {
      cards.innerHTML += `
        <div class="card" id="${elem.id}">
          <img
            class="card-img"
            src="${elem.image}"
            alt=""
          />
          <div class="card-body">
            <div class="card-texts">
              <h3>${elem.title}</h3>
              <p>${elem.category}</p>
              <p>Rate:${elem.rating.rate} |Count: ${elem.rating.count}</p>
              <h4 style="color:red">${elem.price}$</h4>
            </div>
            <div class="icons">
              <i class="fa-regular fa-heart addToFav"></i>
              <i class="fa-solid fa-cart-shopping addToBasket"></i>
            </div>
          </div>
        </div>
        `;
    }
  });
});
getData();
