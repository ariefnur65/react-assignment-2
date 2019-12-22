import React, { Component } from 'react';
import './App.css';
import ValidComp from './ValidComp/ValidComp'
import CharComp from './CharComp/CharComp'

class App extends Component{

  state = {
    inputUser : "",
    arrayCharUser : []
  }
 
  inputChangeHandler = (event) =>
  {
    let inputValue = this.state.inputUser;
    inputValue = event.target.value;

    this.setState({inputUser : inputValue})
    
    const arrayOfInput = inputValue.split('');
    this.setState({arrayCharUser: arrayOfInput});
  }

  deleteCharHandler = (charIndex) =>
  {
    const charArray = [...this.state.arrayCharUser];
    charArray.splice(charIndex, 1);
    this.setState({arrayCharUser: charArray});
    const joinedChar = charArray.join('');
    this.setState({inputUser : joinedChar});
  }

  render () {
    //render method always be called each time react needs to render something
    let charComps = null;
    if(this.state.arrayCharUser.length > 0)
    {
      charComps = (
        <div>
          {this.state.arrayCharUser.map((char, index) => {
            return <CharComp
            click = {() => this.deleteCharHandler(index)}
            inchar = {char}
            />
          }
          )}
        </div>
      );
    } 
    return (
    <div className="App">
      <input type="text" onChange= {(event) => this.inputChangeHandler(event)} value ={this.state.inputUser}></input>
      <ValidComp input={this.state.inputUser}/>
      {charComps}
    </div>
  ) 
}
}

export default App;
