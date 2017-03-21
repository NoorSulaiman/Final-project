import React, { Component } from 'react';



import './App.css';
import propic from '../src/images/profile.jpg';
import NavBar from '../src/components/navbar';

class App extends Component {
  render() {
    return <div id="sidebar">
      <p><a href=""><img className='logo' src={propic} alt="noor"/></a></p> 
      <h1 id="blogtitle">Noor Sulaiman</h1>
      <p className='tagline'>I do Cook I do Code</p>
      <NavBar/>
    </div>
  }
}

export default App;
