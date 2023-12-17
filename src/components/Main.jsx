import React from 'react'
import '../css/Main.css'
import { TypeAnimation } from "react-type-animation";
import resumePDF from '../resume/Resume.pdf'
import { FiDownload } from "react-icons/fi";
import {AiFillGithub,AiFillInstagram} from "react-icons/ai";
import { FaPlay, FaLinkedinIn } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import {SiGeeksforgeeks} from "react-icons/si";
import img1 from '../assets/mypic.png'
import img2 from '../assets/rotatingpic.png'

export default function Main() {
  return (
    <>
        <div id="home" className='main'>
            <div className="container main-1">
                <div className="main-2">
                    <div className="main-3">
                    <h2 data-aos="fade-up" className="name-text">Hello, I'm Nithin Kumar</h2>
                    <TypeAnimation data-aos="fade-up" sequence={["Web Developer",2000,"Programmer",2000,"",]} speed={30} wrapper="h2" repeat={Infinity} className="skill-animation text-yellow-500 text-4xl font-bold sm:text-3xl" />
                    <p className=" short-text">I'm an undergraduate student from Anurag University</p>
                    </div>
                    <div data-aos="fade-up" className="social-buttons">
                        <a href="/" className="hire-me-button" >
                             <span> Hire Me</span>
                        </a>
                        <a href={resumePDF} className="resume-button" download>
                            <div className="flex items-center gap-1">
                                Resume <FiDownload />
                            </div>
                        </a>
                    </div>
                    <div className="icons-block flex mt-5">
                        <ul data-aos="fade-up" data-aos-duration="1500" className="icons-list">
                            <li>
                                <a href="https://github.com/ngworks1909">
                                    <AiFillGithub className="social-icons" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/nithin-kumar-reddy-bb7b13253/">
                                    <FaLinkedinIn className="social-icons" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/nithin_1909/?hl=en">
                                    <AiFillInstagram className="social-icons" />
                                </a>
                            </li>
                            <li>
                                <a href="https://leetcode.com/Nithin_1909/">
                                    <TbBrandLeetcode className="social-icons" />
                                </a>
                            </li>
                            <li>
                                <a href="https://auth.geeksforgeeks.org/user/nithinkanduru1908/practice">
                                    <SiGeeksforgeeks className="social-icons" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" main-5">
          <div className="main-6">
            <img data-aos="fade-up" className="my-pic" src={img1} alt="mine"/>
            <div className="main-7">
              <div data-aos="zoom-in" data-aos-duration="1000"  className="main-8">
                <img className="circle-text" src={img2} alt="rotate"/>
                <FaPlay className="circle-play"/>
              </div>
            </div>
          </div>
        </div>
            </div>
        </div> 
    </>
  )
}
