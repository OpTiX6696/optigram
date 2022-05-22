import React, { useState} from 'react';
import { Credentials } from "./Credentials";
import { createApi } from 'unsplash-js';
import '../Styles/SearchQuery.scss';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';


const BaseLayout = () => {

  const [queryInput, setQueryInput] = useState('');
  const [queryError, setQueryError] = useState();
  const [photos, setPhotos] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [likedPhotos, setLikedPhotos] = useState(localStorage.getItem("likedPhotos") ? JSON.parse(localStorage.getItem("likedPhotos")) : [])
  
  const getPhotos = async () => {
    const unsplash = createApi({
      accessKey: Credentials.accessKey
    });
    let fetchedPhotos = []
    await unsplash.search.getPhotos({
      query: `${queryInput}`,
      page: page,
      perPage: 6,
      lang: 'en',
      orderBy: 'relevant'  
    }
    )
    .then(res => {

      // if (res.errors) {
      //   setQueryError("Unable to fetch. Either check network connection or refresh and try again.")
      //   console.log(`error occurred: ', ${res.errors}`);
      // } else {
        const allPhotos = res.response.results;
        console.log('All Picsss', allPhotos);
        if (allPhotos.length === 0) {
          setQueryError("Invalid query parameter")
          setLoading(false);
        } else {
          setPage((page) => (page + 1));
          fetchedPhotos = [...allPhotos]          
        }
      // }
    })
    .catch(err => {

      if (err.message === "expected JSON response from server.") {
        console.log("Fetch Error", err.message);
        if (photos) {
          console.log("End of page");
        } else {
          setQueryError("Query unavailable. Either check you spelling or use a similar word.")
        }
      } else if (err.message === "Failed to fetch") {
        console.log("Fetch Error", err.message)
        setQueryError("Unable to fetch. Either check network connection or refresh and try again.")
      }
      
    } )
    return fetchedPhotos

  }

  return (
    <div>
      <Outlet context={{queryInput, setQueryInput, queryError, setQueryError, photos, setPhotos, loading, setLoading, getPhotos, likedPhotos, setLikedPhotos}} />

      <Footer />
    </div>
  )
}

export default BaseLayout

