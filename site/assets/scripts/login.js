let loged_user = JSON.parse(localStorage.getItem("logedUser"));
let nav_list = document.querySelector(".nav-list");
let footer_list = document.querySelector(".footer-list");
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
}

let toggle_sign_up = document.querySelector(".toggle-sign-up");
let toggle_log_in = document.querySelector(".toggle-log-in");
let container = document.querySelectorAll(".container");
let log_in_container = document.querySelector(".log-in");
let sign_up_container = document.querySelector(".sign-up");
toggle_log_in.addEventListener("click", (e) => {
  sign_up_container.style.display = "none";
  log_in_container.style.display = "flex";
});
toggle_sign_up.addEventListener("click", (e) => {
  log_in_container.style.display = "none";
  sign_up_container.style.display = "flex";
});
let users;
localUsersArr = JSON.parse(localStorage.getItem("users"));
if (localUsersArr) {
  users = localUsersArr;
} else {
  users = [];
}
let logedUser = [];
let signedUser = [];
let users_api_url = "https://669f8faab132e2c136fe57d0.mockapi.io/users/";

let sign_up_name = document.querySelector("#sign-up-name");
let sign_up_email = document.querySelector("#sign-up-email");
let sign_up_password = document.querySelector("#sign-up-password");
let submit_sign_up = document.querySelector("#submit-sign-up");
submit_sign_up.addEventListener("click", async (e) => {
  if (sign_up_email.value != "" && sign_up_password.value != "") {
    e.preventDefault();
    let data = await (await fetch(users_api_url)).json();
    users = data;
    let obj = {
      name: sign_up_name.value,
      email: sign_up_email.value,
      password: sign_up_password.value,
    };
    let find = true;
    let signed_obj = {};
    for (let elem of data) {
      if (elem.email != obj.email) {
        signed_obj.name = elem.name;
        signed_obj.email = elem.email;
        signed_obj.password = elem.password;
      } else {
        find = false;
      }
    }
    if (obj.password.length < 8) {
      document.querySelector(".sign-up-alert").style.display = "block";
      sign_up_password.value = "";
    } else {
      document.querySelector(".sign-up-alert").style.display = "none";

      if (find) {
        document.querySelector(".sign-up-email-alert").style.display = "none";
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You succesfully registered",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          location.href = "./home.html";
        }, 1500);
        users.push(obj);
        signedUser = [signed_obj];
        localStorage.setItem("logedUser", JSON.stringify(signedUser));
        localStorage.setItem("users", JSON.stringify(users));
        fetch(users_api_url, {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        sign_up_name.value = "";
        sign_up_email.value = "";
        sign_up_password.value = "";
      } else {
        console.log("this email was registered");
        document.querySelector(".sign-up-email-alert").style.display = "block";
        sign_up_name.value = "";
        sign_up_email.value = "";
        sign_up_password.value = "";
      }
    }
  }
});
let log_in_email = document.querySelector("#log-in-email");
let log_in_password = document.querySelector("#log-in-password");
let submit_log_in = document.querySelector("#submit-log-in");
submit_log_in.addEventListener("click", async (e) => {
  if (log_in_email.value != "" && log_in_password.value != "") {
    e.preventDefault();
    let find = false;
    let data = await (await fetch(users_api_url)).json();
    let obj = {};
    for (let elem of data) {
      if (
        elem.email == log_in_email.value &&
        elem.password == log_in_password.value
      ) {
        find = true;
        obj.name = elem.name;
        obj.email = elem.email;
        obj.password = elem.password;
      }
    }
    console.log(obj);

    console.log(logedUser);
    if (find) {
      logedUser = [obj];
      localStorage.setItem("logedUser", JSON.stringify(logedUser));
      document.querySelector(".log-in-alert").style.display = "none";
      log_in_email.value = "";
      log_in_password.value = "";
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You succesfully loged in ",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        location.href = "./home.html";
      }, 1500);
    } else {
      document.querySelector(".log-in-alert").style.display = "block";
    }
  }
});
console.log(users);
