import React, {Component} from 'react';
import './social.css'

import Inn from '../../images/in.png';
import Git from '../../images/github.png';
import Fb from '../../images/fb.png';

class Social extends Component{
	render(){
		return <div className="sidebarwidget">
		<div className="Social">
		<a href="https://www.facebook.com/noor.s.sulaiman" target="_blank" > <img  src={Fb} alt="Facebook" title='facebook'/></a>
		<a href="https://www.linkedin.com/in/noor-sulaiman" target="_blank"> <img  src={Inn} alt="Linkedin" title='linkedin' /></a>
		<a href="https://github.com/NoorSulaiman" target="_blank"> <img src={Git}  alt="GitHub" title='github'/></a>
		</div>
		</div>


	}
}

export default Social;