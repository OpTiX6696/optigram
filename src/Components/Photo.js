import React from 'react';
import '../Styles/Photo.scss';
import { AiOutlineDownload } from 'react-icons/ai';



export const Photo = ({like, photo, index, setLikedPhotos}) => {

  const {urls: {raw}, alt_description, links: {download}} = photo;


  const handleLike = () => {


    setLikedPhotos(likedPhoto => {

      const isPhotoLiked = likedPhoto.find(e => e.id === photo.id)

      if (isPhotoLiked) {
        return likedPhoto.filter(e => e.id !== photo.id)
      } else {
        return [...likedPhoto, photo]
      }
    })
  }
  


  return (
    <div key={index} className='photoContainer'>
      <div className="photo">
        <img alt="" src={raw} />
      </div>
      <div className="photoTitle">
        {alt_description ? <p>{alt_description}</p> : <p>Description Unavailable</p>}
      </div>

      <div className='controls'>

        <a className='downloadBtn' href={`${download}&force=true`} rel="no-follow" download><AiOutlineDownload className= 'downloadImg' /></a>

        <button onClick={handleLike} className='likeBtn'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid" width="100%" height='100%' outline="0" style={{margin: "auto", background: "rgb(255, 255, 255)", display: "block", borderBlock: "white", borderBlockColor: "white"}}>
         
            <path  stroke="rgba(243, 95, 95, 0.799)" strokeWidth="20" fill={ like ? 'red' : 'none'} d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

