import React, {useState} from 'react';
import { Credentials } from "./Credentials";
import { createApi } from 'unsplash-js';
import RenderPhotos from "./RenderPhotos";
import loader from '../Loader/Infinity-0.9s-200px.svg';
import InfiniteScroll from 'react-infinite-scroller';
import '../Styles/SearchQuery.scss'




export const SearchQuery = () => {

  const [queryInput, setQueryInput] = useState();
  const [queryError, setQueryError] = useState();
  const [photos, setPhotos] = useState();
  const [page, setPage] = useState(1);

  
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
      perPage: 4,
      lang: 'en',
      orderBy: 'relevant'  
    }
      // `fetch` options to be sent only with _this_ request
      // { headers: { 'X-Custom-Header-2': 'bar' } },
    )
    .then(res => {
      if (res.errors) {
        console.log(`error occurred: ', ${res.errors}`);
      } else {
        const allPhotos = res.response.results;
        if (allPhotos.length === 0) {
          setQueryError("Invalid query parameter")
        } else {
          setPage((page) => (page + 1));
          console.log("ALL PHOTOS", allPhotos)
          fetchedPhotos = [...allPhotos]          
        }
      }
    })

    return fetchedPhotos

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!queryInput) {
      setQueryError('Enter a valid query')
    } else {
      setQueryError('')
      const newPhotos = await getPhotos()
      console.log("ON SUBMIT", newPhotos);
      setPhotos(newPhotos);
    }

  }

  const getMorePhotos = async () => {
    const morePhotos = await getPhotos()
    console.log(`MORE PICS ${morePhotos}`);
    setPhotos((existingPhotos) => [...existingPhotos, ...morePhotos])
  }

  const handleChange = (e) => {
    setQueryInput(e.target.value);
  }




  return (

    <div >
      <div id='header'>
        <div id='logo'>
          <h1>Optigram</h1>
        </div>


        <div className='queryInput'>
          <input 
          type='text' 
          id='searchQuery' 
          // value={queryInput} 
          name='searchQuery' 
          onChange={handleChange}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
      

   
      {queryError?<div id='inputError'>{queryError}</div>:null}
     

      <div id='allPics'>

        {photos ? (
          <InfiniteScroll
          pageStart={0}
          loadMore={getMorePhotos}
          hasMore={true || false}
          threshold={0.1*window.screen.height}
          loader={<div id='loader'><img alt='' src={loader} /></div>}
          >
            {<RenderPhotos newPhotos = {photos} />}
          </InfiniteScroll>
          ) : null
        }
      </div>
        
    </div>
    
  )
}

export default SearchQuery;