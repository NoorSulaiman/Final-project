import React, { Component } from 'react';

import Profile from '../../components/profile/profile';
import NavBar from '../../components/navbar/navbar';
import Social from '../../components/social/social';

class SideBar extends Component {
  render() {
    return <div id="sidebar">
    <Profile/>
    <NavBar/> 
    <Social/>
    </div>

  }
}

export default SideBar;
