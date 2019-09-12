import React , {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Navbar extends Component  {

    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-dark fixed-top">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link to='/' className="nav-link text-white" ><strong>Organic</strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/cart' className="nav-link fa fa-shopping-cart text-light">
                            <span className='badge badge-danger'>{this.props.counter}</span>
                        </Link>
                    </li>
          
                </ul>
               
             </nav>
    
           
            
    )
    }
}

const mapStateToProps = state => {
    return {
        counter:state.cart.counter //here cart is the key of the reducer mentioned in index.js
    }
}

export default connect(mapStateToProps)(Navbar);


