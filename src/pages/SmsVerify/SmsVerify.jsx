import * as React from "react";
import { useContext } from "react";
import { StateContext } from "../../context/AuthProvider";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import "./Register.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import { AUTH_API } from "../../constants";

export default function Register() {
  const {
    nomer,
    setNomer,
    setOpen2,
    open,
    setOpen,
    setOpenLogin,
    setAlertText,
    setOpenAlert,
    setAlertIn,
  } = useContext(StateContext);
  const handleChange = (enteredOtp) => setNomer(enteredOtp);

  const handleClose = () => {
    setNomer("");
    setOpen(false);
  };

  const reg = async (e) => {
    e.preventDefault();
    if (nomer.length <= 9) {
      setOpenAlert(true);
      setAlertText("введите номер");
      setAlertIn("error");
    } else {
      setOpen(false);
      await axios
        .post(AUTH_API, {
          method: "step.one",
          params: {
            phone: nomer,
          },
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("nomer", nomer);
          localStorage.setItem("token", res.data?.token);
          setOpen2(true);
        })
        .catch((err) => console.log(err.message));
    }
  };
  const openLogin = () => {
    setOpenLogin(true);
    setOpen(false);
  };

  return (
    <div className="register_body">
      <Dialog
        open={open}
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
              <span>Номер телефона</span>
              <PhoneInput
                // onChange={(e) => setNomer(e.target.value)}
                value={nomer}
                onChange={handleChange}
                style={{ padding: "10px" }}
                country={"uz"}
                onlyCountries={["uz"]}
                type="number"
              />

              <button type="submit">Войти</button>
            </form>
            <DialogContentText id="alert-dialog-slide-description">
              <p style={{ cursor: "pointer" }} onClick={openLogin}>
                login
              </p>
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
