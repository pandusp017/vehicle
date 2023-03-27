import React from 'react'
import { BiFilter } from 'react-icons/bi';


const Filter = () => {
  return (
    <>
  <h6 className='main'> Filter by vehicle type:-<button id='filter-button'
  className='button'>Filter<BiFilter/></button></h6>

  {/* <div id='filter-container' className='filters'>
    <ul className='filters_list'>
      <li>
        <input id='f1' type='checkbox'/>
        <label for="f1"> vehicle</label>
      </li>
      <li>
        <input id='f2' type='checkbox'/>
        <label for="f2"> Automobile</label>
      </li>
      <li>
        <input id='f3' type='checkbox'/>
        <label for="f3"> car</label>
      </li>

      <li>
        <input id='f4' type='checkbox'/>
        <label for="f4"> Truck</label>
      </li>
    </ul>
  </div> */}
   
    </>
  )
}

export default Filter
