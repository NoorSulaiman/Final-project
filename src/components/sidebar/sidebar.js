import React, { Component } from 'react';
import './sidebar.css'

import Profile from '../../components/sidebar/profile/profile';
import NavBar from '../../components/sidebar/navbar/navbar';
import Social from '../../components/sidebar/social/social';

class SideBar extends Component {
  render() {
    return <div className="sidebar">
    <Profile/>
    <NavBar/> 
    <Social/>
    </div>
  }
}

export default SideBar;
