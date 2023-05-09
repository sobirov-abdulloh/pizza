import React from "react";
import "./DialogCard.css"
function DialogCard({ img, name, price }) {
  return (
    <div className="face">
      <div className="img">
        <img src={`https://pizza-project-db.herokuapp.com${img}`} alt="" />
      </div>
      <h4>{name}   </h4>
      <h4>{price} ₽  </h4>
    </div>
  );
}

export default DialogCard;
