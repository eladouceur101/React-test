import React, { Component } from 'react';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onFooterClick = event => {
    console.log('you click the footer.....why??');
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer text="Hello Chaps!" onFooterClick={this.onFooterClick} />
      </div>
    );
  }
}

export default App;
