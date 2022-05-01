import React from "react";
import Shimmer from "./Shimmer";
import '../Styles/Skeleton.scss'


const Skeleton = () => {

  return (

  <div className="skeleton">

    <div className="image">

    </div>

    <div className="title">
      <div className="titleText">

      </div>
    </div>

    <div className="btns">
      <div className="btn downloadBtn"></div>
      <div className="btn likeBtn"></div>
    </div>

    <Shimmer />

  </div>

  )

  


}

export default Skeleton

