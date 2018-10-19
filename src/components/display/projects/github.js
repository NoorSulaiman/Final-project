import React, { Component } from 'react';
import _ from 'lodash';

import './projects.css'

class GitHub extends Component{

	 constructor(props) {
	super(props)
       this.state = {requestFailed:false}
     }
     
     componentWillMount() {
	   this.refresh()
     }

     refresh = ()=> {
    fetch('https://api.github.com/users/NoorSulaiman/repos?sort=created&per_page=5')
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
          var myProjects = _.map(data,(project)=>{
           i++
           var date = project.created_at;
           var matchs = date.match(/([T:])\w+/g).join('');
           return <li className={"item"+i} key={Math.random()}>
                    <a href={project.html_url} target="_blank"><h4>{project.name}</h4></a>
                    <p>Description : {project.description}</p>
                    <p>Language : {project.language}</p>
                    <p>Created at : {date.replace(matchs,'')}</p>
                  </li>
                          })

        return <div className="githubData">
                
                 <h3> My current projects on GitHub.</h3>
                 <button onClick={this.refresh} className="button">Update</button>
                 <ul>
                 {myProjects}
                 </ul>
                </div>
               		
      }
}

export default GitHub;