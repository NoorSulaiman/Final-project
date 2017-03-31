import React, { Component } from 'react';

import './skills.css'
import Data from './data.js'
class Skills extends Component{

	render(){

		return <div className='skills'>
		<div id='pagetitle'>My skills</div>
		
		<Data/>
		
		</div>
	}
}

export default Skills  ;