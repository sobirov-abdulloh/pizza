import React from 'react'
import "./Stoks.css"


function Stoks({ image, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className='Stoks1'>
            <h3>{title}</h3>
        </div>
    )
}

export default Stoks