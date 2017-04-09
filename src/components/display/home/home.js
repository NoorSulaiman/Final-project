import React from 'react';
import './home.css'

import logo from '../../../logo.svg';

const Home = ()=>{

	return<div className='home'>
		   <div id='pagetitle'>Home</div>
		    <h1> Welcome to my personal web app </h1>
		    <h3>This project has been built with React</h3>
		   <div className='logo'>
		     <img src={logo} className="App-logo" alt="logo" />
		   </div>
		   </div>

}

		

export default Home;