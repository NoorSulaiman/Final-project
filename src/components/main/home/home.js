import React, { Component } from 'react';
import './home.css'

import logo from '../../../logo.svg';
import arrow from '../../../images/arrow.png';

class Home extends Component{

	render(){

		return<div className='home'>
		 <h1> Welcome to my portfolio web app </h1>
		 <h3>This website has been built with React</h3>
		 <img src={logo} className="App-logo" alt="logo" />
		 <h4> To know more about me please navigate through the app using the sidebar navigations</h4>
		<img src={arrow} className='Arrow' alt='arrow'/>
		 </div>
		}
		}
	



export default Home;