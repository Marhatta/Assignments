import {ADD_TO_CART,DELETE_FROM_CART,REDUCE_QUANTITY} from '../actions/actionTypes';

const initialState = {
    
    cartItems:[],
    quantity:new Array(100).fill(1),
    currentIndex:0,
    counter:0
}


export const addToCart = (state=initialState,action) => {
  
    switch( action.type ){
            
           case ADD_TO_CART:
            //check if cartItems already has that item
            //if yes then increase the quantity 
            const itemInCart = state.cartItems.find(item => item.title === action.cartItems.title);
            if(itemInCart)
            {
                let index = state.cartItems.indexOf(itemInCart);
                state.currentIndex = index;
                state.quantity[index] += 1;
                return {...state};
            }
            //otherwise add the item and increment the counter
                state.cartItems.push(action.cartItems);
                let index = state.cartItems.indexOf(action.cartItems);
                state.currentIndex = index;
                state.counter = state.counter + 1;
                return {...state};
            
            case DELETE_FROM_CART :
                let cartItems = [...state.cartItems];
                cartItems = cartItems.filter(item=>item.title !== action.productData.title);
                //Reduce the counter value
                if(state.cartItems.length>0){
                    state.counter -= 1;
                }
                state.cartItems=cartItems;
                return {...state};
            
            case REDUCE_QUANTITY :
                let productData = [...state.cartItems];
                //find the index of the product in product array
                let indexOfProduct = state.cartItems.indexOf(action.cartItems);
                state.currentIndex = indexOfProduct;

                //reduce quantity of product
                if(state.quantity[indexOfProduct] === 1){
                    //delete product from cart
                    productData = productData.filter(product => product.title !== action.cartItems.title);
                    state.cartItems = productData;
                    state.counter -= 1;
                    return {...state};
                }
                state.quantity[indexOfProduct] -= 1;
                state.cartItems = productData;
                return {...state};

            default:return {...state};

    }
}
