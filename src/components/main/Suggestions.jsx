import React, { useContext } from 'react'
import Compass from '../../assets/compass.svg'
import { context } from '../../context/ContextProvider';
const Suggestions = () => {
    const youtubeCategories = [
        "All",
        "Gaming",
        "Music",
        "Mixes",
        "Live",
        "Sports",
        "News",
        "Learning",
        "Fashion & Beauty",
        "Podcasts",
        "Movies",
        "Trending",
        "Subscriptions",
        "Library",
        "History",
        "Watch Later",
        "Liked Videos",
        "Popular on YouTube",
        "Recently Uploaded",
        "Your Videos"
    ];
      
    const {
        toggleAside
      } = useContext(context);
    
      const handleAside = ()=>{
      toggleAside();
    }
  return (
    <ul className='flex items-center gap-3 overflow-scroll hide-scrollbar w-full sm:bg-white py-3 md:sticky top-0 z-10'>
        
        <li onClick={handleAside} className={`block sm:hidden shrink-0 bg-gray-100 cursor-default sm:cursor-pointer font-semibold capitalize rounded-lg px-4 py-2 text-nowrap`}>
            <img src={Compass} className='w-6 h-6' alt="logo" />
        </li>
        {
            youtubeCategories.map((cat,i)=>
    
                <li key={cat} className={`${(i==0)? 'bg-black text-white':'bg-gray-100'} cursor-default sm:cursor-pointer font-semibold capitalize rounded-lg px-4 py-2 text-nowrap`}>{cat}</li>
            )
        }
    </ul>
  )
}

export default Suggestions