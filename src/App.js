import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    text: ''
  }

  textChangedHandler = (event) => {
    this.setState({
      textLength: event.target.value.length,
      text: event.target.value
    });
  }

  deleteCharBox = (charIndex) => {
    let newText = this.state.text.slice(0, charIndex)+this.state.text.slice(charIndex+1,this.state.text.length);
    this.setState({
      text: newText
    });
  }

  render() {
    let boxes = null;

    if(this.state.text.length > 0){
      boxes = (
        <div>
          {this.state.text.split("").map((singleChar, index) => {
            return <CharComponent
              click={() => this.deleteCharBox(index)}
              character={singleChar}
              key={index}/>
          })}
        </div>
      );
    }
      
    return (
      <div className="App">
        <input type="text" onChange={this.textChangedHandler} value={this.state.text}></input>
        <p>TextLength:{this.state.text.length}</p>
        <ValidationComponent textLength={this.state.text.length}/>
        {boxes}
      </div>
    );
  }
}

export default App;
