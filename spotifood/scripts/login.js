let log_in_email = document.querySelector("#log-in-email");
let log_in_password = document.querySelector("#log-in-password");
let log_in_submit = document.querySelector("#log-in-submit");
let api_url_user = "http://localhost:3000/user/";

async function logIn() {
  let data = await (await fetch(api_url_user)).json();
  let loged_user = [];
  log_in_submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(2);
    let obj = {};
    let find = false;
    for (let elem of data) {
      if (
        elem.email == log_in_email.value &&
        elem.password == log_in_password.value
      ) {
        find = true;
        obj.username = elem.username;
        obj.email = elem.email;
        obj.password = elem.password;
      }
    }

    if (find) {
      console.log(obj);
      loged_user = [obj];
      localStorage.setItem("loged_user", JSON.stringify(loged_user));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You successfully loged in",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        location.href = "./basket.html";
      }, 1500);
    } else {
      alert("not same");
    }
  });
}
logIn();
