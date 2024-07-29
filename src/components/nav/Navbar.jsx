import React, { useContext } from 'react'
import MenuIcon from '../../assets/menu.svg'
import YouTubeLogo from '../../assets/logo.svg'
import Avatar from '../../assets/avatar.avif'
import SearchLogo from '../../assets/search.svg'
import Searchbar from './Searchbar'
import { context } from '../../context/ContextProvider'
import { Link } from 'react-router-dom'
import MobileSearchbar from './MobileSearchbar'
const Navbar = () => {
  const {
    toggleAside,
    setShowMobileSearch,
    showMobileSearch,
  } = useContext(context);

  const handleAside = () => {
    toggleAside();
  }
  const handleSearchbar = ()=>{
    setShowMobileSearch(true);
  }
  return (
    <div className='flex justify-between items-center py-2 sm:px-4 px-2 sticky top-0 bg-white'>
      {/* show mobile searchbar */}
      {
        showMobileSearch && <MobileSearchbar/>
      }
      <div className="sec-1 flex items-center gap-4">

        <div onClick={handleAside} className="hidden sm:block w-8 h-8">
          <img src={MenuIcon} className='w-full h-full' alt="" />
        </div>

        <Link to='/' className="w-24 h-10">
          <img src={YouTubeLogo} className='w-full h-full' alt="" />
        </Link>
      </div>
      {/* searchbar */}
      <Searchbar />
      {/* account */}
      <div className="flex items-center gap-2">
        <div onClick={handleSearchbar} className="sm:hidden w-8 h-8">
          <img src={SearchLogo} className='rounded-full w-full h-full' alt="" />
        </div>
        <div className="flex h-10 w-10 overflow-hidden rounded-full md:ml-4">
            <img src='https://xsgames.co/randomusers/avatar.php?g=male' alt='Avtar'/>
        </div>

      </div>
    </div>
  )
}

export default Navbar