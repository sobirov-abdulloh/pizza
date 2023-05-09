import React, { useState, useContext } from "react";
import "./AccountParol.css";
import axios from "axios";
import Edit from "../../assets/icon/Edit.png";
import eye from "../../assets/icon/eye.svg";
import eye_off from "../../assets/icon/eye-off.svg";
import { StateContext } from "../../context/AuthProvider";

import { USER_API } from "../../constants";
function AccountParol() {
  const { setAlertText, setAlertIn, setOpenAlert } = useContext(StateContext);

  const [OpenEdit1, setOpenEdit1] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const [inp1, setInp1] = React.useState(true);
  const [inp2, setInp2] = React.useState(true);
  const [inp3, setInp3] = React.useState(true);
  const [color1, setColor1] = useState("#f0f0f0");
  const [color2, setColor2] = useState("#f0f0f0");
  const [color3, setColor3] = useState("#f0f0f0");

  const editPassword = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (password1 !== password3) {
      setAlertText("пароли не софпадают");
      setAlertIn("error");
      setColor1("red");
      setColor2("red");
      setOpenAlert(true);
    } else if (password1.length < 8) {
      setColor1("red");
      setColor2("red");
      setAlertIn("error");
      setAlertText("парол долженбыть больше");
      setOpenAlert(true);
    } else if (password1.length >= 8) {
      setColor1("#f0f0f0");
      setColor2("#f0f0f0");
      const postAuthData = {
        method: "user_change_pass",
        params: {
          old: password2,
          new: password1,
        },
      };
      const headers = {
        Authorization: `Bearer ${userData?.token}`,
      };
      axios
        .post(USER_API, postAuthData, { headers })
        .then((res) => {
          if (res.data?.Error) {
            console.log(res.data?.Error)
            setAlertIn("error");
            setOpenAlert(true);
            setAlertText(res.data?.Error);
            setColor3("red");
            return;
          }
          setOpenEdit1((p) => !p);
          console.log(res.data);
          setAlertIn("success");
          setAlertText("пароль поменяли");
          setOpenAlert(true);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="Parol">
      <div className="Parol12">
        <div
          style={{
            display: OpenEdit1 ? "none" : "block",
          }}
        >
          <div className="Parol1">
            <section>
              <h1>Пароль</h1>
            </section>
            <div className="ParolEdit">
              <button onClick={() => setOpenEdit1((p) => !p)}>
                <img src={Edit} alt="" />
                <p>Изменить</p>
              </button>
            </div>
          </div>
        </div>
        <div
          className="Parol2"
          style={{
            display: OpenEdit1 ? "block" : "none",
          }}
        >
          <h1>Изменить пароль</h1>
          <div className="ParolInp">
            <div className="input_parol">
              <p>Старый пароль*</p>
              <section className="inp_eye" style={{ border: `1px solid ${color3}` }}>
                <input
                  required
                  maxLength={15}
                  onChange={(e) => setPassword2(e.target.value)}
                  type={inp1 ? "password" : "text"}
                />
                {inp1 ? (
                  <img src={eye} onClick={() => setInp1(!inp1)} alt="" />
                ) : (
                  <img src={eye_off} onClick={() => setInp1(!inp1)} alt="" />
                )}
              </section>
            </div>
            <div className="input_parol">
              <p>Новый пароль*</p>
              <section className="inp_eye" style={{ border: `1px solid ${color1}` }}>
                <input
                  required
                  maxLength={15}
                  onChange={(e) => setPassword1(e.target.value)}
                  type={inp2 ? "password" : "text"}
                />
                {inp2 ? (
                  <img src={eye} onClick={() => setInp2(!inp2)} alt="" />
                ) : (
                  <img src={eye_off} onClick={() => setInp2(!inp2)} alt="" />
                )}
              </section>
            </div>
            <div className="input_parol">
              <p>Подтвердите пароль*</p>
              <section className="inp_eye" style={{ border: `1px solid ${color2}` }}>
                <input
                  type={inp3 ? "password" : "text"}
                  required
                  maxLength={15}
                  onChange={(e) => setPassword3(e.target.value)}
                />{" "}
                {inp3 ? (
                  <img src={eye} onClick={() => setInp3(!inp3)} alt="" />
                ) : (
                  <img src={eye_off} onClick={() => setInp3(!inp3)} alt="" />
                )}
              </section>
            </div>
          </div>

          <button onClick={editPassword}>Сохранить изменения</button>
        </div>
      </div>

      <div className="Padpiska">
        <h1>Подписки</h1>
        <div className="inp">
          <input type="checkbox" />
          <p>Получать предложения и акции</p>
        </div>
      </div>
    </div>
  );
}

export default AccountParol;
