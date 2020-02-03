import React from 'react';
import "./profile.css"


import propic from '../../../images/profile1.jpg';

const Profile = () => {

	return <div className="sidebarwidget">
		<div className="profile">
			<div className="imgProfileContainer">
				<img src={propic} alt="noor" />
			</div>
			<h1>Noor Sulaiman</h1>
			<p className='tagline'>I cook & I code</p>
		</div>
	</div>
}

export default Profile;