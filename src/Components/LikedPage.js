import React from "react";
import { Photo } from "./Photo";
import { useOutletContext } from "react-router-dom";
import Logo from "./Logo";
import { Link } from 'react-router-dom';



const LikedPage = () => {

  const {likedPhotos, setLikedPhotos} = useOutletContext();

  return (


    <div id="container">

<div id='header'>
        <Logo />

        <Link className='back' to='/search'>
        Back
        </Link>
      </div>

      {/* LIKED PICTURES */}
       {likedPhotos.map((photo, index) => {
        // const isLiked = likedPhotos.find((each) => each.id === photo.id)

        return <Photo setLikedPhotos={setLikedPhotos} like={true} photo={photo} index={index} />        
      }
      // changeLike={changeLikeProp}
      )}
    </div>
  )
}

export default LikedPage;