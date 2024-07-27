let sign_up_name = document.querySelector("#sign-up-name");
let sign_up_email = document.querySelector("#sign-up-email");
let sign_up_password = document.querySelector("#sign-up-password");
let sign_up_submit = document.querySelector("#sign-up-submit");
let api_url_user = "http://localhost:3000/user/";
async function signUp() {
  let data = await (await fetch(api_url_user)).json();

  let obj = {};
  sign_up_submit.addEventListener("click", async (e) => {
    e.preventDefault();
    let selected_data = data.find((elem) => elem.email == sign_up_email.value);
    if (selected_data) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This email was registered!",
        footer: '<a href="./login.html">Log in</a>',
      });
    } else {
      obj.username = sign_up_name.value;
      obj.email = sign_up_email.value;
      obj.password = sign_up_password.value;

      localStorage.setItem("loged_user", JSON.stringify([obj]));
      setTimeout(() => {
        location.href = "./basket.html";
      }, 1500);
      fetch(api_url_user, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
    }
  });
}
signUp();
sign_up_submit.addEventListener("click", signUp);
