import React from 'react';
import '../css/Skills.css';
import SkillBox from './SkillBox';
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { FaReact ,FaPython,FaJava,FaNode} from "react-icons/fa";
import {SiJavascript,SiSpringboot,SiMongodb} from "react-icons/si";

export default function Skills() {
  return (
    <>
        <div id='skills' className="skills ">
            <div className=" skills-1 container">
                <div className="skills-2">
                    <h3 className="skills-label">My Skills</h3>
                    <span className="h-rule"></span>
                </div>
                <div className="skills-3">
                    <div className="skills-4">
                        <p data-aos="fade-up" className="para-1">Here are my skills.</p>
                    </div>
                </div>
                <div className="skills-5">
                    <div className="first2">
                        <SkillBox  logo={<IoLogoHtml5 />} black={"white"} white={"black"} skill={"HTML"}/>
                        <SkillBox  logo={<IoLogoCss3 />} black={"white"} white={"black"} skill={"CSS"}/>
                        <SkillBox  logo={<SiJavascript  />} black={"white"} white={"black"} skill={"Javascript"}/> 
                        <SkillBox  logo={<FaReact />} black={"white"} white={"black"} skill={"React.Js"}/>
                        <SkillBox  logo={<FaNode />} black={"white"} white={"black"} skill={"Node.Js"}/>
                    </div>
                    <div className="first2">
                        <SkillBox  logo={<FaJava />} black={"black"} white={"white"} skill={"Java"}/>
                        <SkillBox  logo={<FaPython />} black={"black"} white={"white"} skill={"Python"}/>
                        <SkillBox  logo={<GrMysql />} black={"black"} white={"white"} skill={"MySql"}/>
                        <SkillBox  logo={<SiSpringboot />} black={"black"} white={"white"} skill={"SpringBoot"}/>
                        <SkillBox  logo={<SiMongodb />} black={"black"} white={"white"} skill={"MongoDB"}/>
                        
                    </div>
                </div>
            </div>
        </div>

      
    </>
  )
}
