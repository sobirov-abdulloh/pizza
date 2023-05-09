import React from 'react';
import Basket from '../../components/basket/Basket';
import ForYou from '../../components/for_You/ForYou';

import './BasketPage.css'

const BasketPage = () => {
    return (
        <div className='basket__Page'>
            <Basket />
            <ForYou />
        </div>
    );
}

export default BasketPage;
