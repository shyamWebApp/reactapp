import React,{useState} from "react";
import Logo from '../images/download.png';
import '../index.css'
import '../components/Navbar.css'
import Hamburger from 'hamburger-react'
const Navbar=()=>{
    const[click,setClick]=useState(false)
    

    const handleClick=()=>setClick(!click)
    return(
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo"></img>
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
                <li className="nav-items">Home</li>
                <li className="nav-items">About</li>
                <li className="nav-items">FAQ</li>
                <li className="nav-items">Contact</li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                <Hamburger size={25}/>
            </div>
        </div>
    )

}
export default Navbar;