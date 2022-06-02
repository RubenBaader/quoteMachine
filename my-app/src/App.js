import './App.css';
import React, { Component } from 'react';

/*  */

const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function QuoteGetter(url) {
  return fetch(url)
    .then (response => response.json())
}

async function QuoteSetter(Callback, url) {
  let quoteData = {};
  quoteData = await Callback(url)
  let i = Math.floor(Math.random() * quoteData["quotes"].length)
  return quoteData["quotes"][i];
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      "quote": "hiii",
      "author": "unknown"
    };
    this.handleClick = this.handleClick.bind(this); 
  }
  
  componentDidMount(){
    QuoteSetter(QuoteGetter, URL).then(data => this.setState(data));

/*     // Quick and dirty implementation of unit tests
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
      document.body.appendChild(s); 
    // End unit test */
  };

  handleClick(){
    QuoteSetter(QuoteGetter, URL).then(data => this.setState(data))
  };
  
  render() {
    return (
      <div className="App">
        <div className="App-header" id='quote-box'>
          <p id='text'>
            {this.state.quote}
          </p>
          <p id='author'>
            -- {this.state.author}
          </p>
          <div className='button-box'>
            <button onClick={this.handleClick} id='new-quote' >New Quote</button>
            <a 
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=` + this.state.quote + ` -- ` + this.state.author} 
            target="_blank" rel='noreferrer' id='tweet-quote' >Tweet Quote</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
