import React from 'react';

const CartItem = props => {
    
    return(
            
            <tr>
            <td>{props.item.title}</td>
            <td>{props.item.price}</td>
            <td>{props.item.category}</td>
            <td>{props.quantity[props.index]}</td>
            </tr>
        
        
    )
}

export default CartItem;