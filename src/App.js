import React, { Component } from 'react';
import './App.css';
import ValidComp from './ValidComp/ValidComp'

class App extends Component{

  state = {
    inputUser : ""
  }
 
  inputChangeHandler = (event) =>
  {
    let inputValue = this.state.inputUser;
    inputValue = event.target.value;

    this.setState({inputUser : inputValue})
    
  }

  render () {
    //render method always be called each time react needs to render something


    return (
    <div className="App">
      <input type="text" onChange= {(event) => this.inputChangeHandler(event)} value ={this.state.inputUser}></input>
      <ValidComp input={this.state.inputUser}/>
    </div>
  ) 
}
}

export default App;
