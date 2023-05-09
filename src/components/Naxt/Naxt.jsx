import React, { useState } from "react";
import "./Naxt.css";
import Line1 from "../../assets/icon/Line1.png";
import PastIcon from "../../assets/icon/PastIconV.png";
import TepaIcon from "../../assets/icon/TepaIconV.png";
import Ellipse2 from "../../assets/icon/Ellipse2.png";
import Ellipse3 from "../../assets/icon/Ellipse3.png";
function Naxt() {
  const [Opendit, setOpenEdit] = useState(false);

  return (
    <div className="Naxt">
      <div className="line">
        <div className="Naxtflex">
          <div className="ZakasNaxtflex">
            <div className="Naxtzakas1">
              <p>Заказ</p>
              <h2>
                <p>№130312</p>
                <h2>22.06.21</h2>
              </h2>
            </div>
            <div className="Naxtzakas2">
              <p>Сумма заказа</p>
              <h2>1 252 ₽</h2>
            </div>
            <div className="Naxtzakas3">
              <p>Статус</p>
              <h2>Едет к вам (в 15:13)</h2>
            </div>
            <div className="Naxtzakas4">
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
          </div>
          <div className="ad">
            <p>Адрес</p>
            <h1>ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#</h1>
          </div>
        </div>
      </div>
      <div className="OfisNaxt">
        <h1>ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#</h1>
        <div className="ofisimg">
          <img src={Ellipse2} alt="" />
          <img src={Ellipse3} alt="" />
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
              <img src={Ellipse2} alt="" />
              <p>Пепперони по-деревенски</p>
            </div>
            <p>Традиционное тесто, 23 см</p>
            <h2>1 товар</h2>
            <span>399 ₽</span>
          </div>
          <div className="EditKarta">
            <div className="pizzae">
              <img src={Ellipse3} alt="" />
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

export default Naxt;
