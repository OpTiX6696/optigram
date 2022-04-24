import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Facade.scss';


const Facade = () => {


  return (
    <div>
      <h1>Optigram</h1>
      <p>Search an item</p>
      <p>I'll splash the pictures...</p>

      <Link to='/search' >Get Started</Link>
    </div>
  )
}

export default Facade