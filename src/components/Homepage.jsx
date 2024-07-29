import React from 'react'
import Main from './main/Main'
import Aside from './aside/Aside'

const Homepage = () => {
  return (
    
      <div className='flex items-start'>
        <Aside />
        <Main />
      </div>
    
  )
}

export default Homepage