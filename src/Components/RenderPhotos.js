import React from "react";
import '../Styles/RenderPhotos.scss'


const RenderPhotos = (props) => {

  const photos = props.newPhotos;

  console.log("in renderphotos", photos)

  return (
    <div id="container">
      {/* To render pics */}

       {photos && photos.map((photo, index) => {
        return (

          <div key={index} className='photoContainer'>
            <div className="photo">
              <img alt="" src={photo.urls.raw} />
            </div>
            <div className="photoTitle">
              {photo.alt_description ? <p>{photo.alt_description}</p> : <p>Description Unavailable</p>}
            </div>
          </div>
        )
      }
        
      )}
    </div>
  )
}

export default RenderPhotos