let removeAll = document.querySelector(".removeAll");
const cardsBasket = document.querySelector(".cards-basket");
let basketArr = JSON.parse(localStorage.getItem("basket"));
let apiUrl = "https://fakestoreapi.com/products/";
let counter = 0;
let totalPrice = 0;
async function addBasket() {
  let data = await (await fetch(apiUrl)).json();
  data.forEach((elem) => {
    basketArr.forEach((id) => {
      if (id == elem.id) {
        totalPrice += Number(elem.price);
        let countId = basketArr.filter((elem) => elem == id).length;
        let counterId = 0;
        let newProduct = `
        <div class="box-basket" id="${elem.id}">
        <img
          src="${elem.image}"
          alt=""
        />
        <div class="texts">
          <h4>${elem.title}</h4>
          <p>${elem.category}</p>
        </div>
        <div class="counter">
          <p class="minus">-</p>
          <input type="number" value="1" class="count" readonly />
          <p class="pilus">+</p>
        </div>
        <div class="price">
          <h1 class="elemPrice">${elem.price}</h1>
          <p class="remove">remove</p>
        </div>
      </div>
        `;

        cardsBasket.innerHTML += newProduct;
        let removeBtns = document.querySelectorAll(".remove");
        for (let btn of removeBtns) {
          btn.addEventListener("click", (e) => {
            let idOne = e.target.parentElement.parentElement.id;
            e.target.parentElement.parentElement.remove();
            basketArr = basketArr.filter((elem) => elem != idOne);
            localStorage.setItem("basket", JSON.stringify(basketArr));
          });
        }
        removeAll.addEventListener("click", (e) => {
          console.log(123);
          cards.innerHTML = "";
          basketArr = [];
          localStorage.setItem("basket", JSON.stringify(basketArr));
        });
        counterId++;
        let minus = document.querySelectorAll(".minus");
        let pilus = document.querySelectorAll(".pilus");
        for (let btn of pilus) {
          btn.addEventListener("click", async (e) => {
            let idOne = e.target.parentElement.parentElement.id;
            e.target.parentElement.querySelector(".count").value++;
            basketArr.push(idOne);
            localStorage.setItem("basket", JSON.stringify(basketArr));
            let price = Number(
              e.target.parentElement.parentElement.querySelector(".elemPrice")
                .innerHTML
            );
            let dataOne = await (await fetch(apiUrl + idOne)).json();

            price += dataOne.price;
            e.target.parentElement.parentElement.querySelector(
              ".elemPrice"
            ).innerHTML = price;
          });
        }
        for (let btn of minus) {
          btn.addEventListener("click", async (e) => {
            let idOne = e.target.parentElement.parentElement.id;
            let dataOne = await (await fetch(apiUrl + idOne)).json();
            if (e.target.parentElement.querySelector(".count").value > 1) {
              e.target.parentElement.querySelector(".count").value--;
              let price = Number(
                e.target.parentElement.parentElement.querySelector(".elemPrice")
                  .innerHTML
              );
              price -= dataOne.price.toFixed(2);
              e.target.parentElement.parentElement.querySelector(
                ".elemPrice"
              ).innerHTML = price.toFixed(2);

              basketArr = basketArr.find((elem) => elem != idOne);
              localStorage.setItem("basket", JSON.stringify(basketArr));
            } else if (
              e.target.parentElement.querySelector(".count").value == 1
            ) {
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
                  e.target.parentElement.parentElement.remove();
                  basketArr = basketArr.filter(
                    (elem) => elem != e.target.parentElement.parentElement.id
                  );
                  localStorage.setItem("basket", JSON.stringify(basketArr));

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
      }
    });
  });

  let totalPrice2 = totalPrice.toFixed(2);
  console.log(totalPrice2);
}
addBasket();
