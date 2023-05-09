import React from "react";
import log from "../../assets/icon/Group 1.png";
import lef from "../../assets/icon/Left_Arrow_4_.svg";
import per from "../../assets/icon/Group 108.png";
import "./Header.css";


import { StateContext } from "../../context/AuthProvider";
import { useContext } from "react";

function Header() {
  const { setOpen, accaunt, handleClick } = useContext(StateContext);

  return (
    <div className="header">
      <div className="header_top">
        <div className="header_right">
          <section>
            <img src={log} alt="" />
            <p className="m">Москва</p>
            <img className="left_icon" src={lef} alt="" />
          </section>
          <p className="pp">Проверить адрес</p>
          <p>Среднее время доставки*: 00:24:19</p>
        </div>
        <div className="header_left">
          <p className="pppp">Время работы : с 11:00 до 23:00</p>

          <section onClick={handleClick}>
            <img style={{ marginRight: "10px" }} src={per} alt="" />
            {accaunt ? (
              <h1>Аккаунт</h1>
            ) : (
              <h1
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={() => setOpen(true)}
              >
                Войти в аккаунт
              </h1>
            )}
          </section>
        </div>
      </div>
      {/* <hr />  */}
    </div>
  );
}

export default Header;
