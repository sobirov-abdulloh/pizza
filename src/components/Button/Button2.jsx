import React, { useState, useEffect } from "react";
import "./Button.css";

function Button2({ sizes }) {
  const [width, setWidth] = useState("");

  useEffect(() => {
    localStorage.setItem("size", width);
  }, [width]);

  return (
    <div>
      {sizes.map((item) => (
        <button
          className="sushi2"
          key={item.size_id}
          value={`${item.size_content} cm`}
          onClick={(e) => {
            setWidth(item.size_id);
          }}
        >
          {item.size_content}
        </button>
      ))}
    </div>
  );
}

export default Button2;
