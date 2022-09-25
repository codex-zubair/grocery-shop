import React from 'react';

const Aside = () => {
    return (
        <div>
            <h1>Shopping List</h1>
            <ol>
                <li>Name: Price <span>Delete icon</span></li>
                <li>Name: Price <span>Delete icon</span></li>
                <li>Name: Price <span>Delete icon</span></li>
                <li>Name: Price <span>Delete icon</span></li>
                <li>Name: Price <span>Delete icon</span></li>
                <li>Name: Price <span>Delete icon</span></li>
                <hr />
            </ol>
            <h3>Total: <span>000 Tk</span> </h3>

            <button style={{padding:'6px 20px'}}>Buy Items</button>
          
        </div>
    );
};

export default Aside;