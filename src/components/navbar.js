import React, { Component } from 'react';

class NavBar extends Component {

	render() {

		return <div>
		<nav className='vertical'>
        <ul>
           <li><a onClick={() => history.push('Home') }>Home</a></li>
           <li><a onClick={() => history.push('About') }>About</a></li>
           <li><a onClick={() => history.push('Projects') }>Projects</a></li>
           <li><a onClick={() => history.push('Skills') }>Skills</a></li>
           <li><a onClick={() => history.push('Hungry') }>Hungry?</a></li>     
        </ul>
        </nav>
      </div>
	}
}

export default NavBar;