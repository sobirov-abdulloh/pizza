import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Group123 from "../../assets/icon/Group123.png";
import "./HeaderMui.css";
import pizz from "../../assets/icon/Group 2.png";
import { Link } from "react-router-dom";
import union from "../../assets/icon/Union.png";
import Header from "../Header/HeaderTop";

import locat from "../../assets/icon/Group 1.png";
import inst from "../../assets/icon/insta.svg";
import fes from "../../assets/icon/Subtract.svg";
import tel from "../../assets/icon/Group 55.svg";
import { useContext } from "react";
import per from "../../assets/icon/Group 108.png";
import { StateContext } from "../../context/AuthProvider";

export default function TemporaryDrawer() {
  const { setOpen } = useContext(StateContext);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <Divider />
     
    </Box>
  );

  return (
    <div className="M">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="btn" onClick={toggleDrawer(anchor, true)}>
            <img src={Group123} />{" "}
          </Button>
          <Drawer anchor={anchor} open={state[anchor]}>
            {list(anchor)}
            <Header />
            <div className="DBC">
              <div className="DB">
                <section>
                  <Link className="link1" to={"/"}>
                    <img className="piz" src={pizz} alt="" />
                    <h1>Куда пицца</h1>
                  </Link>
                </section>
                <img onClick={toggleDrawer(anchor, false)} src={union} alt="" />
              </div>
              <div className="DC">
                <div className="">
                  <div className="account">
                    <section>
                      <img src={per} alt="" />
                      <h1
                        style={{ cursor: "pointer" }}
                        onClick={() => setOpen(true)}
                      >
                        Войти в аккаунт
                      </h1>
                    </section>
                  </div>
                  <div className="c">
                    <p>Акции</p>
                    <p>О компании</p>
                    <p>Пользовательское соглашение</p>
                    <p>Условия гарантии</p>
                    <p>Ресторан</p>
                    <p>Контакты</p>
                    <p>Поддержка</p>
                    <p>Отследить заказ</p>
                  </div>
                </div>
                <div className="foot4 foot5">
                  <div className="f1">
                    <img src={tel} alt="" />
                    <p>+7 (926) 223-10-11</p>
                  </div>
                  <div className="f2">
                    <img src={locat} alt="" />
                    <p> Москва, ул. Юных Ленинцев, д.99</p>
                  </div>
                  <div className="section1">
                    <div className="f3">
                      <img src={fes} alt="" />
                      <p className="f3"> Facebok</p>
                    </div>
                    <div className="f4">
                      <img src={inst} alt="" />

                      <p> Instagram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
