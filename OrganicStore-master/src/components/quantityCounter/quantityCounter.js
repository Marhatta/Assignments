import React,{Fragment,Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../store/actions';


class quantityCounter extends Component  {

    state = {
        quantity:this.props.quantity,
        currentIndex:this.props.currentIndex
    }

    render(){
        console.log(this.state);
        return(
            <Fragment>
                <span className='fa fa-minus btn btn-danger' onClick={this.props.minus}></span>
                <span>{this.state.quantity[this.state.currentIndex]}</span>
                <span className='fa fa-plus btn btn-primary' onClick={this.props.plus}></span>
            </Fragment>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        quantity:state.cart.quantity,
        currentIndex:state.cart.currentIndex
    }
} 

const mapDispatchToProps = dispatch => {
    return{
        addToCart : (cartItems) => dispatch(addToCart(cartItems)),
    }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(quantityCounter);