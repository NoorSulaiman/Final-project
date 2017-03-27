import React, { Component } from 'react';

import './projects.css'
import GitHub from './github.js'




class Projects extends Component{




	render(){

		return <div className='projects'>
		<div id='projectpagetitle'>My Projects</div>
		<GitHub/>
		
		</div>
	}
}

export default Projects  ;