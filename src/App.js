import React, { Component } from 'react';
import propic from '../src/images/profile.jpg';
import './App.css';

class App extends Component {
  render() {
    return <div id="sidebar">
      <p><a href=""><img className='logo' src={propic} alt="noor"/></a></p> 
      <h1 id="blogtitle">Noor Sulaiman</h1>
      <p className='tagline'>I do Cook I do Code</p>
      <div ClassName='menu'>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/projects" activeClassName="active">Projects</Link></li>
          <li><Link to="/Skills" activeClassName="active">Skills</Link></li>
        </ul>
      </div>
    </div>
  }
}

export default App;
