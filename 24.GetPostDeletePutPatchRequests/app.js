const getDataBtn = document.querySelector(".getDataBtn");
const tbody = document.querySelector(".tbody");
const infoBtn = document.querySelector(".infoBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const addDataBtn = document.querySelector(".addDataBtn");
const submitBtn = document.querySelector(".submitBtn");
const editBox = document.querySelector(".editBox");
const companyNameEdit = document.querySelector(".companyNameEdit");
const contactNameEdit = document.querySelector(".contactNameEdit");
const contactTitleEdit = document.querySelector(".contactTitleEdit");
const cityEdit = document.querySelector(".cityEdit");
const countryEdit = document.querySelector(".countryEdit");
const streetEdit = document.querySelector(".streetEdit");
const postalCodeEdit = document.querySelector(".postalCodeEdit");
const phoneNumberEdit = document.querySelector(".phoneNumberEdit");
let apiUrl = "https://northwind.vercel.app/api/suppliers/";
async function getData() {
  tbody.innerHTML = "";
  document.querySelector(".spinner").style.display = "block";
  let data = await (await fetch(apiUrl)).json();
  document.querySelector(".spinner").style.display = "none";

  data.forEach((elem) => {
    let newTr = `
    <tr id="${elem.id}">
          <td>${elem.companyName}</td>
          <td>${elem.address?.city}</td>
          <td>${elem.address?.country}</td>
          <td><button class="infoBtn">Info</button></td>
          <td><button class="deleteBtn">Delete</button></td>
          <td><button class="editBtn">Edit</button></td>
        </tr>
    `;
    tbody.innerHTML += newTr;
    let editedId;
    let editBtns = document.querySelectorAll(".editBtn");
    for (let btn of editBtns) {
      btn.addEventListener("click", async (e) => {
        editBox.style.display = "block";
        editedId = e.target.parentElement.parentElement.id;
        let editedData = await (await fetch(apiUrl + editedId)).json();

        companyNameEdit.value = editedData.companyName;
        contactNameEdit.value = editedData.contactName;
        contactTitleEdit.value = editedData.contactTitle;
        cityEdit.value = editedData.address.city;
        countryEdit.value = editedData.address.country;
        streetEdit.value = editedData.address.street;
        postalCodeEdit.value = editedData.address.postalCode;
        phoneNumberEdit.value = editedData.address.phone;
        let editSubmitBtns = document.querySelector(".editSubmitBtn");
        editSubmitBtns.addEventListener("click", async (e) => {
          let objEdit = {
            address: {},
          };
          objEdit.companyName = companyNameEdit.value;
          objEdit.contactName = contactNameEdit.value;
          objEdit.contactTitle = contactTitleEdit.value;
          objEdit.address.city = cityEdit.value;
          objEdit.address.country = countryEdit.value;
          objEdit.address.street = streetEdit.value;
          objEdit.address.phone = phoneNumberEdit.value;
          objEdit.address.postalCode = postalCodeEdit.value;
          editBox.style.display = "none";
          let editedData = await (
            await fetch(apiUrl + editedId, {
              method: "PATCH",
              body: JSON.stringify(objEdit),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
          ).json();
          tbody.innerHTML = "";
          document.querySelector(".spinner").style.display = "block";
          let data = await (await fetch(apiUrl)).json();
          document.querySelector(".spinner").style.display = "none";

          data.forEach((elem) => {
            tbody.innerHTML += `
              <tr id="${elem.id}">
            <td>${elem.companyName}</td>
            <td>${elem.address?.city}</td>
            <td>${elem.address?.country}</td>
            <td><button class="infoBtn">Info</button></td>
            <td><button class="deleteBtn">Delete</button></td>
            <td><button class="editBtn">Edit</button></td>
          </tr>
              `;

            let deleteBtns = document.querySelectorAll(".deleteBtn");
            for (let btn of deleteBtns) {
              btn.addEventListener("click", async (e) => {
                let id = e.target.parentElement.parentElement.id;
                // ekrandan silme
                e.target.parentElement.parentElement.remove();
                // apidan silme
                fetch(apiUrl + id, {
                  method: "DELETE",
                });
              });
            }
            let infoBtns = document.querySelectorAll(".infoBtn");
            for (let btn of infoBtns) {
              btn.addEventListener("click", async (e) => {
                let id = e.target.parentElement.parentElement.id;
                let dataElem = await (await fetch(apiUrl + id)).json();
                Swal.fire({
                  title: `${dataElem.contactName},${dataElem.contactTitle}`,
                  text: `${dataElem.address?.city},${dataElem.address?.country},${dataElem.address?.street}`,
                  footer: `${dataElem.address?.phone}`,
                });
              });
            }
          });
        });
      });
    }

    let deleteBtns = document.querySelectorAll(".deleteBtn");
    for (let btn of deleteBtns) {
      btn.addEventListener("click", async (e) => {
        let id = e.target.parentElement.parentElement.id;
        // ekrandan silme
        e.target.parentElement.parentElement.remove();
        // apidan silme
        fetch(apiUrl + id, {
          method: "DELETE",
        });
      });
    }
    let infoBtns = document.querySelectorAll(".infoBtn");
    for (let btn of infoBtns) {
      btn.addEventListener("click", async (e) => {
        let id = e.target.parentElement.parentElement.id;
        let dataElem = await (await fetch(apiUrl + id)).json();
        Swal.fire({
          title: `${dataElem.contactName},${dataElem.contactTitle}`,
          text: `${dataElem.address?.city},${dataElem.address?.country},${dataElem.address?.street}`,
          footer: `${dataElem.address?.phone}`,
        });
      });
    }
  });
  addDataBtn.style.display = "block";
  addDataBtn.addEventListener("click", addData);
  function addData() {
    document.querySelector(".inputTable").style.display = "table";
    let companyNameInp = document.querySelector(".companyName-input");
    let contactNameInp = document.querySelector(".contactName-input");
    let companyTitleInp = document.querySelector(".companyTitle-input");
    let cityInp = document.querySelector(".city-input");
    let countryInp = document.querySelector(".country-input");
    let streetInp = document.querySelector(".street-input");
    let postalCodeInp = document.querySelector(".postalCode-input");
    let phoneNumberInp = document.querySelector(".phoneNumber-input");
    let submitBtnInp = document.querySelector(".submitBtn");

    submitBtnInp.addEventListener("click", async (e) => {
      let obj = {
        address: {},
      };
      obj.companyName = companyNameInp.value;
      obj.contactName = contactNameInp.value;
      obj.contactTitle = companyTitleInp.value;
      obj.address.city = cityInp.value;
      obj.address.country = countryInp.value;
      obj.address.street = streetInp.value;
      obj.address.postalCode = postalCodeInp.value;
      obj.address.phone = phoneNumberInp.value;
      let postedData = await (
        await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj),
        })
      ).json();
      tbody.innerHTML += `
      <tr id="${postedData.id}">
          <td>${postedData.companyName}</td>
          <td>${postedData.address?.city}</td>
          <td>${postedData.address?.country}</td>
          <td><button class="infoBtn">Info</button></td>
          <td><button class="deleteBtn">Delete</button></td>
          <td><button class="editBtn">Edit</button></td>

        </tr>
      `;

      companyNameInp.value = "";
      contactNameInp.value = "";
      companyTitleInp.value = "";
      cityInp.value = "";
      countryInp.value = "";
      streetInp.value = "";
      postalCodeInp.value = "";
      phoneNumberInp.value = "";
      let deleteBtns = document.querySelectorAll(".deleteBtn");
      for (let btn of deleteBtns) {
        btn.addEventListener("click", async (e) => {
          let id = e.target.parentElement.parentElement.id;
          // ekrandan silme
          e.target.parentElement.parentElement.remove();
          // apidan silme
          fetch(apiUrl + id, {
            method: "DELETE",
          });
        });
      }
      let editBtns = document.querySelectorAll(".editBtn");
      for (let btn of editBtns) {
        btn.addEventListener("click", async (e) => {
          editBox.style.display = "block";
          editedId = e.target.parentElement.parentElement.id;
          let editedData = await (await fetch(apiUrl + editedId)).json();

          companyNameEdit.value = editedData.companyName;
          contactNameEdit.value = editedData.contactName;
          contactTitleEdit.value = editedData.contactTitle;
          cityEdit.value = editedData.address.city;
          countryEdit.value = editedData.address.country;
          streetEdit.value = editedData.address.street;
          postalCodeEdit.value = editedData.address.postalCode;
          phoneNumberEdit.value = editedData.address.phone;
          let editSubmitBtns = document.querySelector(".editSubmitBtn");
          editSubmitBtns.addEventListener("click", async (e) => {
            let objEdit = {
              address: {},
            };
            objEdit.companyName = companyNameEdit.value;
            objEdit.contactName = contactNameEdit.value;
            objEdit.contactTitle = contactTitleEdit.value;
            objEdit.address.city = cityEdit.value;
            objEdit.address.country = countryEdit.value;
            objEdit.address.street = streetEdit.value;
            objEdit.address.phone = phoneNumberEdit.value;
            objEdit.address.postalCode = postalCodeEdit.value;
            editBox.style.display = "none";
            let editedData = await (
              await fetch(apiUrl + editedId, {
                method: "PATCH",
                body: JSON.stringify(objEdit),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
            ).json();
            tbody.innerHTML = "";
            document.querySelector(".spinner").style.display = "block";
            let data = await (await fetch(apiUrl)).json();
            document.querySelector(".spinner").style.display = "none";

            data.forEach((elem) => {
              tbody.innerHTML += `
                <tr id="${elem.id}">
              <td>${elem.companyName}</td>
              <td>${elem.address?.city}</td>
              <td>${elem.address?.country}</td>
              <td><button class="infoBtn">Info</button></td>
              <td><button class="deleteBtn">Delete</button></td>
              <td><button class="editBtn">Edit</button></td>
            </tr>
                `;
              let deleteBtns = document.querySelectorAll(".deleteBtn");
              for (let btn of deleteBtns) {
                btn.addEventListener("click", async (e) => {
                  let id = e.target.parentElement.parentElement.id;
                  // ekrandan silme
                  e.target.parentElement.parentElement.remove();
                  // apidan silme
                  fetch(apiUrl + id, {
                    method: "DELETE",
                  });
                });
              }
              let infoBtns = document.querySelectorAll(".infoBtn");
              for (let btn of infoBtns) {
                btn.addEventListener("click", async (e) => {
                  let id = e.target.parentElement.parentElement.id;
                  let dataElem = await (await fetch(apiUrl + id)).json();
                  Swal.fire({
                    title: `${dataElem.contactName},${dataElem.contactTitle}`,
                    text: `${dataElem.address?.city},${dataElem.address?.country},${dataElem.address?.street}`,
                    footer: `${dataElem.address?.phone}`,
                  });
                });
              }
            });
          });
        });
      }
      let infoBtns = document.querySelectorAll(".infoBtn");
      for (let btn of infoBtns) {
        btn.addEventListener("click", async (e) => {
          let id = e.target.parentElement.parentElement.id;
          let dataElem = await (await fetch(apiUrl + id)).json();
          Swal.fire({
            title: `${dataElem.contactName},${dataElem.contactTitle}`,
            text: `${dataElem.address?.city},${dataElem.address?.country},${dataElem.address?.street}`,
            footer: `${dataElem.address?.phone}`,
          });
        });
      }
    });
  }
}
getDataBtn.addEventListener("click", getData);
