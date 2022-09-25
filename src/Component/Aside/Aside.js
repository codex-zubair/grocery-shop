import React from 'react';
import AsideItems from '../AsideItems/AsideItems';
import { clearAll, totalSumByReducer } from '../Utilities/calculation';





const Aside = () => {


    // TODO NEED TO LOAD Automatic
    // let itemList = setInterval(()=> JSON.parse(localStorage.getItem('craftItems'),1000))

    let itemList = JSON.parse(localStorage.getItem('craftItems'));




    // !IF NO ITEM IN LOCAL STORAGE THAN IT WILL NOT WORK 
    if (itemList) {
        // making it object to get the names. 
        const objectArrayList = Object.entries(itemList);

        // Getting all item price List.
        const allItemPriceList = objectArrayList.map(price => price[1])



        const total = totalSumByReducer(allItemPriceList);




        return (
            <div>
                <h1>Shopping List</h1>
                <ol>
                    {objectArrayList.map(item => <AsideItems key={item[0]} name={item[0]} price={item[1]}></AsideItems>)}

                </ol>
                <hr />

                <h3>Total: <span>{total} Tk</span> </h3>

                <button onClick={clearAll} style={{ padding: '6px 20px' }}>Clear ALL</button>

            </div>
        );
    }

};

export default Aside;