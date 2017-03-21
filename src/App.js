import React, { Component } from 'react';
import propic from '../src/images/profile.jpg';
import './App.css';

class App extends Component {
  render() {
    return <div id="sidebar">
      <p><a href=""><img className='logo' src={propic} alt="noor"/></a></p> 
      <h1 id="blogtitle">Noor Sulaiman</h1>
    </div>
  }
}

export default App;
