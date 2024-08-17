import { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products/").then((res) => {
      setData(res.data);
    }, []);
  });
  return (
    <>
    
      <div className="search-div">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>discontinued</th>
              <th>unitsInStock</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((elem) => elem.name.toLowerCase().includes(search))
              .map((elem) => {
                return (
                  <tr
                    key={uuidv4()}
                    style={{
                      backgroundColor:
                        elem.unitsInStock < 20 ? "#F86153" : "transparent",
                    }}
                  >
                    <td>{elem.id}</td>
                    <td>{elem.name}</td>
                    <td>{elem.unitPrice} $</td>
                    <td>{elem.discontinued}</td>
                    <td>{elem.unitsInStock}</td>
                    <td>
                      <button className="edit-btn" onClick={(e) => {}}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        btnid={elem.id}
                        className="delete-btn"
                        onClick={(e) => {
                          let arr = [...data];
                          arr = arr.filter(
                            (elem) => elem.id != e.target.getAttribute("btnid")
                          );
                          setData(arr);
                          axios.delete(
                            "https://northwind.vercel.app/api/products/" +
                              e.target.getAttribute("btnid")
                          );
                          console.log(arr);
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
    </>
  );
}

export default App;
