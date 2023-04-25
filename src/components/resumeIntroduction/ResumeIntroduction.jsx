import React, {useState, useEffect} from "react";
import "./resumeIntroduction.css";
import {MdOutlineSummarize} from "react-icons/md";

const resumeData = {
    introduction: `Passionate and strategic planning MEARN Stack & AWS Cloud Software Engineer with 1 year of experience in software development using a wide range of technologies such as React.js, MongoDB, Node.js, Express.js, Python, Linux, and more, to contribute and build various interactive and dynamic web applications that use application programming interfaces(api's) to send and recieve requests from servers and clients.`
}

const ResumeIntroduction = () => {
    const [count, setCount] = useState([0, '']);
    //const [index1, setIndex1] = useState(0);
    useEffect(() => {
        function handleTimeOut() {
            //const indexValue = setTimeout(() => setIndex1(prev => prev + 1), 100);
            let summary = resumeData.introduction;
            if(count[0] < summary.length -1 ) {
                setTimeout(() => setCount(prev => [
                    prev[0] + 1, prev[1] + summary[prev[0]], ...prev
                ]), 70);
            }
        }
        return clearTimeout(handleTimeOut());

    });

    function handleChange() {

    }
    
    return (
        <div className="resumeIntro">
            <div className="introduction divBody">
                <div className="group-one">
                    <h2 className='educationHead' >{<MdOutlineSummarize className="educ-image"/>} SUMMARY</h2>
                </div>
                <br/>
                <textarea
                    onChange={handleChange}
                    value={count[1]}
                    rows='4'
                    className="introduction" 
                    id='summary'>
                </textarea>
            </div>
        </div>
    );
};

export default ResumeIntroduction;