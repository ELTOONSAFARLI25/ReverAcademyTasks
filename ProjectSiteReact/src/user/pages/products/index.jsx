import React, { useEffect, useState } from "react";
import productCss from "../products/Products.module.css";
//icons------------
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
//-----------------
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
function ProductsUser() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/products/").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <title>Products | Capital Shop</title>
      <div className={productCss.container}>
        <div className={productCss.category_bar}></div>
        <div className={productCss.cards}>
          {products &&
            products.map((elem) => {
              return (
                <div className={productCss.card} key={uuidv4()}>
                  <div className={productCss.card_img}>
                    <img src={elem.image} alt="" />
                    <div className={productCss.card_buttons}>
                      <button>
                        <AddShoppingCartIcon />
                      </button>
                      <button>
                        {" "}
                        <FavoriteBorderIcon />
                      </button>
                      <button>
                        <ZoomInIcon />
                      </button>
                    </div>
                  </div>
                  <div className={productCss.card_details}>
                    <h3>{elem.title.slice(0, 25)}</h3>
                    <p>
                      ${elem.price} | {elem.rating.rate}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ProductsUser;
