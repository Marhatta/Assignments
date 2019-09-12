import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';

import emptyCart from '../../emptyCart.png';
import CartItem from '../../components/CartItem/CartItem';
class Cart extends Component {

    state={
        cartItems:[]
    }

    render(){
       
        return(
            <Fragment>
            {this.props.cartItems.length  ? 
                <table className='table table-striped mt-5'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                    {this.props.cartItems.map((item,index)=>{
                        return  <CartItem item={item} quantity={this.props.quantity} index={index} />
                    })}
                </table>:
                <img src={emptyCart}  alt='emptycart'/>
            }   

            </Fragment>
        ) 
    }
    
}

const mapStateToProps = state => {
    return {
        cartItems:state.cart.cartItems,
        quantity:state.cart.quantity,
        productData:state.productData.productData
    }
}

export default connect(mapStateToProps)(Cart);