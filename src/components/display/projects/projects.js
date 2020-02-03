import React, { Component } from 'react';
import Favorite from './favorite.js';
import './projects.css';

class Projects extends Component {
	render() {
		return (
			<div className="projects">
				<div className="pagetitle">
					<h3>My Portfolio</h3>
				</div>
				<Favorite />
			</div>
		);
	}
}

export default Projects;
