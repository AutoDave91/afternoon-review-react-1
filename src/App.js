import React, {Component} from 'react';
import './App.css';
import LongestString from "./LongestString"



class App extends Component {
  constructor(){
    super()
    this.state={
      
    }
  }
  render(){
    return (
      <div className="App">
        <LongestString/>

      </div>
    );
  }
 
}

export default App;
