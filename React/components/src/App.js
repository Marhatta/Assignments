import React,{Component} from 'react';
import Functional from './Functional/Functional';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Functional title='Welcome to ReactJS'/> 
      </div>
    );
  }
 
}

export default App;
