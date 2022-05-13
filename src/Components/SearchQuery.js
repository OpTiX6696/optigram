import React, {useEffect} from 'react';
import RenderPhotos from "./RenderPhotos";
import loader from '../Imgs/Infinity-0.9s-200px.svg';
import InfiniteScroll from 'react-infinite-scroller';
import '../Styles/SearchQuery.scss';
import { Link, useOutletContext } from 'react-router-dom';
import Logo from './Logo';
import Skeleton from './Skeleton';


const SearchQuery = () => {

  const {queryInput, setQueryInput, queryError, setQueryError, photos, setPhotos, loading, setLoading, getPhotos, likedPhotos, setLikedPhotos} = useOutletContext()


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!queryInput) {
      setQueryError('Enter a valid query')
    } else {
      setQueryError('')
      setLoading(true)
      const newPhotos = await getPhotos()
      // console.log("ON SUBMIT", newPhotos);
      setLoading(false)
      setPhotos(newPhotos);
      // setQueryInput('')
    }
    // setQueryInput('')

  }
  
  useEffect(() => {
    if (loading) {
      setPhotos(null)
    }
  }, [setPhotos, loading])

  const getMorePhotos = async () => {
    const morePhotos = await getPhotos();
    setPhotos((existingPhotos) => [...existingPhotos, ...morePhotos])
  }

  const handleChange = (e) => {
    setQueryInput(e.target.value);
  }




  return (

    <div>
      
      <div id='header'>
        <Logo />

        

        <div className='queryInput'>
          <input 
          type='text' 
          id='searchQuery' 
          // value={queryInput} 
          name='searchQuery' 
          onChange={handleChange}
          />
          <button type='submit' onClick={handleSubmit}>Search</button>
        </div>

        <Link className='liked' to='/liked'>
        Liked Photos
        </Link>
      </div>

   
      {queryError?<div id='inputError'>{queryError}</div>:null}

      

      <div id='allPics'>

          {loading && (<div id='skeletonWrapper'>{
            [1,2,3,4,5,6,7,8].map(each => <Skeleton key={each} />)
          }
          </div>)}


          
        {photos ? (
          <InfiniteScroll
          pageStart={0}
          loadMore={getMorePhotos}
          hasMore={true || false}
          threshold={0.1*window.screen.height}
          loader={<div id='loader'><img alt='' src={loader} /></div>}
          >
            {<RenderPhotos newPhotos = {photos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos}/>}
          </InfiniteScroll>
          ) : null
        }

        
      </div>
        
    </div>
    
  )
}

export default SearchQuery;