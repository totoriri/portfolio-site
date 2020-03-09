import React from "react"
import "../about/About.scss"
import risa_photo2 from "../../img/risa_photo.jpg"
import Skill_icon from "./Skill_icon.jsx"
import REACT from "../../img/react.png"
import JAVASCRIPT from "../../img/javascript.png"
import HTML from "../../img/html2.png"
import CSS from "../../img/css.png"
import SASS from "../../img/sass.png"
import BOOTSTRAP from "../../img/bootstrap.png"
import JAVA from "../../img/java.png"
import GIT from "../../img/git.png"

const About = () => {
    return (
            <div id="about_container">
            <h1 className="section_title">*ABOUT ME*</h1>
                <div className="top_part">
                <img src={risa_photo2} alt="my_picture" />
                <div className="top_left_part">
                    <div className="my_story">
                        <h1><span>#who...?</span></h1>
                        <p>My name is Risa Takata. I'm a Japanese Front End Developer based in Vancouver,Canada.I'm focusing on  creating user-friendly websites and readable code. 
                        i like apple. i have a dog. i wanna go to the place i dont know.i'm so excited to meet someone.
                        my friends call me risa.hahahhahahhahahahhahhhhahhahahahaaha.yay.　when can i be able to go to japan?
                        my favorite movie is "BIG fish". i can't sllep well these days.
                        happy Monday!!yeaaaaahhhhhhhhh!!
                        </p>
                </div>
                <div className="my_education">
                        <h1><span>#Education</span></h1>
                        <p><span>Web & Mobile App Development Co-Op Diploma</span> <br/>Cornerstone International Community College of Canada(CICCC) May. 2019 ~ Apr. 2020</p>
                        <p><span>Web & Mobile App Development Co-Op Diploma</span> <br/>Cornerstone International Community College of Canada(CICCC) May. 2019 ~ Apr. 2020</p>
                    </div>
            </div>
            </div>
                <div className="my_skills">
                <h1><span>#My skills</span></h1>
                    <div className="skill_icon_area">
                    <Skill_icon img={REACT} text="React"/>
                    <Skill_icon img={JAVASCRIPT} text="JavaScript"/>
                    <Skill_icon img={HTML} text="HTML"/>
                    <Skill_icon img={CSS} text="CSS"/>
                    <Skill_icon img={SASS} text="SASS"/>
                    <Skill_icon img={BOOTSTRAP} text="Bootstrap"/>
                    <Skill_icon img={JAVA}text="JAVA"/>
                    <Skill_icon img={GIT}text="GIT"/>
                    <Skill_icon img={GIT}text="GIT"/>
                    <Skill_icon img={GIT}text="GIT"/>
                    {/* </div> */}
                        {/* <p>React,JavaScript,SASS(SCSS),HTML5, CSS3,JQuery, React, Bootstrap, Responsive Design</p> */}
                        </div>
                </div>
            </div>
    )
}

export default About;