import axios from 'axios';
import {GET_PRODUCT_DATA,ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT,DELETE_FROM_CART} from './actionTypes';
import {Redirect} from 'react-router'
;
//async action to fetch product categories
export const fetchProductData = () => {
    return dispatch => {
        axios.get(' http://localhost:3000/api/products')
            .then(response => {
                //Response holds the products array
                dispatch(getProductData(response.data))
            })
            .catch(error=>{
                console.log(error,'Oops ! Cannot fetch data');
            })
    }
}


export const getProductData = productData => {
    return {
        type:GET_PRODUCT_DATA,
        productData
    }
} 


//Add a new Product
//POST
export const addProduct = (productData) => {
    return dispatch => {
        axios.post('http://localhost:3000/api/products',productData)
            .then(response => {
                //Response holds the added product
                dispatch(addProductData(response.data));
            })
            .catch(error=>{
                console.log(error,'Data could not be added');
            })
    }
}

export const addProductData = productData => {
    return {
        type:ADD_PRODUCT,
        productData
    }
}


//Edit an existing Product
//PUT
export const editProduct = (productId,productData) => {
    

    return dispatch => {
        axios.put('http://localhost:3000/api/products/'+productId,productData)
            .then(response => {
                //Response holds the products array
                dispatch(edit(response.data,productId));
                alert('Saved successfully');
            })
            .catch(error=>{
                console.log(error,'Data could not be loaded');
            })
    }

}
export const edit = (productData,productId) => {
    return {
        type:EDIT_PRODUCT,
        productId,
        productData
    }
}


//delete a product
//DELETE
export const deleteProduct = productId => {
    return dispatch => {
    if(window.confirm("Are you sure you want to delete this product ?")){
        axios.delete('http://localhost:3000/api/products/'+productId)
            .then(response => {
                //Response holds the products array
                dispatch(del(productId));
                //dispatch action to delete from cart if item is present in the cart
                dispatch(deleteFromCart(response.data))
            })
            .catch(error=>{
                console.error('Data could not be deleted');
            })
        }
    }
}

export const del = productId => {
    return {
        type:DELETE_PRODUCT,
        productId
    }
}

export const deleteFromCart = (productData) => {
    return{
        type:DELETE_FROM_CART,
        productData
    }
}