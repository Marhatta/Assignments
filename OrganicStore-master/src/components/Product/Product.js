import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {addToCart,deleteProduct,reduceQuantity} from '../../store/actions';
import styles from './Product.module.css';
import QuantityCounter from '../quantityCounter/quantityCounter';

class Product extends Component {

    state = {
        addedToCart : false,
        cartItems : {
            title : this.props.title,
            image : this.props.image,
            category :this.props.category,
            price :this.props.price
        }
    }

    render(){
            //Items to be added in cart
            const addToCart = () => {
                this.props.addToCart(this.state.cartItems);
                this.setState({addedToCart:true});
            }
       
            return(
                <div className={styles.card}>
                    <h5>
                        {this.state.cartItems.title}   
                    </h5>
                    <img src={this.state.cartItems.image} className={styles.image} alt='itemimage'/>
                    <h5>Category:{this.state.cartItems.category}</h5>
                    <h6>Price:Rs. {this.state.cartItems.price}</h6>
                    
                    {!this.props.user ? 
                        <div>
                       
                        <Link to={{
                        pathname:'/edit',
                        aboutProps:{
                            id:this.props.id,
                            title:this.state.cartItems.title,
                            price:this.state.cartItems.price,
                            category:this.state.cartItems.category,
                            image:this.state.cartItems.image
                            }
                        }} 
                        className='btn btn-primary fa fa-edit mr-3'
                        > 
                         Edit
                        </Link>
    
                     <button onClick={() => this.props.deleteProduct(this.props.id)} className='fa fa-trash  btn btn-danger'> Delete</button> 
                    </div> : 
                    
                    <div>
                        {this.state.addedToCart ?  <QuantityCounter plus={addToCart} minus={()=>this.props.reduceQuantity(this.state.cartItems)}/> :
                        <button className='btn btn-primary mr-3' onClick={addToCart}>Add to Cart</button>  
                        }
                    </div>
                    }
                   
                </div>
            )
        }
      
    }
  


const mapStateToProps = state => {
    return {
        counter:state.cart.cartCounter, 
        //here cart is the key of the reducer mentioned in index.js
        cartItems:state.cart.cartItems,
    }
} 

const mapDispatchToProps = dispatch => {
    return{
        addToCart : (cartItems) => dispatch(addToCart(cartItems)),
        deleteProduct : (productId) => dispatch(deleteProduct(productId)),
        reduceQuantity : (cartItems) => dispatch(reduceQuantity(cartItems))
    }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);
