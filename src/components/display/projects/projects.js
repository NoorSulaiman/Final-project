import React, { Component } from 'react';

import './projects.css'
import GitHub from './github.js'




class Projects extends Component{




	render(){

		return <div className='projects'>
		<div id='projectpagetitle'>
		<h1> My Projects </h1>
		</div>
		<GitHub/>
		
		</div>
	}
}

export default Projects  ;