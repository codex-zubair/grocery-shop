import React from 'react';

const AsideItems = (props) => {
    return (
    
            <li><span>{props.name}: </span><span>{props.price}</span> <span>->: Dlt icon</span></li>
          
    );
};

export default AsideItems;