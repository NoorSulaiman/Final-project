import React, { Component } from 'react';
import _ from 'lodash';

import './hungry.css'

class Youtube extends Component{

	 constructor(props) {
	super(props)
       this.state = {requestFailed:false}
     }
     
     componentWillMount() {
	   fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&key=AIzaSyAge28k-7KnPv-ywjII5C0NgVzAqImrw54&playlistId=PL8zglt-LDl-g1jloR9OJ9weMk8CX2nSkE')
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
          
          var i = 0;
          var myVideos = _.map(data.items,(project)=>{
                  var vidid = data.items[i].snippet.resourceId.videoId;
                  i++
           return <li className={"video"} key={vidid} >
                    <iframe width="100%" height="100%" src={'https://www.youtube.com/embed/'+vidid}></iframe>
                  </li>
                          })
         

        return <div className="Youtubedata">
                
                 <h3>Make some pasta!</h3>
                 <ul>
                 {myVideos}
                 </ul>
                </div>
               		
      }
}

export default Youtube;