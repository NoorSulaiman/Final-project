import React, { Component } from 'react';
import Favorite from './favorite.js'
import './projects.css'



class Projects extends Component{
	render(){
		return <div className='projects'>
		<div id='pagetitle'>My Portfolio</div>		
		  <Favorite/>
		</div>
	}
}

export default Projects  ;