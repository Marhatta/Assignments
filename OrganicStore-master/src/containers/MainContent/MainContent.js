import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchProductData} from '../../store/actions';
import Products from '../Products/Products';
import Search from '../../components/Search/Search';
import Category from '../../components/Category/Category';



class MainContent extends Component {
    state={
        prod:[],
        loading:true,
        user:true
    }
    

    //dispatch action as soon as component mounts
    componentDidMount=()=>{
        this.props.fetchProductData();
    }

  

    render(){
        let products = [...this.props.data.productData];
        //initally display all products
        let categories=['All','vegetables','fruits'];
        //filter products on basis of category
        const filterCategory = (category) => {
            products = products.filter((product) => product.category === category)
            this.setState({
                prod:[...products]
            });
            if(category==='All'){
                this.setState({
                    prod:[...this.props.data.productData]
                })
            }
        }
    

        //Search Products
        const onchangeSearchFieldHandler = (event) => {
            products = products.filter(product=>product.title.toLowerCase().includes(event.target.value.toLowerCase()));
            this.setState({
                prod:[...products]
            });
        }

        //switch between user and admin
        const userChange = () => {
            this.state.user ? this.setState({user:false}) : this.setState({user:true})
        }

        return(
             <div className='container-fluid'>
                {categories.map(category => {
                    return <Category name={category} click={()=>filterCategory(category)} />
                })}
    
                    <Search changed={(event)=>onchangeSearchFieldHandler(event)} />
                    <button onClick={()=>userChange()} class='btn btn-danger'>Switch to {this.state.user ? 'Admin' : 'User'}</button>
                    
                    {this.state.user ? null :
                        <Link to='/addProduct' className="btn btn-danger m-1" > <span className='fa fa-plus'></span>Add New Product</Link>
                    }
                    
                    {this.state.prod.length === 0 ? <Products products = {this.props.data.productData} user={this.state.user} />:
                    <Products products = {this.state.prod} user={this.state.user} /> }
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        data:state.productData
    }
} 

const mapDispatchToProps = dispatch => {
    return{
        fetchProductData : () => dispatch(fetchProductData())

    }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContent);