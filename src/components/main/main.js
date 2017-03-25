import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import "./main.css"
import Home from './home/home';
import About from './about/about';
class Main extends Component{
	
	render(){

		return <div className='main'>	
		<Route exact path="/" component={Home}/>
		<Route path="/about" component={About}/>
		</div>
	}

}


export default Main;