import React from 'react';
import '../css/Skills.css';
import SkillBox from './SkillBox';
import { GrMysql } from "react-icons/gr";
import { FaReact ,FaPython,FaJava,FaNode} from "react-icons/fa";
import {SiJavascript, SiMongodb, SiExpress, SiPostgresql, SiFirebase, SiPrisma, SiCloudflare, SiLinux, SiTypescript} from "react-icons/si";

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
                        <SkillBox  logo={<FaJava />} black={"#262626"} white={"white"} skill={"Java"}/>
                        <SkillBox  logo={<FaPython />} black={"#262626"} white={"white"} skill={"Python"}/>
                        <SkillBox  logo={<SiJavascript  />} black={"#262626"} white={"white"} skill={"Javascript"}/> 
                        <SkillBox  logo={<SiMongodb />} black={"#262626"} white={"white"} skill={"MongoDB"}/>
                        <SkillBox  logo={<SiExpress />} black={"#262626"} white={"white"} skill={"Express.Js"}/>
                        <SkillBox  logo={<FaReact />} black={"#262626"} white={"white"} skill={"React.Js"}/>
                        <SkillBox  logo={<FaNode />} black={"#262626"} white={"white"} skill={"Node.Js"}/>
                    
                        <SkillBox  logo={<SiTypescript />} black={"#262626"} white={"white"} skill={"Typescript"}/>
                        <SkillBox  logo={<SiLinux />} black={"#262626"} white={"white"} skill={"Linux"}/>
                        <SkillBox  logo={<GrMysql />} black={"#262626"} white={"white"} skill={"MySql"}/>
                        <SkillBox  logo={<SiPostgresql />} black={"#262626"} white={"white"}  skill={"Postgres"}/>
                        <SkillBox  logo={<SiFirebase />} black={"#262626"} white={"white"}  skill={"Firebase"}/>
                        <SkillBox  logo={<SiPrisma />} black={"#262626"} white={"white"} skill={"Prisma"}/>
                        <SkillBox  logo={<SiCloudflare />} black={"#262626"} white={"white"} skill={"Cloudflare"}/>
                        

                </div>
            </div>
        </div>

      
    </>
  )
}
