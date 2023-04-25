import React from "react";
import "./professionalExperience.css";
import {FaHistory} from "react-icons/fa";

import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const workExperience = [
    {
        head: 'WEB DEVELOPER',
        paragraph: 'Projects. Feb 2022 - Present',
        experience: 'Full time frontend developer using React. Working with internal and external API to fetch data. Improved UI through testing and debugging before deployment.Working with forms to control user inputs through form validation. Developing and maintaining front and backend of React Apps. Contributing to web applications through Git. Deploying completed projects on GitHub.'

    },
    {
        head: 'PHONE & COMPUTER TECHNICIAN',
        paragraph: 'Makulu Tech(MK). Aug 2018',
        experience: 'Repair phones and computers with hardware and software damages. Such as charging faults and network locks. Working as a team to diagonse damages, and repair phones and computers. Increased production by using Google.com to learn how to repair certain damages in both hardware and software. Developing customer satisfaction and trust through communication and less wait time. Lead a group of about 5-10 technicians in the repairing process. Developing popularity by working together as a team with one goal. Increased sales by 20% through using advanced LCD Screen Separate Machines and recommendation to clients.'
    
    },
    {
        head: 'GENERAL CONTRACTOR',
        paragraph: 'Jommai Property Consultant. Jun 2016',
        experience: 'Working with a team of engineers to design and build long-lasting architectures. Using starndard building materials and tools for building durable houses. Mixing concrete and gravel by operating toro machinery mixer for faster development. Using tap measure and other instruments for accurate messurements. Attending 30min - 1hr morning meetings with a group of engineers to talk about planning for a day and divide work into individual tasks. Recording and reporting all possible mistakes to engineers, that can cause future terrible damages to buildings. Cleaning and dispossing away all hazard materials before leaving the working site.'
        

    },
    {
        head: 'BAKER',
        paragraph: 'Ever Brown Bakery. Dec 2014',
        experience: 'Dressing clean and appropriate before joining the baking department. Making sure to use the right measurements when mixing ingredients for all products. Such as, cakes and breads. Packing products in there right assigned containers after deep cleaning and drying them in hot water. Setting oven alarms on when baking to prevent damaging products. Using the right equipments when unpacking hot products from oven to avoid risks and serious damages. Consistantly reminding other bakers to mantain the pressure of heat when ovens are operating. Not go beyond the maximum heat. Washing and drying all used intruments before the shift ends.'
    },
    {
        head: 'WAREHOUSE ASSOCIATE',
        paragraph: 'Amazon.com, Inc. 2020',
        experience: 'Joining 25min-40mins warm-up meetings for physical body streching, exercising, and get individual tasks from shift manager or assistant. Sorting and packing packages in there assigned container bags using scanning devices, flashing lights, and alphabetical letters on bags. Attending mandatory 15min - 30min break with my other co-workers per shift. Usually at the end of the shift we looks for container bags, put them on carts, and stage them in there assigned location number. Quickly report all damaged and linking packages to shift assistants or managers without touching them. Unpacking carts from trucks and loading them on the conveyor belts with the help of a water spider(assigned task). Clocking in and out before and after the shift starts and not later than 5 minutes.'
    },
    {
        head: 'FARMING',
        paragraph: 'Family Business. Feb 2022',
        experience: "Growing plants and raising livestock on the farm. Mulching the garden with dry grass to stop running water from unplanting under grown plants. Educating other farmers on the village the advantages of planting more trees and the disadvantages of cutting downdown trees. Using scarecrow techniques in gardens to scare and stop wild animals such as squirrels, monkeys, and ground hogs from eating and damaging farmer's crops. Watering crops and adding farm yard manure in gardens to speed-up the growth of plants. Harvesting and planting crops in the right season. Transporting and advertising harvested crops to several markets on the village for sale."
    },
]

const ProfessionalExperience = () => {

    function handleChange() {

    }

    


    return (
            <div className="history resumeIntro">
                 <div className="slide-container">
                    <h2 className='educationHead' >{<FaHistory className="educ-image"/>} WORK EXPERIENCE</h2>
                    <Slide
                        nextArrow={<button style={{
                            background: 'none',
                            border: '0px',
                            width: '10px',
                          }}><svg fill="#ooo" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>} prevArrow={<button style={{
                            background: 'none',
                            border: '0px',
                            width: '10px'
                          }}><svg fill="#ooo" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>}>
        
                    {
                        workExperience.map((item, id) => {
                            return (
                              <div key={id} className="each-slide-effect">
                                    <div className="group-one slide-headers">
                                        <h4 className="schooltitle">{ item.head}</h4>
                                        <p className="schooltitle">{ item.paragraph}</p>
                                    </div>
                                       <textarea
                                            onChange={handleChange}
                                            rows='4'
                                            className="introduction" 
                                            id='summary'
                                            value={item.experience}
                                       ></textarea>
                                </div>
                            );
                        })
                    }
                    </Slide>
                 </div>
            
        </div>
    );
};

export default ProfessionalExperience;