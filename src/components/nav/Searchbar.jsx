import React, { useState } from 'react'
import SearchLogo from '../../assets/search.svg'
import { Link } from 'react-router-dom'
const Searchbar = () => {
    const [searchInput,setSearchInput] = useState('');
    return (
        <div className="sec-2 hidden sm:flex items-center border border-black rounded-full pl-2 w-96">
            <input onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} type="text" placeholder='Search' className='rounded-lg outline-none w-full px-2 py-1' />
            <Link to={`search/${searchInput}`} className=" sm:cursor-pointer border border-l-black rounded-r-full bg-gray-50 px-4">
                <img src={SearchLogo} className='  w-8 h-10' alt="" />
            </Link>
        </div>
    )
}

export default Searchbar