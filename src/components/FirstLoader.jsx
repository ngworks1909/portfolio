import React from 'react'
import '../css/FirstLoader.css'
import { BarLoader } from "react-spinners";

export default function FirstLoader() {
  return (
    <>
        <div className="barloader">
            <BarLoader color="#f6c400" height={4} />
        </div>
      
    </>
  )
}
