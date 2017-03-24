import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import SideBar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';

class App extends Component {
	render() {
		return  <Router> 
		<div className='app'>
		<SideBar/>
		<Main/>
		
      </div>
		 </Router>
	}
}

export default App;
