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
        <div>
            <div className="about_container">
                <h1>*ABOUT ME*</h1>
                <div className="my_area">
                <img src={risa_photo2} alt="my_picture" />
                <div className="my_description">
                    <h1><span>#who...?</span></h1>
                    <p>My name is Risa Takata. I'm a Japanese Front End Developer based in Vancouver,Canada.I'm focusing on  creating user-friendly websites and readable code. </p>
                    <h1><span>#Education</span></h1>
                    <p><span>Web & Mobile App Development Co-Op Diploma</span> <br/>Cornerstone International Community College of Canada(CICCC) May. 2019 ~ Apr. 2020</p>
                    <h1><span>#My skill</span></h1>
                    <div className="skill_icon_area">
                    <Skill_icon img={REACT} text="React"/>
                    <Skill_icon img={JAVASCRIPT} text="JavaScript"/>
                    <Skill_icon img={HTML} text="HTML"/>
                    <Skill_icon img={CSS} text="CSS"/>
                    <Skill_icon img={SASS} text="SASS"/>
                    <Skill_icon img={BOOTSTRAP} text="Bootstrap"/>
                    <Skill_icon img={JAVA}text="JAVA"/>
                    <Skill_icon img={GIT}text="GIT"/>
                    </div>
                    {/* <p>React,JavaScript,SASS(SCSS),HTML5, CSS3,JQuery, React, Bootstrap, Responsive Design</p> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About;