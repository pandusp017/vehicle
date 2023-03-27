import React from 'react'
import Filter from './Filter'
const Search = () => {
  return (
    <>
   <form className='search' >
    <input className='searchinput' type='text' placeholder='Search..'/>
    <button className='search-btn' type='submit' > Search</button>
     <Filter/>
   </form>
   <br/>
    </>
  )
}

export default Search
