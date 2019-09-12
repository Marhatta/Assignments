import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Navbar from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import './App.css';
import MainContent from './containers/MainContent/MainContent';
import ProductForm from './containers/ProductForm/ProductForm';
import Cart from './containers/Cart/Cart';
import Home from './containers/Home/Home';
import { DominoSpinner } from "react-spinners-kit";

import EditProduct from './containers/EditProduct/EditProduct';


class App extends Component{

  state = {
    loading:true
  }

  componentDidMount = () => {
      this.setState({loading:false})
  }

  render(){
    return (
      <div>
        {this.state.loading ? 
          <div className='spinner'>
            <DominoSpinner
            size={200}
            color="red"
            loading={this.state.loading}
            />
          </div> : 
            <div className="App">
            <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path='/addProduct' component={ProductForm} />
              <Route path='/edit' component={EditProduct} />
              <Route path='/cart' component={Cart} />
              <Route path='/mainContent' exact component={MainContent} />
              <Route path='/' exact component={Home}/>
            </Switch>
            <Footer />
           </BrowserRouter>
      </div>}
      </div>
    );
  }
  
}

export default App;
