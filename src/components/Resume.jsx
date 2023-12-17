import React from 'react'
import '../css/Resume.css'

export default function Resume() {
  return (
    <>
    <div id="resume" className="container resume">
        <div data-aos="fade-up" className="resume-1">
            <h3 className="resume-label">Resume</h3>
            <span className="h-rule-3"></span>
        </div>
        <div data-aos="fade-up" className="resume-2">
            <p className="resume-3">Here are my experiences and qualifications.</p>
        </div>
        <div className="resume-block">
            <div className="internship">
                <p className='intern-label'>Internship</p>
                <div className="intern-info">
                     <div className="inner-block">
                     <h3 className="role-played">Software Developer Intern</h3>
                     <p className="organisation-name">VMWare</p>
                     <p className="work-period">November 2022 - February 2023</p>
                     <p className="work-description">
                     In my internship at VMWare, I worked as a SpringBoot Developer which involved in the development of FlightAware Application.I used SpringBoot and Skyscanner API to develop the application.My role included analysing and extracting specific data points from API using SpringBoot and propogate the data between frontend and backend of the application using Thymeleaf.
                     </p>
                     </div>
                </div>
            </div>
            <div className="education">
                <p className='education-label'>Education</p>
                <div className="education-info">
                    <h3 className="role-played">BTech,CSE</h3>
                    <p className="organisation-name">Anurag University</p>
                    <p className="work-period">Year 2020 - Year 2024</p>
                    <p className="work-description">
                    As an undergraduate student, I have a good understanding of web development technologies such as HTML, CSS, JavaScript, and React JS. Additionally, I'm proficient in backend technologies such as Java, Mysql, and SpringBoot. I also have skills in Python and problem-solving using Data structures and Algorithms.
                    </p>
                </div>
            </div>
        </div>
      
    </div>
      
    </>
  )
}
