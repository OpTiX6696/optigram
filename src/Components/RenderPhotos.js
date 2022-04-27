import React, { createContext, useContext, useState } from "react";
import '../Styles/RenderPhotos.scss'
import { Photo } from './Photo'

//  export let LikedPhotos = []


const RenderPhotos = (props) => {

  const photos = props.newPhotos;

  return (
    <div id="container">
      {/* To render pics */}
       {photos && photos.map((photo, index) => {
        return <Photo photo={photo} index={index} />        
      }
      )}
    </div>
  )
}

// console.log('LLLLIIIIIKKKKEEEDDD', liked);


export default RenderPhotos