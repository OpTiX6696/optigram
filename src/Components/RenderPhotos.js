import React, { createContext, useContext, useState } from "react";
import '../Styles/RenderPhotos.scss'
import { Photo } from './Photo'

// let liked, setLiked;

let LikedPhotos = []


const RenderPhotos = (props) => {

  const photos = props.newPhotos;
  const [like, setLike] = useState(false)

  const changeLikeProp = () => {
    setLike(!like)
  }

  const handleLiking = (arg) => {
    if (LikedPhotos.includes(arg)) {
      LikedPhotos = LikedPhotos.filter(each => each !== arg)
      console.log('REMOVE FROM LIKEDDDDD', LikedPhotos);
    } else {
      LikedPhotos = [...LikedPhotos, arg]
      console.log('ADDED TO LIKEDDDDD', LikedPhotos);
    }
  }

  console.log('OVERALL LIKED', LikedPhotos);

  return (
    <div id="container">
      {/* To render pics */}
       {photos && photos.map((photo, index) => {
        return <Photo like={like} changeLike={changeLikeProp} photo={photo} index={index} likedPhoto={handleLiking} />        
      }
      )}
    </div>
  )
}

// console.log('LLLLIIIIIKKKKEEEDDD', liked);


export default RenderPhotos