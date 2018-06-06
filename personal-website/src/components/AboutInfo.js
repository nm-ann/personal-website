import React, { Component } from 'react';
import Experience from './Experience';

class AboutInfo extends Component {
    render() {
        return(
            <div className="about-info">
                <h2>Education</h2>
                <label>Yeshiva University</label>
                <label>Bachelors in Computer Science</label>
                <label>Expected 2021</label>
                <h2>Experience</h2>
                <Experience startDate={"May 2018"} endDate={"August 2018"} 
                    job={"Computer Science Intern"} jobDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales lacus vel erat facilisis, non placerat enim convallis. Interdum et."}
                />
                <Experience startDate={"April 2018"} endDate={"Present"} 
                    job={"Freelance Mobile Developer"} jobDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales lacus vel erat facilisis, non placerat enim convallis. Interdum et."}
                />
            </div>
        );
    }
}

export default AboutInfo;