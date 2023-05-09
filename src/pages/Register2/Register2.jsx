import * as React from "react";
import { useContext } from "react";
import { useState } from "react";
import { StateContext } from "../../context/AuthProvider";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import axios from "axios";
import { AUTH_API } from "../../constants";
import eye from "../../assets/icon/eye.svg";
import eye_off from "../../assets/icon/eye-off.svg";

export default function Register2() {
  const { openReg, setOpenReg, nomer, setOpenLogin } = useContext(StateContext);
  const [inp1, setInp1] = React.useState(true);

  const [name, setName] = useState("");

  const [paroll, setParoll] = useState("");


  const handleClose = () => {
    setOpenReg(false);
  };



  const reg = async (e) => {
    e.preventDefault();
    const postAuthData = {
      method: "reg",
      params: {
        phone: nomer,
        name: name,
        password: paroll,
      },
    };
    axios
      .post(AUTH_API, postAuthData)
      .then((res) => {
        if (res.data?.Error) {
          alert(res.data?.Error);
          return;
        }
        localStorage.setItem(
          "userData",
          JSON.stringify({ token: res.data?.token })
        );
        console.log(res.data);
        setOpenReg(false);

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register_body">
      <Dialog
        open={openReg}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="register"
        fullWidth={true}
        maxWidth="md"
        style={{ borderRadius: "24px" }}
      >
        <div className="input_body">
          <h1>Вход в аккаунт</h1>
          <DialogContent>
            <p>Сможете быстро оформлять заказы, использовать бонусы</p>
            <form action="" onSubmit={reg}>
              <section className="inp_eye">
                <input
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  required
                  type="text"
                  placeholder="Имя"
                />
              </section>
              <section className="inp_eye">

                <input
                  defaultValue={nomer}
                  // onChange={handelRegisterUser}
                  name="phone"
                  required
                  type="tel"
                  placeholder="Тел"
                />
              </section>
              <section className="inp_eye">
                <input
                  onChange={(e) => setParoll(e.target.value)}
                  maxLength={15}
                  name="password"
                  required
                  type={inp1 ? "password" : "text"}
                  placeholder="Пароль"
                />
                {inp1 ? (
                  <img src={eye} onClick={() => setInp1(!inp1)} alt="" />
                ) : (
                  <img src={eye_off} onClick={() => setInp1(!inp1)} alt="" />
                )}
              </section>
              <button type="submit">Войти</button>
            </form>
            <DialogContentText style={{cursor:"pointer"}} id="alert-dialog-slide-description">
              <p>login</p>
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
