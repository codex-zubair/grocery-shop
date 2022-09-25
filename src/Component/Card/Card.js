import React from 'react';
import './Card.css';

const Card = (props) => {

    // Destructuring The Props
    const { name, price } = props.items;




    // !Start Shopping Item....
    const addShoppingItem = () => {



        // TODO Auto Reloading.
        window.location.reload();

        //  NEED TO CALL ASIDE Loader Here


        //Trying to call APP
        // <App></App>

        // Now Taking CraftItem Object and setup properties and values.
        const addItem = () => {



            //("Add Item");
            // !Getting The Item List
            const itemsList = JSON.parse(localStorage.getItem('craftItems'));


            // !Before adding Item Checking is that item Already Added or not.
            // !IF Item Exit
            if (name in itemsList) {
                //("name Is available in Item List");

                //("Getting Item value")
                const previousPrice = itemsList[name];

                //("adding item New Value")
                itemsList[name] = parseFloat(price) + parseFloat(previousPrice);
                // !Now Storing Object Value Inside CraftItems.


                //("storing Object");
                localStorage.setItem('craftItems', JSON.stringify(itemsList));


            }

            else {
                // "Name Is not Available!"

                // "adding Item In List"
                itemsList[name] = parseFloat(price);
                // !Now Storing Object Value Inside CraftItems.
                //    "storing Object"
                localStorage.setItem('craftItems', JSON.stringify(itemsList));


            }






        }




        // Craft Item Checking Start...
        //! Lets Check Craft Items Exist or not. 
        let CraftItems = localStorage.getItem('craftItems');

        //! IF Exist
        if (CraftItems) {
            // if Exit i'll call a function To add Item
            //("Craft Exist");
            addItem(CraftItems);


        }

        else {

            //("Not Exist! Creating ONE!");
            CraftItems = {};

            // !Now Storing Object Value Inside CraftItems.
            //("storing Object");
            localStorage.setItem('craftItems', JSON.stringify(CraftItems));
            addItem(CraftItems);
        }
        // Craft Item Checking End...













        // localStorage.setItem('CraftItems',)




        // //! Checking in our local Storage already item exist or not...
        // const craftItemPrice = localStorage.getItem(`${name}`);
        // // !If value Exist
        // if (craftItemPrice) {
        //     //("Exist!")
        //     let newPrice = parseFloat(craftItemPrice) + parseFloat(price);
        //     localStorage.setItem(`${name}`, newPrice)
        // }

        // else {
        //     //("Not exist!")
        //     localStorage.setItem(`${name}`, price)
        // }


        // localStorage.setItem("CraftItems",JSON.stringify(CraftItems))

    }

    // !End Shopping Item....



    return (
        <div className='Shopping-Card'>
            <h1>{name}</h1>
            <h2>{price} Tk</h2>
            <button  onClick={() => addShoppingItem(name, price)} style={{ marginBottom: '1.5rem' }}>Add Item</button>
        </div>
    );
};

export { Card };