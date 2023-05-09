import React from "react";
import "./Categories.css";
import fire from "../../assets/icon/fire.svg";
import combo from "../../assets/icon/Combo.svg";
import Pizza from "../../assets/icon/Pizza.svg";
import Sushi from "../../assets/icon/Sushi.svg";
import group104 from "../../assets/icon/Group104.svg";
import group105 from "../../assets/icon/Group105.svg";
import snaks from "../../assets/icon/Snacks.svg";
import Drink from "../../assets/icon/Drink.svg";

function Categories() {
  const ctgData = [
    {
      id: 1,
      icon: fire,
      link: "#aksiya",
      text: "Акции",
    },
    {
      id: 2,
      icon: Pizza,
      text: "Пицца",
      link: "#pizza",
    },
    {
      id: 3,
      icon: Sushi,
      link: "#sushi",
      text: "Суши"
    },
    {
      id: 4,
      icon: Drink,
      link: "#napitka",
      text: "Напитки"
    },
    {
      id: 5,
      icon: snaks,
      link: "#zakuska",
      text: "Закуски"
    },
    {
      id: 6,
      icon: combo,
      link: "#kombo",
      text: "Комбо"
    },
    {
      id: 7,
      icon: group104,
      link: "#desert",
      text: "Десерты"
    },
    {
      id: 8,
      icon: group105,
      link: "#sous",
      text: "Соусы"
    },
  ];


  return (
    <div className="categorys">
      {ctgData.map((item) => (
        <a key={item.id} href={item.link}>
          <div  className="ctg">
            <img src={item.icon} alt="" />
            <span>{item.text}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Categories;
