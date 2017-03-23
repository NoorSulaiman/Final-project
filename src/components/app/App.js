import React, { Component } from 'react';
import './App.css';


import SideBar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';


class App extends Component {
	render() {
		return <div className='app'>
		<SideBar/>
		<Main/>
		</div>
	}
}

export default App;
