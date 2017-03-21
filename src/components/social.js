import React, {Component} from 'react';

import Inn from '../images/in.png';
import Git from '../images/github.png';
import Fb from '../images/fb.png';

class Social extends Component{
	render(){
		return <div className="sidebarwidget">
		<div className="icons">
		<a href="https://www.facebook.com/noor.s.sulaiman" target="_blank"> <img src={Fb} alt="Facebook" hight='36' width='36'/></a>
		<a href="https://www.linkedin.com/in/noor-sulaiman" target="_blank"> <img src={Inn} alt="Linkedin" hight='46' width='46'/></a>
		<a href="https://github.com/NoorSulaiman" target="_blank"> <img src={Git} alt="GitHub" hight='35' width='35'/></a>
		</div>
		</div>


	}
}

export default Social;