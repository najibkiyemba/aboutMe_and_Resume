import React from "react";
import './footer.css';
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {

    return (
        <>
            <div className="footerDiv">
                <footer>
                    <h2 id="footerHead">You like what you see? <br/> Hire me.</h2>
                    <u className="social_icon">
                        <li className="listOne"><a className="aOne" href="#1"><BsFacebook className="aOne"/></a></li>
                        <li className="listOne"><a className="aOne" href="#1"><BsTwitter className="aOne"/></a></li>
                        <li className="listOne"><a className="aOne" href="#1"><BsLinkedin className="aOne"/></a></li>
                        <li className="listOne"><a className="aOne" href="#1"><BsInstagram className="aOne"/></a></li>
                    </u>
                    <ul className="social_icon">
                        <li className="listOne"><a className="aTwo" href="#1">Home</a></li>
                        <li className="listOne"><a className="aTwo" href="#2">About</a></li>
                        <li className="listOne"><a className="aTwo" href="#3">Contact</a></li>
                        <li className="listOne"><a className="aTwo" href="#4">Teams</a></li>
                        <li className="listOne"><a className="aTwo" href="#5">Services</a></li>
                        <li className="listOne"><a className="aTwo" href="#5">Projects</a></li>
                    </ul>
                    <h5>@2023 Najib. All rights reservd.</h5>
                </footer>
            </div>
        </>
    );
};



export default Footer;