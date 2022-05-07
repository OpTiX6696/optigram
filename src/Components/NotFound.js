import React from "react";
import { FcBrokenLink } from 'react-icons/fc';
import { Link } from "react-router-dom";
import '../Styles/NotFound.scss'


const NotFound = () => {


  return (
    <div>
      <FcBrokenLink />
      Awwwwww, Snap!

      <Link to="/">Back to Home</Link>

    </div>
  )
}


export default NotFound

