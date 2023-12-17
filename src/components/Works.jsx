import React from 'react'
import '../css/Skills.css'
import WorkCard from './WorkCard'


export default function Works() {
  return (
    <>
    <div id='works' className="works ">
            <div className=" works-1 container">
                <div className="works-2">
                    <h3 className="works-label">My Works</h3>
                    <span className="h-rule"></span>
                </div>
                <div className="works-3">
                    <div className="works-4">
                        <p data-aos="fade-up" className="para-1">Here are some of my works.</p>
                    </div>
                </div>
                <div className="works-5">
                    <div className="project-items">
                       <WorkCard/>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}
