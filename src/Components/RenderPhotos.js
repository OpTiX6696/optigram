import React from "react";
import '../Styles/RenderPhotos.scss';
import { Photo } from './Photo';


const RenderPhotos = (props) => {

  const photos = props.newPhotos;
  const likedPhotos = props.likedPhotos;
  const setLikedPhotos = props.setLikedPhotos;

  return (
    <div id="container">
       {photos && photos.map((photo, index) => {
         const isLiked = likedPhotos.find((each) => each.id === photo.id)
        return <Photo photo={photo} index={index} like={isLiked} setLikedPhotos = {setLikedPhotos} />        
      }
      )}
    </div>
  )
}


export default RenderPhotos