import React from 'react'
import ApplePay from '../ApplePay/ApplePay'
import ButtonNext from '../ButtonNext/ButtonNext'
import Karta from '../Karta/Karta'
import Naxt from '../Naxt/Naxt'
import Otmena from '../Otmena/Otmena'
import "./Zakas.css"
function Zakas() {
  return (
    <div className="History">
      <Karta />
      <Naxt />
      <ApplePay />
      <Otmena />
      <ButtonNext />
    </div>
  );
}

export default Zakas