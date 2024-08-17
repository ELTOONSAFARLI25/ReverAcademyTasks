import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
function App() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  useState(() => {
    axios("https://669f8faab132e2c136fe57d0.mockapi.io/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  useEffect(() => {
    axios("https://669f8faab132e2c136fe57d0.mockapi.io/products/").then(
      (res) => {
        setProducts(res.data);
      }
    );
  }, []);
  return (
    <>
      <div className="log-in-container">
        <h1>Log in</h1>
        <form action="" className="log-in-form">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmailLogin(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
          />
          <span
            style={{ color: "red", fontSize: "14px" }}
            className="alert-logIN none"
          >
            Invalid email or password!
          </span>
          <div className="log-in-buttons">
            <button
              className="log-in-btn"
              onClick={(e) => {
                e.preventDefault();
                let find = false;
                users.forEach((elem) => {
                  if (
                    emailLogin == elem.email &&
                    passwordLogin == elem.password
                  ) {
                    find = true;
                  }
                });
                if (find) {
                  console.log("welcome");
                  document
                    .querySelector(".log-in-container")
                    .classList.add("none");
                  document.querySelector(".alert-logIN").classList.add("none");
                  document
                    .querySelector(".nav-buttons")
                    .classList.remove("none");
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Welcome!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                } else {
                  console.log("invalid email or password");
                  document
                    .querySelector(".alert-logIN")
                    .classList.remove("none");
                }
              }}
            >
              Log in
            </button>
            <button className="register-switch">Register</button>
          </div>
        </form>
      </div>
      <div className="nav-buttons none">
        <button>Users</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(".products").classList.toggle("none");
            document.querySelector(".add-product").classList.add("none");
          }}
        >
          Products
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (
              !document.querySelector(".products").classList.contains("none")
            ) {
              document.querySelector(".add-product").classList.toggle("none");
            }
          }}
        >
          Add
        </button>
      </div>
      <div className="main-container">
        <div className="products none">
          <table className="product-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>in Stock</th>
                <th>Sale</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((elem) => {
                console.log(elem);
                return (
                  <tr
                    key={uuidv4()}
                    style={{
                      backgroundColor:
                        elem.unitsInStock < 20 ? "#F86153" : "transparent",
                    }}
                  >
                    <td>{elem.name}</td>
                    <td>{elem.unitPrice}</td>
                    <td>{elem.unitsInStock}</td>
                    <td>{elem.sale}%</td>
                    <td>
                      <button className="edit-btn">Edit</button>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        btnID={elem.id}
                        onClick={(e) => {
                          console.log(e.target.getAttribute("btnID"));
                          axios.delete(
                            "https://669f8faab132e2c136fe57d0.mockapi.io/products/" +
                              e.target.getAttribute("btnID")
                          );

                          setProducts(
                            products.filter(
                              (elem) =>
                                elem.id != e.target.getAttribute("btnID")
                            )
                          );
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="add-product none">
          <h2>Add Product</h2>
          <form action="" className="add-product-form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Price by $" />
            <input type="number" placeholder="Sale" />
            <button
              className="add-product-btn"
              onClick={(e) => {
                e.preventDefault();
                console.log("posted");
              }}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
