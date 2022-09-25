import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ShopItem } from '../ShopItem/ShopItem';



const ShopDataLoad = () => {
    
    // Item Store State.
    const [items , setItems] = useState([]);
    
    // Loading Data From Shop
    const loadShop = async ()=> {
        const response = await fetch('store.json');
        const ShopItemList = await response.json();
        setItems(ShopItemList);
    }  

    useEffect(()=> {
        loadShop();

    },[])
    // Sending Data into Shop Item Component.
    return ( items.map(items =><ShopItem items = {items}></ShopItem>)
    );
};

export  {ShopDataLoad};