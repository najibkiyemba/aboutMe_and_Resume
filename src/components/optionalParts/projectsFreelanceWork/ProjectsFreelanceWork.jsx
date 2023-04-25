import React, {useState} from "react";
import "./projectsFreelanceWork.css";
import {GoProject} from "react-icons/go";
import validation from "../../../assets/validation.jpg";
import restaurnt from "../../../assets/restaurnt.jpg";
import portfolio from "../../../assets/portfolio.jpg";
import shopping from "../../../assets/shopping.jpg";
import generationUSA from "../../../assets/generationUSA.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import {FcBusinessman} from "react-icons/fc";
import {FcBusinesswoman} from "react-icons/fc";


const projects = [
    {
        projectName: "VALIDATION APP",
        description: "The main purpose of this application is to validate user data.",
        Image: validation,
        link: "https://najibkiyemba.github.io/validationFormApp/"
    },
    {
        projectName: "RESTAURANTS FINDER",
        description: "This application fetch data from adifferent website using api and it help users find near by restaurants.",
        Image: restaurnt,
        link: ""
    },
    {
        projectName: "PERSONAL BLOG",
        description: "I developed a personal blog using JavaScript and React. It explains more about me and my role in tech.",
        Image: portfolio,
        link: "https://najibkiyemba.github.io/myReactPortfolio/"
    },
    {
        projectName: "ONLINE SHOPPING APP",
        description: "Under development...",
        Image: shopping,
        link: ""
    },
    {
        projectName: "ONLINE SURVEY FORM",
        description: "This application help students to give feedback on there experience in learning how to code.",
        Image: generationUSA,
        link: "https://najibkiyemba.github.io/onlineSurveyForm/"
    }
];

const ProjectsFreelanceWork = () => {
    const [newComment, setNewComment] = useState({});
    const [comments, setComments] = useState([]);


    function handleChange({target}) {
        const newGender = document.getElementById('genderOptions').value;
        newComment.gender = newGender

        const {name, value} = target;
        setNewComment((prev) => {
            return (
                {...prev, id: Date.now(), [name]:value }
            )
        });
        

    }

    function handleSubmitOne(e) {
        e.preventDefault();
        const clearFormOne = document.getElementById('formData');
        alert('Thanks')
        clearFormOne.reset();
    }

    function handleSubmitTwo(e) {
        e.preventDefault();
        //const clearFormTwo = document.getElementsByName('formDataTwo')[0];
        //clearFormTwo.reset();
        setComments((prev) => {
            return (
                [
                    newComment, ...prev
                ]
            )
        })
        setNewComment({});
    }

    function deleteComment(removeComment) {
        setComments((prev) => {
            return prev.filter((comment) => comment.id !== removeComment)
        })
    }

    return (
        <>
        <div className="trainingCerti">
            <div className="training">
                <h2 className='educationHead' >{<GoProject className="educ-image"/>} PROJECTS & FREELANCE WORK</h2>
                <Slide
                        nextArrow={<button style={{
                        background: 'none',
                        border: '0px',
                        width: '0px'
                      }}><svg fill="#000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>} prevArrow={<button style={{
                        background: 'none',
                        border: '0px',
                        width: '0px'
                      }}><svg fill="#000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>}
                     slidesToScroll={2} slidesToShow={2} indicators={true}
                >
                {
                    projects.map((pro, id) => (
                        <div key={id} className="items">
                            <h4 className="image-header">{pro.projectName}. <a target="-blank" href={pro.link}><strong id="viewer">view</strong></a> project</h4>
                            <img alt="#" src={pro.Image}/>
                        </div>
                    ))
                }
                </Slide>
            </div>
        </div>
        
        <div id="tableSchedule">
            <table className='tableSchedule'>
                <thead>
                    <tr className="tableHead">
                        <td>
                            <h2 className='educationHead' >SCHEDULE INTERVIEW</h2>
                        </td>
                        <td>
                            <h2 className='educationHead' >LEAVE COMMENTS :)</h2>
                        </td>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    <tr>
                        <td className='formData'>
                            <form id='formData' action="" onSubmit={handleSubmitOne}>
                                <div>
                                    <label name='names'>Names</label><br/><br/>
                                    <input
                                        required 
                                        placeholder="Names" 
                                        type='text'/><br/>
                                </div>
                                <div>
                                    <label className='gender' >Gender</label>
                                    <select className='genderOptions' >
                                        <option disabled>Choose Gender</option>
                                        <option
                                            value='male'
                                        >male</option>
                                        <option 
                                            value='female'>
                                            female
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label name='date'>Date</label><br/><br/>
                                    <input required type='date'/><br/>
                                </div>
                                <div>
                                    <label name='message'>Message</label><br/><br/>
                                    <textarea required className="textarea1" rows='7' placeholder="Message.." type='text'></textarea><br/>
                                </div>
                                <div className='buttonDiv'>
                                    <button id='button' type="submit" >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </td>
                        <td id='tableData' className="formData">
                            <div>
                            <form name='formDataTwo' id='formData' action="" onSubmit={handleSubmitTwo}>
                                <div id='commentDiv'>
                                    <label name='name'>Name</label><br/><br/>
                                    <input
                                        onChange={handleChange}
                                        value={newComment.name || ''}
                                        name='name'
                                        required 
                                        placeholder="Name" 
                                        type='text'/><br/>
                                </div>
                                <div>
                                    <label className='gender' >Gender</label>
                                    <select id='genderOptions' onChange={handleChange} >
                                        <option disabled>Choose Gender</option>
                                        <option
                                            value='male'
                                        >male</option>
                                        <option 
                                            value='female'>
                                            female
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label name='date'>Date</label><br/><br/>
                                    <input
                                        onChange={handleChange}
                                        value={newComment.date || ''}
                                        name='date'
                                        required 
                                        type='date'/><br/>
                                </div>
                                <div>
                                    <label name='message'>Comment</label><br/><br/>
                                    <textarea 
                                        onChange={handleChange}
                                        name='message'
                                        value={newComment.message || ''}
                                        required 
                                        className="textarea1" 
                                        rows='7' 
                                        placeholder="Comment.." 
                                        type='text'></textarea><br/>
                                </div>
                                <div className='buttonDiv'>
                                    <button id='button' type="submit" >
                                        Post 
                                    </button>
                                </div>
                            </form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="commentDiv">
                <h2 className='educationHead'>READ OTHERS COMMENTS AND SMILE :)</h2>
                <div>
                    {
                        comments.map(({name, gender, date, message, id}) => (
                            <div className="otherComments" key={id}>
                                {
                                    gender === 'male' ? (
                                        <>
                                            <div>
                                                <h3>Name: {name} {<FcBusinessman className="commentImage"/>}<span onClick={() => deleteComment(id) } className='delete'>Delete</span></h3>
                                                <h4>Post Date: {date}</h4>
                                                <p>Message: {message}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div>
                                                <h3>Name: {name} {<FcBusinesswoman className="commentImage"/>}<span onClick={() => deleteComment(id)} className="delete">Delete</span></h3>
                                                <h4>Post Date: {date}</h4>
                                                <p>Message: {message}</p>
                                            </div>
                                        </>
                                    )
                                }                      
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>    
    );
};


export default ProjectsFreelanceWork;
