import React, { Component } from 'react';


import './App.css';
import propic from '../src/images/profile.jpg';
import NavBar from '../src/components/navbar';
import Social from '../src/components/social';


class App extends Component {
  render() {
    return <div id="sidebar">

    <p><a href=""><img className='logo' src={propic} alt="noor" hight='200' width='200'/></a></p> 
    <h1 id="blogtitle">Noor Sulaiman</h1>
    <p className='tagline'>I do Cook I do Code</p>
    <NavBar/> 
    <Social/>
    </div>

  }
}

export default App;
