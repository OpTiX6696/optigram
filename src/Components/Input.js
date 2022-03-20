import React, {useState} from 'react';


const SearchQuery = () => {

    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value);
        console.log(query)
        return query
    }

  return (
    <div>
        <input type='text' id='searchQuery' name='searchQuery' onChange={handleChange}/>
    </div>
  )
}

export default SearchQuery;