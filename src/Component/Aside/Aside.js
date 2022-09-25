import React from 'react';
import AsideItems from '../AsideItems/AsideItems';

const Aside = () => {


    let itemList = JSON.parse(localStorage.getItem('craftItems'));

    // making it object to get the names. 
    const objectArrayList =  Object.entries(itemList);

    
    
    


    return (
        <div>
            <h1>Shopping List</h1>
            <ol>
            {objectArrayList.map(item =><AsideItems name = {item[0]} price= {item[1]}></AsideItems>)}
            
            </ol>
            <hr />

            <h3>Total: <span>000 Tk</span> </h3>

            <button style={{ padding: '6px 20px' }}>Buy Items</button>

        </div>
    );
};

export default Aside;