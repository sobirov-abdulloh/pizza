import React, { useState } from "react";
import "./ApplePay.css";
import Line2 from "../../assets/icon/Line2.png";
import PastIcon from "../../assets/icon/PastIconV.png";
import TepaIcon from "../../assets/icon/TepaIconV.png";
import Ellipse2 from "../../assets/icon/Ellipse2.png";
function ApplePay() {
  const [Opendit, setOpenEdit] = useState(false);

  return (
    <div className="ApplePay">
      <div className="line">
        <div className="ApplePayflex">
          <div className="Appleflex">
            <div className="Azakas1">
              <p>Заказ</p>
              <h2>
                <p>№130312</p>
                <h2>22.06.21</h2>
              </h2>
            </div>
            <div className="Azakas2">
              <p>Сумма заказа</p>
              <h2>2 324 ₽</h2>
            </div>
            <div className="Azakas3">
              <p>Статус</p>
              <h2>Выполнен</h2>
            </div>
            <div className="Azakas4">
              <p>Оплачено</p>
              <h2>ApplePay</h2>
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
      <div className="AOfis">
        <h1>ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#</h1>
        <div className="ofisimg">
          <img src={Ellipse2} alt="" />
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
        </div>
        <h1>Повторить заказ</h1>
      </div>
    </div>
  );
}

export default ApplePay;
