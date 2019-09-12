import React,{Component,Fragment} from 'react';
import Text from '../Text/Text';
import SubmitButton from '../SubmitButton/SubmitButton';

class Form extends Component{

    state = {

          name:'',
          type:'',
          price:'',
          errors:{
              productName:'',
              productType:'',
              productPrice:''
          },
          allFilled:false
          

      }

      handleTextChange = (event) => {
        
        let key = event.target.name;
        let errors = this.state.errors;
        let value = event.target.value;
        switch(event.target.name){
            case 'name' : errors.productName = value === '' ? 'Required' : ''
                break;
            case 'type' : errors.productType = value === '' ? 'Required' : ''
                       
                break;
            case 'price' :errors.productPrice = (value === '' ||  isNaN(value))  ? 'Number is expected' : ''
                break;
        }
        this.setState({[key]:value,errors:errors,allFilled:true});
      }
    
     onSubmitHandler = (event) => {
         event.preventDefault();
         let formValid = true;
         let allFilled = this.state.allFilled;
         let errors=this.state.errors;
         if(errors.productName.length>0 && formValid){
             formValid=false;
         }
         if(errors.productType.length>0 && formValid){
             formValid=false;
         }
         if(errors.productPrice.length>0 && formValid){
             formValid=false;
         }

         if(formValid && allFilled){
             alert('COngrats....Form is valid');
         }
         else{
             alert('Please check your form...Not Valid');
         }
     } 
 
    render(){
        
        return(
            <Fragment>              
                <Text type='text' placeholder='Product Name' name='name' changed={(event)=>this.handleTextChange(event)} value={this.state.productName}/>
                <p>{this.state.errors.productName}</p>
                <Text type='text' placeholder='Product Type' name='type' changed={(event)=>this.handleTextChange(event)} value={this.state.productType}/>
                <p>{this.state.errors.productType}</p>
                <Text type='text' placeholder='Price' name='price' changed={(event)=>this.handleTextChange(event)} value={this.state.Price}/> 
                <p>{this.state.errors.productPrice}</p>
                <SubmitButton type='submit' clicked={(event) => this.onSubmitHandler(event)}>Submit</SubmitButton>
            </Fragment>
            
        );
    }
}

export default Form;