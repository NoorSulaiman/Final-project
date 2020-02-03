import React, { Component } from 'react';

import './hungry.css';
import Youtube from './youtube.js';

class Hungry extends Component {
	render() {
		return (
			<div className="hungry">
				<div className="pagetitle">
					<h3> Hungry ?</h3>
				</div>
				<Youtube />
			</div>
		);
	}
}

export default Hungry;
