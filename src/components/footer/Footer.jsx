import React from "react";
import pizza from "../../assets/icon/Group 2.png";
import locat from "../../assets/icon/Group 1.png";
import inst from "../../assets/icon/insta.svg";
import fes from "../../assets/icon/Subtract.svg";
import tel from "../../assets/icon/Group 55.svg";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="foot1">
        <img src={pizza} alt="" />
        <h1>Куда пицца</h1>
      </div>
      <div className="foot2">
        <h1>Куда пицца</h1>
        <p>О компании</p>
        <p>Пользовательское соглашение</p>
        <p>Условия гарантии</p>
      </div>
      <div className="foot3">
        <h1>Помощь</h1>
        <p>Ресторан</p>
        <p>Контакты</p>
        <p>Поддержка</p>
        <p>Отследить заказ</p>
      </div>
      <div className="foot4">
        <h1>Контакты</h1>

        <div className="f1">
          <img src={tel} alt="" />
          <p>+7 (926) 223-10-11</p>
        </div>
        <div className="f2">
          <img src={locat} alt="" />
          <p> Москва, ул. Юных Ленинцев, д.99</p>
        </div>
        <div className="section">
          <div className="f3">
            <img src={fes} alt="" />
            <p> Facebok</p>
          </div>
          <div className="f4" >

          <img src={inst} alt="" />
          <p > Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
