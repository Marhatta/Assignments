import {GET_PRODUCT_DATA,ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from '../actions/actionTypes';

const initialState = {
    productData : []
}

export const getProductData = (state = initialState,action) => {
    switch(action.type){
        case GET_PRODUCT_DATA:
            return {...state,productData:action.productData};

        case ADD_PRODUCT:
            alert("Added successfully");
            let products = {...this.state.productData}
            products.push(action.productData);
            return{...state,productData:products};


        case DELETE_PRODUCT:
            return {...state,productData:state.productData.filter(product => product.id !== action.productId)};
       
        case EDIT_PRODUCT:
            let index = state.productData.indexOf(state.productData.find(product => product.id === action.productId));
            let currentState = {...state};
            currentState.productData[index] = action.productData;
            return {...state,currentState};
        default:return {...state};
    }
}
