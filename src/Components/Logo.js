import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/Logo.scss'


const Logo = () => {

  const minScreen = 500;

  const [logoText, setLogoText] = useState(window.screen.width < minScreen ? "O" : "Optigram");

  const handleScreenChange = () => {
    window.screen.width < minScreen ? setLogoText("O") : setLogoText("Optigram");
  }
  
  window.addEventListener('resize', handleScreenChange)


  return (
    <Link to='/' style={{textDecoration: 'none', color: 'unset'}}>
      <div id='logo'>
        <h1>{logoText}</h1>
      </div>
    </Link>
  )
}

export default Logo