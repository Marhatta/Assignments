import {ADD_TO_CART,REDUCE_QUANTITY} from './actionTypes';

export const addToCart = (cartItems) => {
    
    return {
        type:ADD_TO_CART,
        cartItems,
    }

}

export const reduceQuantity = (cartItems) => {
    return{
        type:REDUCE_QUANTITY,
        cartItems
    }
}