import React, { Component } from 'react';

import './skills.css';
import Data from './data.js';

class Skills extends Component {
	render() {
		return (
			<div className="skills">
				<div className="pagetitle">
					{' '}
					<h3>Skills</h3>
				</div>

				<Data />
			</div>
		);
	}
}

export default Skills;
