import React from 'react';
import "./profile.css"


import propic from '../../../images/profile2.JPG';

const Profile = ()=>{

	return <div className="sidebarwidget">
		<div className="profile">
		<img src={propic} alt="noor"/>
		<h1>Noor Sulaiman</h1>
		<p className='tagline'>I cook & I code</p>
		</div>
		</div>
	}

export default Profile;