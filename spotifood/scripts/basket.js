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
let tbody = document.querySelector(".tbody");
let local_basket = JSON.parse(localStorage.getItem("basket"));
console.log(local_basket);
function getData() {
  for (let elem of local_basket) {
    let new_card = `
     <tr>
              <td>${elem.id}</td>
              <td>${elem.name}</td>
              <td>
                <img
                  src="${elem.imageLink}"
                  alt=""
                />
              </td>
              <td>
                <span class="minus" id="${elem.id}">-</span>
                <span class="count">${elem.quantity}</span>
                <span class="plus" id="${elem.id}">+</span>
              </td>
              <td>${elem.price}$</td>
              <td>${elem.price}$*${elem.quantity}=${
      elem.quantity * elem.price
    }$</td>
              <td class="remove-btn" style="color: red; cursor: pointer" id="${
                elem.id
              }">
                remove
              </td>
            </tr>
    `;
    tbody.innerHTML += new_card;
    let minus = document.querySelectorAll(".minus");
    let plus = document.querySelectorAll(".plus");
    let count = document.querySelectorAll(".count");
    for (let btn of minus) {
      btn.addEventListener("click", (e) => {
        console.log(btn.parentElement.innerHTML);
        let selected_id = btn.id;
        let selected_local = local_basket.find(
          (elem) => elem.id == selected_id
        );
        if (selected_local.quantity > 1) {
          btn.nextElementSibling.innerHTML--;

          selected_local.quantity--;

          localStorage.setItem("basket", JSON.stringify(local_basket));
        }
      });
    }
    for (let btn of plus) {
      btn.addEventListener("click", (e) => {
        let selected_id = btn.id;
        let selected_local = local_basket.find(
          (elem) => elem.id == selected_id
        );
        btn.previousElementSibling.innerHTML++;
        selected_local.quantity++;
        localStorage.setItem("basket", JSON.stringify(local_basket));
      });
    }
  }
  let remove_btn = document.querySelectorAll(".remove-btn");
  for (let btn of remove_btn) {
    btn.addEventListener("click", (e) => {
      btn.parentElement.remove();
      let selected_id = btn.id;
      //   let local_basket = JSON.parse(localStorage.getItem("basket"));

      local_basket = local_basket.filter((elem) => elem.id != selected_id);
      localStorage.setItem("basket", JSON.stringify(local_basket));
    });
  }
}
getData();
let total_amount = 0;
let total_quantity = 0;
for (let elem of local_basket) {
  total_amount += elem.quantity * elem.price;
  total_quantity += elem.quantity;
}

let total_price = document.querySelector(".total-price");
let total_count = document.querySelector(".total-count");
total_price.innerHTML = `
Total price: ${total_amount.toFixed(2)}$`;
total_count.innerHTML = `<h3 class="total-count">Total count: ${total_quantity}</h3>`;
let confirm_basket_btn = document.querySelector(".confirm-basket-btn");
confirm_basket_btn.addEventListener("click", () => {
  if (loged_user.length > 0) {
    Swal.fire({
      title: "Are you sure?",
      text: "Your offers will be confirmed",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Succesfully!",
          text: "Your offers confirmed.",
          icon: "success",
        });
      }
    });
  } else {
    Swal.fire({
      text: "You should log in to use site features!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log in",
    }).then((result) => {
      if (result.isConfirmed) {
        location.href = "./login.html";
      }
    });
  }
});
