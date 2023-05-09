import React, { useState,useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import HeaderTop from "./components/Header/HeaderTop";
import BasketPage from "./pages/basket/BasketPage";
import Acount from "./pages/acount/Acount";
import SmsVerify from "./pages/SmsVerify/SmsVerify";
import HeaderBotom from "./components/Header/HeaderBotom";
import { StateContext } from "./context/AuthProvider";
import Otpnumber from "./pages/SmsVerify/Otpnumber";
import Login from "./pages/login/Login";
import Register2 from "./pages/Register2/Register2";
import AlertComponenet from "./components/alert/Alert";
import Dropdown from "./components/dropdown/Dropdown";

function App() {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [openReg, setOpenReg] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [nomer, setNomer] = useState("");
  const [ctg, setCtg] = useState([]);
  const acc = JSON.parse(localStorage.getItem("userData"));
  const [accaunt, setAccaunt] = useState(acc);
  const [alertIn, setAlertIn] = useState("");
  const [alertText, setAlertText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    if (accaunt) {
      setAnchorEl(event.currentTarget);
    }
  };
  useEffect(() => {
    console.log(acc)
  }, [acc]);

  return (
    <div className="App">
      <StateContext.Provider
        value={{
          openLogin,
          setOpenLogin,
          open2,
          setOpen2,
          nomer,
          setNomer,
          open,
          setOpen,
          ctg,
          setCtg,
          openReg,
          setOpenReg,
          accaunt,
          setAccaunt,
          alertIn,
          setAlertIn,
          alertText,
          setAlertText,
          openAlert,
          setOpenAlert,
          handleClick,
          anchorEl,
          setAnchorEl,
        }}
      >
        <Dropdown />
        <SmsVerify />
        <Login />
        <Register2 />
        <HeaderTop />
        <HeaderBotom />
        <Otpnumber />
        <AlertComponenet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<BasketPage />} />
          {accaunt ? (
            <Route path="/acount" element={<Acount />} />
          ) : (
            console.log("hello")
          )}
        </Routes>
        <Footer />
      </StateContext.Provider>
    </div>
  );
}

export default App;
