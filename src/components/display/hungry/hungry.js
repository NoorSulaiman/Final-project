import React, { Component } from 'react';

import './hungry.css'
import Youtube from './youtube.js'

class Hungry extends Component{

	render(){

		return <div className='hungry'>
		<div id='pagetitle'> Hungry ?</div>
		<Youtube/>
		</div>
	}
}

export default Hungry  ;