import React, { Component } from 'react';
import _ from 'lodash';

import './projects.css'
var data = require('./favorite.json');

class Favorite extends Component{

     constructor(props) {
	super(props)
       this.state = {}
     }
     
     componentWillMount() {
	   this.refresh()
     }

     refresh= ()=> {
   
            return this.setState({localData: data})
            
     }

      render(){
      
          const data = this.state.localData;
          var i = 0;
          var myProjects = _.map(data,(project)=>{
           i++
           return <li className={"item"+i} key={Math.random()}>
                    <a href={project.url} target="_blank"><h4>{project.name}</h4></a>
                    <p>Description : {project.description}</p>
                    <p>Language : {project.language}</p>
                    <p>Created at : {project.created_at}</p>
                    {project.Lunch_app ?  <a href={project.Lunch_app} target="_blank"><h4>Lunch the app !</h4></a> : null }
                  </li>
                          })
          

        return <div className="githubData">
               
                 <h3> My favorite projects.</h3>
                 <button onClick={this.refresh} className="button">Update</button>
                 <ul>
                 {myProjects}
                 </ul>
                </div>
               		
      }
}

export default Favorite;