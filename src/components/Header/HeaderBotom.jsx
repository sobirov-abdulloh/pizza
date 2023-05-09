import React, { useContext, useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import pizz from "../../assets/icon/Group 2.png";
import bag from "../../assets/icon/Shopping bag.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import iks from "../../assets/icon/Union.svg";
import axios from "axios";
import { ACTION_API, CTG_API } from "../../constants";
import { StateContext } from "../../context/AuthProvider";
import TemporaryDrawer from "../HeaderMui/HeaderMui";
import Bsmap from "../Bsmap/Bsmap";

function HeaderBotom() {
  const { ctg, setCtg } = useContext(StateContext);
  const [basket, setBasket] = useState([]);
  const pro = basket.data?.map((item) => item.product);
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [state, setState] = React.useState({
    right: false,
  });

  const headers = {
    Authorization: `Bearer ${userData?.token}`,
  };

  useEffect(() => {
    axios.get(CTG_API).then((res) => setCtg(res.data));
  }, []);

  useEffect(() => {
    axios.get(ACTION_API, { headers }).then((res) => setBasket(res.data));
  }, []);

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 520 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
    </Box>
  );
  const ctgData = [
    {
      id: 1,
      link: "#aksiya",
    },
    {
      id: 2,
      link: "#pizza",
    },
    {
      id: 3,
      link: "#sushi",
    },
    {
      id: 4,
      link: "#napitka",
    },
    {
      id: 5,
      link: "#zakuska",
    },
    {
      id: 6,
      link: "#kombo",
    },
    {
      id: 7,
      link: "#desert",
    },
    {
      id: 8,
      link: "#sous",
    },
  ];
  console.log(basket);

  return (
    <div className="heder_bottom">
      <div className="header_bott">
        <section>
          <Link className="link1" to={"/"}>
            <img className="piz" src={pizz} alt="" />
            <h1>Куда пицца</h1>
          </Link>
        </section>
        <div className="header_center">
          {ctg.map((item) => (
            <p key={item.id}>{item.content}</p>
          ))}
        </div>

        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <TemporaryDrawer /> */}
            <Button className="bag1" onClick={toggleDrawer(anchor, true)}>
              {" "}
              <img src={bag} alt="" />
              <p>{basket?.sum || "0"} ₽</p>
            </Button>
            <div className="te">
              <TemporaryDrawer />
            </div>
            <Drawer anchor={anchor} open={state[anchor]}>
              {list(anchor)}
              <div className="sidebar">
                {/* <TemporaryDrawer /> */}
                <div className="sidebar1">
                  <h1>Ваш заказ</h1>
                  <img onClick={toggleDrawer(anchor, false)} src={iks} alt="" />
                </div>
                {pro ? (
                  basket.data?.map((item) => (
                    <>
                      <div key={item.id} className="pizza__Box2">
                        <Bsmap {...item} basket={basket} />
                      </div>
                    </>
                  ))
                ) : (
                  <h1 className="no_money">No money no Honey </h1>
                )}

                <div className="button1">
                  <h1 className="left01">Итого: {basket?.sum} ₽</h1>
                  <Link
                    className="right02"
                    onClick={toggleDrawer(anchor, false)}
                    to={"/basket"}
                  >
                    Оформить заказ
                  </Link>
                </div>
              </div>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default HeaderBotom;
