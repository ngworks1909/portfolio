import React from 'react'
import '../css/SkillBox.css'

export default function SkillBox({ logo, black, white, skill }) {
  return (
    <>
       <div data-aos="zoom-in" data-aos-duration="1000" style={{background:black,color:white}} className="skillbox">
      <div style={{backgroundColor:white,color:black}} className="skillbox-1">
        {logo}
      </div>
      <p className="skillbox-2">{skill}</p>
    </div>
      
    </>
  )
}
