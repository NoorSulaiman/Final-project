import React, { Component } from 'react';
import _ from 'lodash';



var data = require('./data.json');

class Data extends Component{

  
      render(){
      
        var i = 0;
        var mySkills = _.map(data,(skills)=>{
           i++
           return <div className={"skill"+i} key={Math.random()}>
                    <img src={require(skills.img)} alt={skills.name}/>
                    <h3>{skills.name}</h3>
                    <div className='bar'>
                     <div className='progress'></div>
                    </div>
                  </div>
                          })
          
        return <span className='skillswraper'>
                   {mySkills}
              </span>
               
               		
      }
}

export default Data;