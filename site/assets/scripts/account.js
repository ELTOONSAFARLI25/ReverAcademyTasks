let api_url = "https://669f8faab132e2c136fe57d0.mockapi.io/users/";
let loged_user = JSON.parse(localStorage.getItem("logedUser"));
let users = JSON.parse(localStorage.getItem("users"));
let nav_list = document.querySelector(".nav-list");
let footer_list = document.querySelector(".footer-list");
let header_title = document.querySelector(".header-title");
let log_out = document.querySelector(".log-out");
let delete_account = document.querySelector(".delete-account");
if (loged_user.length > 0) {
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
  footer_list.innerHTML = `
 <li><a href="./home.html">Home</a></li>
        <li><a href="./about.html">About us</a></li>
        <li><a href="./account.html">Account</a></li>

        <li>
          <ul class="contact-list">
            <li>
              <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-youtube"></i></a>
            </li>
          </ul>
 `;
  header_title.innerHTML = `
  <h1>${loged_user[0].name}</h1>
  <p>${loged_user[0].email}</p>
      `;
  //   delete_account.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     for (let elem in users) {
  //       if (users[elem].email == loged_user[0].email) {
  //         Swal.fire({
  //           title: "Are you sure?",
  //           text: "You won't be able to revert this!",
  //           showCancelButton: true,
  //           confirmButtonColor: "#3085d6",
  //           cancelButtonColor: "#d33",
  //           confirmButtonText: "Yes, delete it!",
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your file has been deleted.",
  //               icon: "success",
  //             });
  //             users = users.filter((elem) => elem.email != loged_user[0].email);
  //             console.log(users);
  //             localStorage.setItem("users", JSON.stringify(users));
  //             loged_user = [];
  //             localStorage.setItem("logedUser", JSON.stringify(loged_user));
  //             fetch(api_url + users[elem].id, {
  //               method: "DELETE",
  //             });
  //             // location.href = "./home.html";
  //           }
  //         });
  //       }
  //     }
  //   });
}

log_out.addEventListener("click", (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      localStorage.setItem("logedUser", JSON.stringify([]));
      location.href = "./home.html";
    }
  });
});
