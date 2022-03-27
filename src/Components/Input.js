import React, {useState} from 'react';
import FetchPics from './FetchPics'


export const SearchQuery = () => {

  const [query, setQuery] = useState('')
  const handleChange = (e) => {
      setQuery(e.target.value);
      return query
  }

  console.log(`in searchQuery ${query}`);
  

  return (
    <div>

      <input 
      type='text' 
      id='searchQuery' 
      value={query} 
      name='searchQuery' 
      onChange={handleChange}
      />

      <FetchPics inputVal={query} />

    </div>
  )
}

// export default SearchQuery;