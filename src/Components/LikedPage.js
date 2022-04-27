import React, { useEffect, useRef, useState} from "react";
import RenderPhotos from "./RenderPhotos";
import { Photo } from "./Photo";
import { LikedPhotos } from "./Photo";


const LikedPage = () => {

  const [currentLikedPhotos, setCurrentLikedPhotos] = useState(LikedPhotos);

  

  console.log(currentLikedPhotos);
  return (
    // <Photo newPhotos={LikedPhotos} />

    <div id="container">
      LIKED PICTURES
       {currentLikedPhotos && currentLikedPhotos.map((photo, index) => {
        return <Photo like={true} photo={photo} index={index} />        
      }
      // changeLike={changeLikeProp}
      )}
    </div>
  )
}

export default LikedPage;