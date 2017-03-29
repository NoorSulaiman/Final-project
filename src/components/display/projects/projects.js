import React, { Component } from 'react';

import './projects.css'
import GitHub from './github.js'
import Favorite from './favorite.js'



class Projects extends Component{
	render(){
		return <div className='projects'>
		<div id='pagetitle'>My Projects</div>
		<div className='apicalls'>		
		  <GitHub/>	
		  <td className='td'></td>
		  <Favorite/>
		  </div>
		</div>
	}
}

export default Projects  ;