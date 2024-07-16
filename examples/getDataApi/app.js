const getDataBtn = document.querySelector(".getDataBtn");
const sortNameBtn = document.querySelector(".sortNameBtn");
const sortIdBtn = document.querySelector(".sortIdBtn");
const clearBtn = document.querySelector(".clearBtn");
const tbody = document.querySelector(".tbody");

async function sortById() {
  tbody.innerHTML = "";
  let data = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  const sortedData = data.sort((x, y) => y.id - x.id);
  sortedData.forEach((elem) => {
    let newTr = `
          <tr>
              <th scope="row">${elem.id}</th>
              <td>${elem.name}</td>
              <td>${elem.username}</td>
              <td>${elem.email}</td>
              <td>${elem.address.street}/${elem.address.city}</td>
              <td><a href="${elem.website}" target="_blank">${elem.website} </a></td>
              <td><button type="button" id=${elem.id} class="btn btn-outline-dark learnmoreBtn">Learn More</button></td>
          `;
    tbody.innerHTML += newTr;
  });
}

async function sortByName() {
  tbody.innerHTML = "";
  let data = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  const sortedData = data.sort((x, y) => x.name.localeCompare(y.name));
  sortedData.forEach((elem) => {
    let newTr = `
          <tr>
              <th scope="row">${elem.id}</th>
              <td>${elem.name}</td>
              <td>${elem.username}</td>
              <td>${elem.email}</td>
              <td>${elem.address.street}/${elem.address.city}</td>
              <td><a href="${elem.website}" target="_blank">${elem.website} </a></td>
              <td><button type="button" id=${elem.id} class="btn btn-outline-dark learnmoreBtn">Learn More</button></td>
          `;
    tbody.innerHTML += newTr;
  });
}
async function getData() {
  let data = [];
  const loader = document.querySelector(".loader");
  loader.style.display = "inline-grid";

  // document.querySelector(".loader").style.display = "none";
  data = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  loader.style.display = "none";
  data.forEach((elem) => {
    let newTr = `
        <tr>
            <th scope="row">${elem.id}</th>
            <td>${elem.name}</td>
            <td>${elem.username}</td>
            <td>${elem.email}</td>
            <td>${elem.address.street}/${elem.address.city}</td>
            <td><a href="${elem.website}" target="_blank">${elem.website} </a></td>
            <td><button type="button" id=${elem.id} class="btn btn-outline-dark learnmoreBtn">Learn More</button></td>
        `;

    tbody.innerHTML += newTr;
  });
  let infoBtn = document.querySelectorAll(".learnmoreBtn");
  infoBtn.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      // console.log(e.target.id);
      // console.log(btn.id);
      let data = await (
        await fetch(`https://jsonplaceholder.typicode.com/users/${btn.id}`)
      ).json();
      console.log(data);
      Swal.fire({
        title: `${data.name}`,
        text: `${data.address.street},${data.address.suite}`,
        footer: `${data.phone}`,
      });
    });
  });

  sortNameBtn.addEventListener("click", sortByName);
  sortIdBtn.addEventListener("click", sortById);
}

getDataBtn.addEventListener("click", getData);

clearBtn.addEventListener("click", () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",

      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        tbody.innerHTML = "";
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
        });
      }
    });
});
window.addEventListener("load", () => {
  document.querySelector(".bike").style.display = "none";
});
