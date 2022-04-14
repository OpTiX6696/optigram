import React from "react";
import '../Styles/RenderPhotos.scss'
import Photo from './Photo'


const RenderPhotos = (props) => {

  const photos = props.newPhotos;

  console.log("in renderphotos", photos)

  return (
    <div id="container">
      {/* To render pics */}
       {photos && photos.map((photo, index) => {
        return <Photo photo={photo} index={index} key={index}/>        
      }
        
      )}
    </div>
  )
}

export default RenderPhotos