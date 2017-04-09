import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import SideBar from '../../components/sidebar/sidebar';
import Display from '../../components/display/display';

const App =() =>{

	return  <Router> 
		     <div className='app'>
		      <SideBar/>
		      <Display/>	
             </div>
	   	    </Router>
}


export default App;
