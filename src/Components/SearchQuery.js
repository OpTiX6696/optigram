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
    // setPhotos([]);
    
    if (!queryInput) {
      setQueryError('Enter a valid query')
    } else {
      setQueryError('')
      setLoading(true);
      const newPhotos = await getPhotos()
      setLoading(false)
      setPhotos(newPhotos);
    }

  }

  const Infinityloader = () => {
    if (photos.length > 0) {
      return loader
    } else {
      return null
    }
  }
  

  
  useEffect(() => {
    if (loading) {
      setPhotos(null)
    }
  }, [setPhotos, loading])

  const getMorePhotos = async () => {
    const morePhotos = await getPhotos();
    console.log('MOREEEE', morePhotos);

    const photoExists = (aPhoto) => {
      return photos.find(e => e.id === aPhoto.id)
    }

    morePhotos.map(e => {
      if (!photoExists(e)) {
        setPhotos(existingPhotos => [...existingPhotos, e])
      }
      return null
    })
  }

  const handleChange = (e) => {
    setQueryInput(e.target.value);
  }

  const handleFocus = (e) => {
    setQueryInput('')
  }


  return (

    <div>
      
      <div id='header'>
        <Logo />

        

        <div className='queryInput'>
          <form>
            <input 
            type='text' 
            id='searchQuery' 
            value={queryInput} 
            name='searchQuery' 
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder='Enter Query'
            />

            <button type='submit' onClick={handleSubmit} id='submit'>Search</button>
            
          </form>
        </div>

        <Link className='liked' to='/liked'>
        Liked Photos
        </Link>
      </div>

   
      {queryError && !loading ?<div id='inputError'><p>{queryError}</p></div>:null}

      

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
          loader={<div id='loader'><img alt='' src={Infinityloader()} /></div>}
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