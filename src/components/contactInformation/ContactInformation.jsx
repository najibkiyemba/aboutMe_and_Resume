import React from "react";
import "./contactInformation.css";
import {MdOutlineEmail } from 'react-icons/md';
import { SlSocialLinkedin } from "react-icons/sl";
import {GoDeviceDesktop} from "react-icons/go";
import {GoLocation} from "react-icons/go";
import {ImPhone} from "react-icons/im";
import {FaGithubSquare} from "react-icons/fa";

const information = [
    {
        name: 'najibkiyemba.nk@gmail.com',
        image: <MdOutlineEmail className="images"/>,
    },
    {
        name: '+1(503)-683-2014',
        image: <ImPhone className="images"/>
    },
    {
        name: 'United States',
        image: <GoLocation className="images"/>
    },
    {
        name: 'najibkiyemba',
        image: <SlSocialLinkedin className="images"/>,
        href: 'https://linkedin.com/in/najibkiyemba-156775241'
    },
    {
        name: 'Software Engineer',
        image: <GoDeviceDesktop className="images"/>
    },
    {
        name: 'najibkiyemba' /*'najibkiyembahttps://github.com/'*/,
        image: <FaGithubSquare className="images"/>,
        href: 'https://github.com/'
    }
];

const navBar = ['Home']

const ContactInformation = () => {

    function handleClick() {
        document.getElementById("mySidepanel").style.display = 'block';
    }

    function closButton() {
        document.getElementById('mySidepanel').style.display = 'none';
    }


    return (
       <div className="contactInfo">
            <h2 className='title-header'>MERN STACK & AWS CLOUD <br/> ENGINEER</h2>
            <div className="nav-bar">
                <ul className="info-ul">
                    {
                        navBar.map((item, i) => {
                            return (
                                <li key={i} className="info-li">
                                    <a href='#a' className='list-a'>{item}</a>
                                </li>
                            );
                        })
                    }
                    <div className="info-li dropdown ">
                        <div id="mySidepanel" className="sidepanel">
                            <a href="#b" id='closebtn' className="closebtn" onClick={closButton}>X</a>
                            <a href="#c">Skills</a>
                            <a href="#d">Experience</a>
                            <a href="#e">Education</a>
                            <a href="#f">Certifcates</a>
                            <a href="#h">Projects</a>
                            <a href="#i">Articles</a>
                            <a href="#j">Languages</a>
                            <a href="#k">Stories</a>
                            <a href="#l">Books</a>
                            <a href="#m">Hobbies</a>

                        </div>

                        <button
                            onClick={handleClick}
                            className='openbtn'>☰
                        </button>
                    </div>
                </ul>
            </div>
            <div className="resumeHeader">
                {
                    information.map((item, id) => {
                        return (
                            <div className="info-items" key={id}>
                                <a className="linkedn" href={item.href}>
                                    <h5>{item.image}</h5>
                                    <h5 id='info'>{item.name}</h5>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div> 
    );
};


export default ContactInformation;