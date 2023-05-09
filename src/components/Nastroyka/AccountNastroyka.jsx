import React, { useState, useContext, useEffect } from "react";
import "./AccountNastroyka.css";
import { StateContext } from "../../context/AuthProvider";
import Edit from "../../assets/icon/Edit.png";
import { USER_API } from "../../constants";
import axios from "axios";
function AccountNastroyka() {
  const { accaunt, setAccaunt } = useContext(StateContext);
  const [Opendit, setOpenEdit] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userBtn = async () => {
    await axios
      .get(USER_API, {
        headers: {
          Authorization: `Bearer ${userData?.token}`,
        },
      })
      .then((res) => {
        setAccaunt(res.data);
      })
      .catch((err) => console.log(err));
  };
  const [userName, setUserName] = useState(accaunt.user_info?.user_name);
  const [userNomer, setUserNomer] = useState(accaunt.user_info?.user_phone);
  console.log(accaunt);
  useEffect(() => {
    userBtn();
  }, []);

  console.log(userNomer);
  return (
    <div className="Nastroyka">
      <div
        style={{
          display: Opendit ? "none" : "block",
        }}
      >
        <div className="accounqt">
          <h1>Личные данные</h1>
          <div className="Edit">
            <button onClick={() => setOpenEdit((p) => !p)}>
              <img src={Edit} alt="" />
              <p>Изменить</p>
            </button>
          </div>
        </div>
        <div className="Ruyhat">
          <div className="name">
            <p>Имя*</p>
            <h2>{userName || accaunt.user_info?.user_name}</h2>
          </div>
          <div className="telefon">
            <p>Номер телефона*</p>
            <h2>+{userNomer || accaunt.user_info?.user_phone}</h2>
          </div>

          <div className="data">
         
          </div>
        </div>
      </div>
      <div
        className="Ruyhat2"
        style={{
          display: Opendit ? "block" : "none",
        }}
      >
        <h1>Изменение личных данных</h1>
        <div className="flex2">
          <div className="name2">
            <p>Имя*</p>
            <input
              defaultValue={accaunt.user_info?.user_name}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
            />
          </div>
          <div className="telefon2">
            <p>Номер телефона*</p>
            <input
              defaultValue={accaunt.user_info?.user_phone}
              onChange={(e) => setUserNomer(e.target.value)}
              type="tel"
              maxLength={13}
            />
          </div>
        </div>
        <button onClick={() => setOpenEdit((p) => !p)}>
          Сохранить изменения
        </button>
      </div>
    </div>
  );
}

export default AccountNastroyka;
