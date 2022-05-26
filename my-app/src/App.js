import './App.css';
import React, { Component } from 'react';

// first step: fetch data for quotes
// second step: store data in a constant
// third step: add state and extract relevant data point to that state
// fourth step: display the quotes from state

function QuoteGetter() {
  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then (response => response.json())
    // .then(data => data)
}
console.log(QuoteGetter)

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      "quote": "hiii",
      "author": ""
    }
  }
  

  // let myQuotes = {"hello":"world"};
  // console.log("look here", myQuotes);
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <p>
            This is an app. {this.state.quote}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
