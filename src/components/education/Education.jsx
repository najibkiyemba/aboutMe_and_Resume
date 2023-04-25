import React from "react";
import "./education.css";
import {FaUserGraduate} from "react-icons/fa";

const education = {
    highSchool: 'Archived Safety & Health Fundamentals Certificate Through OSHA Online Education Training. Passed all science classes with A+. Lead a team of about 7 - 10 colleagues to solve math(algebra) problems.',
    college : 'Completed and passed web development classes using HTML and CSS. Wrote about 3-5 eassays using more than 2000 words in each eassay. Wrote a paper about Internet of Things(IOT).'
};

const Education = () => {

    function handleChange() {

    }

    return (
        <div>
            <div className="resumeIntro">
                <div className="introduction divBody">
                    <h2 className='educationHead' >{<FaUserGraduate className="educ-image"/>} EDUCATION</h2>
                    <div className="group-one">
                        <h4 className="schooltitle">HIGH SCHOOL DIPLOMA</h4>
                        <p className="schooltitle">Excel Center South Bend, Idiana. Aug 2021</p>
                    </div>
                    <br/>
                    <textarea
                        onChange={handleChange}
                        value={education.highSchool}
                        rows='4'
                        className="introduction" 
                        id='summary'>
                    </textarea>
                </div>
            </div>

            <div className="resumeIntro">
                <div className="introduction divBody">
                    <h2 className='educationHead' >{<FaUserGraduate className="educ-image"/>} EDUCATION</h2>
                    <div className="group-one">
                        <h4 className="schooltitle">ASSOCIATES OF APPLIED SCIENCE.</h4>
                        <p className="schooltitle">Ivy Tech Community College USA. Expected 2024</p>
                    </div>
                    <br/>
                    <textarea
                        onChange={handleChange}
                        value={education.college}
                        rows='4'
                        className="introduction" 
                        id='summary'>
                    </textarea>
                </div>
            </div>
        </div>
    );
};

export default Education;