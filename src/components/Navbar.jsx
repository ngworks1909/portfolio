import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import {HiMenu} from 'react-icons/hi';
import {RxCross2} from 'react-icons/rx';


const navItems=[
    {
        id: 0,
        name: "home"
    },
    {
        id: 1,
        name: "skills"
    },
    {
        id: 2,
        name: "works"
    },
    {
        id: 3,
        name: "resume"
    },
    {
        id: 4,
        name: "contact"
    }
];

export default function Navbar() {
    const [scrollPosition,setScrollPosition]=useState(0);
    const [isOpen,setIsOpen]=useState(false);
    const [activeIndex,setActiveIndex]=useState(0);

    const toggleNav=(name)=>{
        setIsOpen(!isOpen);
        setActiveIndex(name===activeIndex?null:name);
    }
    useEffect(()=>{
        const handleScroll=()=>{
            setScrollPosition(window.scrollY);
        }
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    },[]);
  return (
    <>
      <div data-aos="fade-down" id='navbar' style={scrollPosition > 0?{backgroundColor:'white' ,boxShadow:'0 2px 4px -1px rgba(0, 0, 0, 0.25)',transition:'.38s ease-in-out'}:{backgroundColor:'transparent',transition:'.38s ease-in-out'}} className={`navbar`}>
           <nav className='container container-1'>
                <div className="logo">
                    <Link to='/' onClick={()=>window.scrollTo(0,0)} className='my-name'>Nithin Kumar.</Link></div>
                <div className="nav-items">
                    <button className='himenu-button' onClick={toggleNav}>
                        <HiMenu size={25}/> 
                    </button>
                    <ul className={`nav-ul-items container`} style={!isOpen?{right:'-100%'}:{right:'0%'}}>
                    <button onClick={toggleNav} className={`rxcross-button`}>
                        <RxCross2 size={25}/>
                    </button>
                        {navItems.map((item) => (
                            <li key={item.id} className='list-items'>
                                <a href={`#${item.name}`} className={` nav-anchors `} onClick={() => setActiveIndex(item.id)} style={item.id===activeIndex?{color:'rgb(234 179 8 / 1)',fontWeight:'600'}:{}}>{item.name}</a>
                            </li>
                        ))}
                         <a href="/" className=" hire-me">HIRE ME</a>
                    </ul>
                </div>

           </nav>
      </div> 
    </>
  )
}
