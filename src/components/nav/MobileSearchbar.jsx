import React, { useContext, useEffect, useRef, useState } from 'react'
import Cross from '../../assets/cross.svg'
import { context } from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const MobileSearchbar = () => {
    const searchRef = useRef(null);
    const [searchInput,setSearchInput] = useState('');
    const navigate = useNavigate();
    const {
        setShowMobileSearch,
      } = useContext(context);
    
      const handleSearchbar = ()=>{
        setShowMobileSearch(false);
      }
      const submitresult = (e)=>{
        if(e.key === 'Enter' || e.keyCode === 13)
            {
                navigate(`search/${searchInput}`)
                setShowMobileSearch(false);
            }
      }
      useEffect(()=>{
        searchRef.current.focus();
      },[]);
  return (
    <div className='test w-full h-screen absolute top-0 left-0'>
        <div className="flex items-center justify-between px-3 py-2">
            <input ref={searchRef} onKeyDown={submitresult} onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder='Search' className='w-full bg-gray-50  px-6 py-2 rounded-full outline-none' />
            <img onClick={handleSearchbar} src={Cross} className='w-12 h-12' alt="" />
        </div>
    </div>
  )
}

export default MobileSearchbar