import React, { Component } from 'react';


import propic from '../../images/profile.jpg';

class Profile extends Component{

	render(){

		return <div className="profile">
		<p><a href=""><img className='logo' src={propic} alt="noor" hight='200' width='200'/></a></p> 
    <h1 id="blogtitle">Noor Sulaiman</h1>
    <p className='tagline'>I do Cook I do Code</p>
    </div>
	}
}

export default Profile;