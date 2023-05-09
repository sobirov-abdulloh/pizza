import React, { useState } from "react";
import "../Header/Header.css";
import iks from "../../assets/icon/Union.svg";
import axios from "axios";
import { ACTION_API } from "../../constants";
function Bsmap({ basket_id, product }) {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [son, setSon] = useState(1);
  const minusBtn = () => {
    if (son > 1) {
      setSon(son - 1);
    } else setSon((son = 1));
  };
  const HandeleDelete = () => {
    const headers = {
      Authorization: `Bearer ${userData?.token}`,
    };
    axios.post(
      ACTION_API,
      {
        method: "del.basket",
        params: {
          basket_id: basket_id,
        },
      },
      { headers }
    );
  };
  return (
    <>
      <img className="del" onClick={HandeleDelete} src={iks} alt="" />
      <div className="pizza__Img2">
        <img
          src={`https://pizza-project-db.herokuapp.com${product.products.img}`}
          alt="img"
        />
        <div className="pizza__Title2">
          <h3>{product.products.name}</h3>

          <div className="pizza__Count2">
            <div className="pizza__Sum2">
              <button onClick={minusBtn}>-</button>
              <button>{son}</button>
              <button onClick={() => setSon(son + 1)}>+</button>
            </div>
            <span>{product.price * son} ₽</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bsmap;
