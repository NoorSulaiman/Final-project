import React, { Component } from 'react';

import './about.css'

class About extends Component {
	constructor(props) {
		super(props)
       this.state = {heading1:true,
       				 heading2:true,
       				 heading3:true,
       				 heading4:true,
       				 heading5:true
       }
       this.heading1StateChange = this.heading1StateChange.bind(this)
       this.heading2StateChange = this.heading2StateChange.bind(this)
       this.heading3StateChange = this.heading3StateChange.bind(this)
       this.heading4StateChange = this.heading4StateChange.bind(this)
       this.heading5StateChange = this.heading5StateChange.bind(this)
     }
   
     	
     
     	

     
     heading1StateChange(){
     	this.setState({heading1:!this.state.heading1});
     	var str=(this.state.heading1?'Noor Sulaiman: a father, a cook, a refugee, and a coder.':'')
     	this.setState({heading1text:str})
     	
     }
     heading2StateChange(){
     	this.setState({heading2:!this.state.heading2});
     	var str=(this.state.heading2?'Life is too short for work I am not passionate about.':'')
     	this.setState({heading2text:str})
     	
     }
     heading3StateChange(){
     	this.setState({heading3:!this.state.heading3});
     	var str=(this.state.heading3?'a program that gives access to an entire technology industry.':'')
     	this.setState({heading3text:str})
     	
     }
     heading4StateChange(){
     	this.setState({heading4:!this.state.heading4});
     	var str=(this.state.heading4?'I loved coding in college, and my little brother who’s developing awesome applications.':'')
     	this.setState({heading4text:str})
     	
     }
     heading5StateChange(){
     	this.setState({heading5:!this.state.heading5});
     	var str=(this.state.heading5?'join a team of passionate and vocal developers that I can wrestle with, mentally speaking.':'')
     	this.setState({heading5text:str})
     	
     }
	render(){

		return <div className='about'>
		<div id='pagetitle'>About me</div>
		<div className="paragraphs">
		    <h3 onClick={this.heading1StateChange}>Let’s get personal: </h3> 
        <p>{this.state.heading1text}</p>
          
        <h3 onClick={this.heading2StateChange}>Recent Epiphanies:</h3>
        <p>{this.state.heading2text}</p>
          
        <h3 onClick={this.heading3StateChange}>Enter Recoded:</h3>
        <p>{this.state.heading3text}</p>
          
        <h3 onClick={this.heading4StateChange}>Motivation:</h3> 
        <p>{this.state.heading4text}</p>
          
        <h3 onClick={this.heading5StateChange}>Current goal:</h3>
        <p>{this.state.heading5text}</p>
          
		</div>
		</div>
	}
}

export default About;