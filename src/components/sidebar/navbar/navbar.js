import React from 'react';
import pdf from './resume.pdf'
import {Link} from 'react-router-dom';
import './navbar.css'


const NavBar = ()=>{

    return <div className="sidebarwidget">
        <nav id='navbar'>
    <ul>
    <li><Link to="/">About</Link></li>
    <li><a href={pdf} target='_blank'>Resume</a></li>
    <li><Link to="/projects">Portfolio</Link></li>
    <li><Link to="/skills">Skills</Link></li>
    <li><Link to="/hungry">Hungry?</Link></li>  
    </ul>
    </nav>
    </div>

}
		

export default NavBar;