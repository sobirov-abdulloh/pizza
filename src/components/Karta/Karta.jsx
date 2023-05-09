import React, { useState } from "react";
import "./Karta.css";
import Line from "../../assets/icon/Line.png";
import PastIcon from "../../assets/icon/PastIconV.png";
import TepaIcon from "../../assets/icon/TepaIconV.png";
import Ellipse1 from "../../assets/icon/Ellipse1.png";
import Ellipse2 from "../../assets/icon/Ellipse2.png";
import Ellipse3 from "../../assets/icon/Ellipse3.png";
function Karta() {
  const [Opendit, setOpenEdit] = useState(false);

  return (
    <div className="Karta">
      <div className="line">
        <div className="Historyflex">
          <div className="Zakasflex">
            <div className="zakas1">
              <p>Заказ</p>
              <h2>
                <p>№130312</p>
                <h2>22.06.21</h2>
              </h2>
            </div>
            <div className="zakas2">
              <p>Сумма заказа</p>
              <h2>399 ₽</h2>
            </div>
            <div className="zakas3">
              <p>Статус</p>
              <h2>Обрабатывается</h2>
            </div>
            <div className="zakas4">
              <p>Оплачено</p>
              <h2>Картой</h2>
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
      <div className="Ofis">
        <h1>ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#</h1>
        <div className="">
          <img src={Ellipse1} alt="" />
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
              <img src={Ellipse1} alt="" />
              <p>Пепперони по-деревенски</p>
            </div>
            <p>Традиционное тесто, 23 см</p>
            <h2>1 товар</h2>
            <span>399 ₽</span>
          </div>
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

export default Karta;
