import React, { Component } from 'react';
import _ from 'lodash';

import './hungry.css'

class Youtube extends Component{

	 constructor(props) {
	super(props)
       this.state = {requestFailed:false}
     }
     
     componentDidMount() {
	   fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyAge28k-7KnPv-ywjII5C0NgVzAqImrw54&playlistId=PL8zglt-LDl-iwBHEl3Pw1IhWGp9cfgMrc')
       .then(res => {if(!res.ok){throw Error("Network request failed")}
             return res
       })
       .then(data => data.json())
       .then(data => {this.setState({githubData: data})
             }, ()=> {this.setState({requestFailed: true})})
     }
     

     

      render(){

        if(this.state.requestFailed) return <p>Failed!</p>
        if(!this.state.githubData) return <p> Loading...</p>
          const data = this.state.githubData;
          const vedid = data.snippet.resourceId.videoId;
          const link = "\"//www.youtube.com/embed/'+vedid+'\"";
          var i = 0;
          var myProjects = _.map(data,(project)=>{
           i++
           return <li className={"item"+i} key={vedid}>
                    <iframe src={link}></iframe>
                  </li>
                          })

        return <div className="githubData">
                
                 <h3> My current projects.</h3>
                 <ul>
                 {myProjects}
                 </ul>
                </div>
               		
      }
}

export default Youtube;