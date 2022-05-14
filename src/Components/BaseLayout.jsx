import React, { useState} from 'react';
import { Credentials } from "./Credentials";
import { createApi } from 'unsplash-js';
import '../Styles/SearchQuery.scss';
import { Outlet } from 'react-router-dom';



const BaseLayout = () => {

  const [queryInput, setQueryInput] = useState();
  const [queryError, setQueryError] = useState();
  const [photos, setPhotos] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [likedPhotos, setLikedPhotos] = useState(localStorage.getItem("likedPhotos") ? JSON.parse(localStorage.getItem("likedPhotos")) : [])

  // console.log(localStorage.getItem("likedPhotos"))
  

  // JSON.parse(localStorage.getItem("likedPhotos"))
  
  const getPhotos = async () => {
    const unsplash = createApi({
      accessKey: Credentials.accessKey
      // `fetch` options to be sent with every request
      // headers: { 'X-Custom-Header': 'foo' },
    });
    let fetchedPhotos = null
    await unsplash.search.getPhotos({
      query: `${queryInput}`,
      page: page,
      perPage: 6,
      lang: 'en',
      orderBy: 'relevant'  
    }
      // `fetch` options to be sent only with _this_ request
      // { headers: { 'X-Custom-Header-2': 'bar' } },
    )
    .then(res => {
      if (res.errors) {
        setQueryError("Seems there's a problem with your network")
        // console.log(`error occurred: ', ${res.errors}`);
      } else {
        const allPhotos = res.response.results;
        if (allPhotos.length === 0) {
          setQueryError("Invalid query parameter")
        } else {
          setPage((page) => (page + 1));
          // console.log("ALL PHOTOS", allPhotos)
          fetchedPhotos = [...allPhotos]          
        }
      }
    })

    return fetchedPhotos

  }

  


  return (
    <div>
      <Outlet context={{queryInput, setQueryInput, queryError, setQueryError, photos, setPhotos, loading, setLoading, getPhotos, likedPhotos, setLikedPhotos}} />
    </div>
  )
}

export default BaseLayout

