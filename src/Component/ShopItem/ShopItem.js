import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from '../Card/Card';



const ShopItem = () => {

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



    


    // Mapping Items because is's a Array list and sending to card to display the item...
    return items.map(items=> <Card key={items.id} items = {items}></Card>)
};

export {ShopItem};