import React, { Component } from 'react';
import _ from 'lodash';

const data = require('./data.json');

class Data extends Component {
        render() {
                let i = 0;
                const mySkills = _.map(data, skills => {
                        i++;
                        return (
                                <div className={`skill scol${i}`} key={Math.random()}>
                                        <div className="skilliconWrapper">
                                                <img src={require(skills.img)} alt={skills.name} />
                                                <h3>{skills.name}</h3>
                                        </div>
                                        <div className="bar">
                                                <div id={`progress${i}`} />
                                        </div>
                                </div>
                        );
                });

                return <span className="skillswraper">{mySkills}</span>;
        }
}

export default Data;
