import React,{Component} from 'react';
import {connect} from 'react-redux';
import Joi from '@hapi/joi';

import Text from '../../components/Text/Text';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import {editProduct} from '../../store/actions';
import styles from './EditProduct.module.css';



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

class EditProduct extends Component {

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
         this.props.editProduct(this.props.location.aboutProps.id,newProduct);
        }
     else{
         this.setState({joiError:error.details[0].message});
     }
     
 } 


   componentDidMount = () => {
    //To get the values in the editProduct form
    this.setState({
        name:this.props.location.aboutProps.title,
        category:this.props.location.aboutProps.category,
        price:this.props.location.aboutProps.price,
        url:this.props.location.aboutProps.image
    })
   }

    render(){
        return(
            <div className={styles.edit}>
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
        editProduct:(id,productData)=>dispatch(editProduct(id,productData))
    }
}
export default connect(null,mapDispatchToProps)(EditProduct);

