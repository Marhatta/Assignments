import React,{Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {

  state=({
    name:'vishal'
    
  })

  userInputChanged = (event) => {
      this.setState({name:event.target.value});
  }

  render(){

    return (
      <div className="App">
        <UserInput value={this.state.name} change={(event) => this.userInputChanged(event)}/>
        <UserOutput name={this.state.name} />
      </div>
    );
  }
}

export default App;
