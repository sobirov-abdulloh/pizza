import React from 'react'
import AlertDialog from '../ProductDetail/ProductDetail'
import "./Products.css"
import axios from 'axios'

function Products({ name, short_desc, img, pro,starter }) {
    return (
        <div className='Product'>
            <div>
                <img src={`https://pizza-project-db.herokuapp.com${img}`} alt="" />
                <div className="text">
                    <h2>{name}</h2>
                    <p>{short_desc}</p>
                    <div className="send1">
                        <AlertDialog pro={pro} />
                        <p>от {starter} ₽
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products