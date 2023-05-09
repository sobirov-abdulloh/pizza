import React, { useState, useEffect } from "react";
import Categories from "../../components/categories/Categories";
import Products from "../../components/Products/Products";
import Stoks from "../../components/Stocks/Stoks";
import Data from "../../data/data";
import "./Home.css";
import axios from "axios";
import { PRODUCT_API } from "../../constants";
function Home() {
  useEffect(() => {
    axios.get(PRODUCT_API).then((res) => setPro(res.data));
  }, []);
  // const [fi, setfi] = useState();
  // console.log(axios.get(PRODUCT_API));
  const [pro, setPro] = useState([]);
  const filtredStoks = Data.filter((item) => item.category === "Stocks");
  const filterdPizza = pro.filter((item) => item.ctg_slug === "pizza");
  const filterdSushi = pro.filter((item) => item.ctg_slug === "sushi");
  const filterdNapitki = pro.filter((item) => item.ctg_slug === "napitki");
  const filterdZakuski = pro.filter((item) => item.ctg_slug === "zakuski");
  const filterdKombo = pro.filter((item) => item.ctg_slug === "kombo");
  const filterdDeserti = pro.filter((item) => item.ctg_slug === "deserti");
  const filterdSousi = pro.filter((item) => item.ctg_slug === "sousi");

  return (
    <div className="home">
      <Categories />
      <div id="aksiya" className="stoks">
        {filtredStoks.map((item) => (
          <Stoks key={item.id} {...item} />
        ))}
      </div>
      <h1 id="pizza">Pizza</h1>
      <div className="Products">
        {filterdPizza.map((item, index) => (
          <Products key={index} {...item} pro={item} />
        ))}
      </div>
      <h1 id="sushi">Sushi</h1>
      <div className="Products">
        {filterdSushi.map((item, index) => (
          <Products key={index} {...item} pro={item} />
        ))}
      </div>
      <h1>Napitki</h1>
      <div className="Products">
        {filterdNapitki.map((item, index) => (
          <Products key={index} {...item} pro={item} />
        ))}
      </div>
      <h1>Zakuski</h1>
      <div className="Products">
        {filterdZakuski.map((item, index) => (
          <Products key={index} {...item} pro={item} />
        ))}
      </div>
      <h1>kombo</h1>
      <div className="Products">
        {filterdKombo.map((item, index) => (
          <Products key={index} {...item} pro={item} />
        ))}
      </div>
      <h1>deserti</h1>
      <div className="Products">
        {filterdDeserti.map((item, index) => (
          <Products key={index} {...item} pro={item} />
        ))}
      </div>
      <h1>Sousi</h1>
      <div className="Products">
        {filterdSousi.map((item, index) => (
          <Products key={index} {...item} pro={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
