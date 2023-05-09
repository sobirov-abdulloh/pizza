import React, { useEffect, useState } from "react";
import "./Basket.css";
import { ACTION_API } from "../../constants";
import axios from "axios";
import "../Header/Header.css";
import Bsmap2 from "../Bsmap/Bsmap2";

const Basket = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const headers = {
    Authorization: `Bearer ${userData?.token}`,
  };
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios.get(ACTION_API, { headers }).then((res) => setBasket(res.data));
  }, []);
  const pro = basket.data?.map((item) => item.product);
  console.log(basket);
  return (
    <div className="cont">
      <div className="heder_bott">
        <div className="header_bot">
          <div className="sidebar">
            {pro ? (
              basket.data?.map((item) => (
                <div className="pizza__Box2">
                  <div className="pizza__Img2">
                    <Bsmap2 {...item} basket={basket} />
                  </div>
                </div>
              ))
            ) : (
              <h1 className="no_money">No money no Honey </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
