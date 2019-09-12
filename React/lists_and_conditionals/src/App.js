import React ,{Component} from 'react';
import './App.css';
import Validation from './Validation/Validation'; 
import Char from './Char/Char';

class App extends Component {

  state = ({
    text:'',
    textLength:0
  })

  //set value of string and its length
  SetLength = (event) =>{
     this.setState(
       {
         textLength : event.target.value.length,
         text:event.target.value
      })
  }

  //Delete a character from string
  DeleteChar = (index) => {
    let text = this.state.text.split('');
    let currentLength =  this.state.textLength;
    text.splice(index,1);
    text=text.join(''); //join string back so that can be set to state
    this.setState({text:text,textLength:currentLength - 1 })
  }

  render(){

    let showCharacters;
    showCharacters = (
      <div>
        {
          this.state.text.split('').map((c,index) => {
            return <Char key={index} c={c} click={() => this.DeleteChar(index)}/>
          })
        }
      </div>
    );

    return (
      <div className="App">
        <input
          type='text'
          value={this.state.text}
          onChange={(event) => this.SetLength(event)}
        />
        <p>Length is : {this.state.textLength}</p>
        <Validation length={this.state.textLength}/>
        {showCharacters}
      </div>
    );
  }
}

export default App;
