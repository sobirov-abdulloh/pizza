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

export default function Login() {
  const {
    openLogin,
    setOpenLogin,
    setOpen,
    setAlertText,
    setAlertIn,
    setOpenAlert,
  } = useContext(StateContext);
  const [inp1, setInp1] = React.useState(true);
  const [tell, setTell] = useState("");
  const [paroll, setParoll] = useState("");

  const handleClose = () => {
    setOpenLogin(false);
  };

  const log = async (e) => {
    e.preventDefault();
    const postAuthData = {
      method: "log",
      params: {
        phone: `998${tell}`,
        password: paroll,
      },
    };
    axios
      .post(AUTH_API, postAuthData)
      .then((res) => {
        if (res.data?.Error) {
          setAlertText(res.data?.Error);
          setAlertIn("error");
          setOpenAlert(true);
        } else {
          setAlertText("вы успешно вошли");
          setAlertIn("success");
          setOpenAlert(true);
          localStorage.setItem("userData", JSON.stringify(res.data));
          setOpenLogin(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const openSms = () => {
    setOpenLogin(false);
    setOpen(true);
  };
  return (
    <div className="register_body">
      {/* <h1 onClick={handleClickOpen}>Войти в аккаунт</h1> */}
      <Dialog
        open={openLogin}
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
            <form action="" onSubmit={log}>
              <section className="inp_eye">
                <input
                  maxLength={9}
                  onChange={(e) => setTell(e.target.value)}
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
            <DialogContentText id="alert-dialog-slide-description">
              <p style={{ cursor: "pointer" }} onClick={openSms}>
                register
              </p>
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
