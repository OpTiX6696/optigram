import React from 'react';
import '../Styles/Photo.scss'



const Photo = ({photo, index}) => {

  const {urls: {raw}, alt_description, links: {download, self}} = photo

  // console.log("Single Photo", photo);
  // console.log(raw);

  return (
    <div key={index} className='photoContainer'>
      <div className="photo">
        {/* {props.index} */}
        <img alt="" src={raw} />
      </div>
      <div className="photoTitle">
        {/* <p>Download Link Here: {download}</p> */}
        {alt_description ? <p>{alt_description}</p> : <p>Description Unavailable</p>}
      </div>

      <div>
        <a href={self}>Download</a>
      </div>
    </div>
  )
}

export default Photo