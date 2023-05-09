import * as React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { StateContext } from "../../context/AuthProvider";
import { useContext } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import "./Register.css";
import OtpInput from "react18-input-otp";
import { AUTH_API } from "../../constants";
import axios from "axios";
import Time from "../../components/Time/Time";
export default function Otpnumber() {
  const {
    open2,
    setOpen2,
    nomer,
    setOpen,
    setOpenReg,
    setAlertText,
    setOpenAlert,
    setAlertIn,
  } = useContext(StateContext);
  const handleChange = (enteredOtp) => setOtp(enteredOtp);
  const [otp, setOtp] = useState("");
  const handleClose = () => {
    setOtp("");
    setOpen2(false);
  };

  const enterOtpHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    // setOpen2(false);

    await axios
      .post(AUTH_API, {
        method: "step.two",
        params: {
          otp: otp,
          token: token,
        },
      })
      .then((res) => {
        console.log(res.data);

        if (res.data?.Error) {
          setOpenAlert(true);
          setAlertText(res.data?.Error);
          setAlertIn("error");
          return;
        }
        if (res.data?.is_registered) alert("bu raqam oldin royxatdan otgan");
        else {
          setOpen2(false);
          setOpenReg(true);
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="otp">
      <Dialog
        open={open2}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="register"
        fullWidth={true}
        maxWidth="md"
        style={{ borderRadius: "24px" }}
      >
        <div className="input_body">
          <h1>Код из смс</h1>
          <DialogContent>
            <p>На номер {nomer}</p>
            <form onSubmit={enterOtpHandler}>
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={5}
                separator={<span>-</span>}
                separateAfter={1}
                inputStyle="inputStyle"
              />
              <button type="submit">Войти</button>
            </form>
            <DialogContentText
              style={{ width: "100%" }}
              id="alert-dialog-slide-description"
            >
              <span>Отправить код ещё раз через :</span>
              <Time setOpen2={setOpen2} setOpen={setOpen} />
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
