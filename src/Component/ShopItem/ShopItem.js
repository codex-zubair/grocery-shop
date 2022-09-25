import React from 'react';
import { ShopDataLoad } from '../Utilites/ShopDataLoad';


const ShopItem = () => {

    ShopDataLoad();

    return (
        <div>
            <h1>Item Name</h1>
        </div>
    );
};

export {ShopItem};