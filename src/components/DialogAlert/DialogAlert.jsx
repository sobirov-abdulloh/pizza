import React, { useContext, useState } from "react";
import "./DialogAlert.css";
import Alanga from "../../assets/icon/ALanga.png";
import Vektor from "../../assets/icon/Info.png";
import DialogCard from "../DialogCard/DialogCard";
import Button from "../Button/Button";
import axios from "axios";
import { ACTION_API } from "../../constants";
import Button2 from "../Button/Button2";
import { StateContext } from "../../context/AuthProvider";

function DialogAlert({ pro }) {
  const [pul, setPul] = useState(pro.starter);

  const size_id = localStorage.getItem("size");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { setAlertText, setAlertIn, setOpenAlert, accaunt, setOpenLogin } =
    useContext(StateContext);

  const HandleAddBasket = (e) => {
    e.preventDefault();

    const body = {
      method: "AddBasket",
      params: { size_id, product_id: pro.product_id, quantity: 1 },
    };
    const headers = {
      Authorization: `Bearer ${userData?.token}`,
    };
    axios
      .post(ACTION_API, body, { headers })
      .then(
        (res) => console.log(res.data),
        setOpenAlert(true),
        setAlertText("savatga qo'shildi"),
        setAlertIn("success")
      );
  };

  return (
    <div className="Dialog_grid">
      <div className="Dialog_left">
        <h1>new</h1>
        <div className="Cook_Img">
          <img
            src={`https://pizza-project-db.herokuapp.com${pro?.img}`}
            alt=""
          />
        </div>
      </div>
      <div className="Dialog_right">
        <div className="cook_top">
          <div className="cook_top_left">
            <img src={Alanga} alt="" />
            <h2>Product Detail</h2>
          </div>
          <img className="vektor" src={Vektor} alt="" />
        </div>

        <div className="Button">
          {pro.ctg_slug === "pizza" ? (
            <Button sizes={pro.sizes} setPul={setPul} />
          ) : (
            <Button2 sizes={pro.sizes} />
          )}
        </div>
        <div className="pezza_card">
          <h1>Добавьте в {pro.ctg_slug}</h1>
          <div className="card">
            {pro?.ingredients.map((item) => (
              <DialogCard key={item.img_id} {...item} />
            ))}
          </div>
        </div>
        <div className="Account">
          <h1>
            <span>Итого: {pul} ₽</span>
            <p>400 г</p>
          </h1>

          {accaunt ? (
            <button onClick={HandleAddBasket}>Добавить</button>
          ) : (
            <button onClick={() => setOpenLogin(true)}>Добавить</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DialogAlert;
