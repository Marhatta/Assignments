import React,{Component} from 'react';
import {connect} from 'react-redux';
import Joi from '@hapi/joi';

import {addProduct} from '../../store/actions/Products';
import Text from '../../components/Text/Text';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import styles from './ProductForm.module.css';


const schema = {
    name:Joi.string().min(3).required(),
    category:Joi.string().required(),
    price:Joi.number().min(1).required(),
    url:Joi.string().regex(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/).required()
    .error(errors => {
        return {
          message: "Please enter a valid url"
        };
    })
}

class Form extends Component{

    state = {

          name:'',
          category:'vegetables',
          price:'',
          url:'',
          joiError:''
        }
    
    handleTextChange = (event) =>{
        let value = event.target.value;
        switch(event.target.name){
            case 'name' : this.setState({name:value});
            break;
            case 'price': this.setState({price:value});
            break;
            case 'url':this.setState({url:value});
            break;
            default:break;
        }
    }

    handleOptionChange = (event) => {
        this.setState({category:event.target.value})
    }

     onSubmitHandler = (event) => {
         event.preventDefault();
        const {name,category,price,url} = this.state;
        const {error} = Joi.validate({name,category,price,url},schema);
         if(!error){
            const newProduct = {
                category:this.state.category,
                imageUrl:this.state.url,
                price:this.state.price,
                title:this.state.name

             }
             this.setState({joiError:''});
             //dispatch an action to add new Product
            this.props.addProduct(newProduct);
         }
         else{
             this.setState({joiError:error.details[0].message});
         }
         
     } 
 
    render(){
        
        return(
            <div className={styles.form}>
                <Text type='text' placeholder='Product Name' name='name' changed={(event)=>this.handleTextChange(event)} value={this.state.name}/>
                 <label>Choose Category</label>
                <select onChange={(event)=>this.handleOptionChange(event)} value={this.state.category}>
                    <option value='vegetables'>vegetables</option>
                    <option value='fruits'>fruits</option>
                </select>
                <Text type='text' placeholder='Price' name='price' changed={(event)=>this.handleTextChange(event)} value={this.state.price}/> 
                <Text type='text' placeholder='Image Url' name='url' changed={(event)=>this.handleTextChange(event)} value={this.state.url}/> 
                <SubmitButton type='submit' clicked={(event) => this.onSubmitHandler(event)}>Submit</SubmitButton>
                <p className='text-danger'>{this.state.joiError}</p>
            </div>               
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct : (productData) => dispatch(addProduct(productData))
    }
}   

export default connect(null,mapDispatchToProps)(Form);