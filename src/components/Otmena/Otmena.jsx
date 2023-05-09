import React, { useState } from "react";
import "./Otmena.css";
import Line3 from "../../assets/icon/Line3.png";
import PastIcon from "../../assets/icon/PastIconV.png";
import TepaIcon from "../../assets/icon/TepaIconV.png";
import Ellipse4 from "../../assets/icon/Ellipse4.png";
function Otmena() {
  const [Opendit, setOpenEdit] = useState(false);

  return (
    <div className="Otmena">
      <div className="line">
        <div className="Otmenaflex">
          <div className="ZakasOtmenaflex">
            <div className="Otmenazakas1">
              <p>Заказ</p>
              <h2>
                <p>№130312</p>
                <h2>22.06.21</h2>
              </h2>
            </div>
            <div className="Otmenazakas2">
              <p>Сумма заказа</p>
              <h2>2 324 ₽</h2>
            </div>
            <div className="Otmenazakas3">
              <p>Статус</p>
              <h2>Отмена</h2>
            </div>
            <div className="Otmenazakas4">
              <p>Оплачено</p>
              <h2>Наличкой</h2>
            </div>
          </div>
          <div className="button">
            {Opendit ? (
              <button onClick={() => setOpenEdit(p => !p)}>
                <img src={TepaIcon} alt="" />
              </button>
            ) : (
              <button onClick={() => setOpenEdit(p => !p)}>
                <img src={PastIcon} alt="" />
              </button>
            )}
          </div>{" "}
          <div className="ad">
            <p>Адрес</p>
            <h1>ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#</h1>
          </div>
        </div>
      </div>
      <div className="OfisOtmena">
        <h1>ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#</h1>
        <div className="ofisimg">
          <img src={Ellipse4} alt="" />
        </div>
      </div>
      <div
        className="EditK"
        style={{
          display: Opendit ? "block" : "none"
        }}
      >
        <div className="Line">
          <div className="EditKarta">
            <div className="pizzae">
              <img src={Ellipse4} alt="" />
              <p>Пепперони по-деревенски</p>
            </div>
            <p>Традиционное тесто, 23 см</p>
            <h2>1 товар</h2>
            <span>399 ₽</span>
          </div>
        </div>
        <h1>Повторить заказ</h1>
      </div>
    </div>
  );
}

export default Otmena;
