import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
class NavBar extends Component {

	render() {

		return <div className="sidebarwidget">
		<nav className='navbar'>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/skills">Skills</Link></li>
    <li><Link to="/hungry">Hungry?</Link></li>  
    </ul>
    </nav>
    </div>
  }
}

export default NavBar;