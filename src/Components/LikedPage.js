import React, { useEffect } from "react";
import RenderPhotos from "./RenderPhotos";
import { Photo } from "./Photo";
import { LikedPhotos } from "./Photo";


const LikedPage = () => {

  

  return (
    // <Photo newPhotos={LikedPhotos} />

    <div id="container">
      LIKED PICTURES
       {/* {LikedPhotos && LikedPhotos.map((photo, index) => {
        return <Photo like={true} photo={photo} index={index} />        
      }
        
      )} */}
    </div>
  )
}

export default LikedPage;