import React, { Component } from 'react';
import './App.css'
import Product from './components/Product/Product';
import Auxillary from './hoc/Auxillary/Auxillary'

class App extends Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our dukaan!</h1>
        </header>
        <Product />
      </div>
      
    );
  }
}

export default App;
