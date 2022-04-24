import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Logo.scss'


const Logo = () => {

  return (
    <Link to='/' style={{textDecoration: 'none', color: 'unset'}}>
      <div id='logo'>
        <h1>Optigram</h1>
      </div>
    </Link>
  )
}

export default Logo