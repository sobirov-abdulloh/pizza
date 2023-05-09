import React,{useEffect} from "react";
import { useState } from "react";
import "./Button.css";
function Button({ setPul, sizes }) {
  const [activebtn, setactive] = useState("20 cm")
  const [activebtn1, setactive1] = useState("Традиционное");
  const [size, setSize] = useState('')
  useEffect(() => {
    localStorage.setItem("size", size)
  }, [size])

  return (
    <div className=" Button">

      <div className="above_button">
        <button
          value={"Традиционное"}
          className={activebtn1 === "Традиционное" ? "active1" : ""}
          onClick={e => setactive1(e.target.value)}
        >
          Традиционное
        </button>
        <button
          value={" Тонкое"}
          className={activebtn1 === " Тонкое" ? "active1" : ""}
          onClick={e => setactive1(e.target.value)}
        >
          Тонкое
        </button>
      </div>

      <div className="under_button">
        {sizes.map(item => (
          < button
            key={item.size_id}
            value={`${item.size_content} cm`}
            className={activebtn === `${item.size_content} cm` ? "active" : ""}
            onClick={e => { setactive(e.target.value); setSize(item.size_id) }}
          >
            {item.size_content}cm
          </button>))}
      </div>

    </div>
  );
}

export default Button;
