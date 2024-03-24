import React from 'react'
import '../css/Main.css'
import { TypeAnimation } from "react-type-animation";
import resumePDF from '../resume/Nithin Resume.pdf'
import { FiDownload } from "react-icons/fi";
import {AiFillGithub,AiFillInstagram} from "react-icons/ai";
import { FaPlay, FaLinkedinIn } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import {SiGeeksforgeeks} from "react-icons/si";
import img1 from '../assets/mypic.png'
import img2 from '../assets/rotatingpic.png'
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <>
        <div id="home" className='main'>
            <div className="container main-1">
                <div className="main-2">
                    <div className="main-3">
                    <h2 data-aos="fade-up" className="name-text">Hello, I'm Nithin Kumar</h2>
                    <TypeAnimation data-aos="fade-up" sequence={["Web Developer",2000,"Programmer",2000,"",]} speed={30} wrapper="h2" repeat={Infinity} className="skill-animation text-yellow-500 text-4xl font-bold sm:text-3xl" />
                    <p data-aos="fade-up" className=" short-text">I'm an undergraduate student from Anurag University</p>
                    </div>
                    <div data-aos="fade-up" className="social-buttons">
                        <Link to="https://firebasestorage.googleapis.com/v0/b/portfolio-32a9b.appspot.com/o/Nithin%20Resume.pdf?alt=media&token=81ecc529-9b90-4086-aeac-056dc857a762" target="_blank" className="hire-me-button" >
                             <span> View Resume</span>
                        </Link>
                        <Link to={resumePDF} className="resume-button" download>
                            <div className="flex items-center gap-1">
                                Resume <FiDownload />
                            </div>
                        </Link>
                    </div>
                    <div className="icons-block flex mt-5">
                        <ul data-aos="fade-up" data-aos-duration="1500" className="icons-list">
                            <li>
                                <Link to="https://github.com/ngworks1909">
                                    <AiFillGithub className="social-icons" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/in/nithin-kumar-reddy-bb7b13253/">
                                    <FaLinkedinIn className="social-icons" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.instagram.com/nithin_1909/?hl=en">
                                    <AiFillInstagram className="social-icons" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://leetcode.com/Nithin_1909/">
                                    <TbBrandLeetcode className="social-icons" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://auth.geeksforgeeks.org/user/nithinkanduru1908/practice">
                                    <SiGeeksforgeeks className="social-icons" />
                                </Link>
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
