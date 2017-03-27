import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import "./display.css"
import Home from './home/home';
import About from './about/about';
import Projects from './projects/projects';
import Hungry from './hungry/hungry'
import Skills from './skills/skills'

class Display extends Component{
	
	render(){

		return <div className='display'>	
		<Route exact path="/" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/projects" component={Projects}/>
		<Route path="/skills" component={Skills}/>
	    <Route path="/hungry" component={Hungry}/>
		</div>
	}

}


export default Display;