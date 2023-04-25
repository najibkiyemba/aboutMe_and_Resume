import React from "react";
import "./skills.css";
import {GiSkills} from "react-icons/gi";

const mySkills = [
    {
        front: 'HTML', back: 'EXPRESS.JS', aws: 'LINUX', tool: 'VS CODE', language: 'English', skill: 'Problem Solving'
    },
    {
        front: 'CSS', back: 'NODE.JS', aws: 'PYTHON', tool: 'GIT', language: 'Spanish', skill: 'Creativity',
    },
    {
        front: 'BOOTSTRAP', back: 'MONGODB', aws: 'NETWORKING', tool: 'TERMINAL', language: 'Luganda', skill: 'Communication',
    },
    {
        front: 'REDUX', aws: 'SECURITY', skill: 'learning and improving'
    },
    {
        front: 'JAVASCRIPT', aws: 'DATABASES(RL)', skill: 'Attention to Details'
    },
    {
        front: 'REACT', aws: 'AUTOMATION'
    },
    {aws: 'CLOUD MODELS'}
]

const headerTable = ['Front-End', 'Back-End', 'AWS', 'Tools','Languages', 'Skills'];

function handleSkills() {
        
    return (
            <>
                <table id='skillTools' className="tablemobile">
                    <thead>
                        <tr>
                    
                        {
                            headerTable.map((head, id) => {
                                return (
                                
                                    <td className="tablehead" key={id}>{head}</td>
                            
                                );
                            })
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mySkills.map((skill, id) => {
                                return (
                                    <tr key={id}>
                                        <td className="tableData">{skill.front}</td>
                                        <td className="tableData">{skill.back}</td>
                                        <td className="tableData">{skill.aws}</td>
                                        <td className="tableData">{skill.tool}</td>
                                        <td className="tableData">{skill.language}</td>
                                        <td className="tableData">{skill.skill}</td>

                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </>
    );
}

const Skills = () => {

    return (
        <div className="resume-skills">
            <div className="group-one">
                <h2 className='educationHead' >{<GiSkills className="educ-image"/>} SKILLS & LANGUAGES</h2>
            </div>
            {
                handleSkills()
            }
        </div>
    );
};

export default Skills;