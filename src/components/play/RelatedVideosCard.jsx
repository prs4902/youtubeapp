import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDaysAndMonthsSince, valueConverter } from '../../logic/script';
const RelatedVideosCard = ({title,thumbnail,viewCount,pubDate,channelTitle,videoId,categoryId}) => {
    const [vcount,setViewCount] = useState(0);
    const [pubdt,setPubDate] = useState({days:0,months:0});
    useEffect(()=>{
        setViewCount(valueConverter(viewCount));
        setPubDate(getDaysAndMonthsSince(pubDate));
    },[]);

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // This will create a smooth scrolling effect
        });
      };
  return (
        <Link onClick={handleScrollToTop} to={`../player/${videoId}/${categoryId}`} className="mb-4 sm:flex items-start gap-2">
            <img loading='lazy' src={thumbnail} alt="image" className='rounded-lg sm:w-48 sm:h-28 shrink-0' />
            <div>
                <h3 className='font-semibold line-clamp-2'>{title}</h3>
                <p className="text-secondary-gray text-sm">{channelTitle}</p>
                <p className='text-secondary-gray text-sm'>
                    {vcount} views 
                    <span className='inline-block w-1 h-1 mx-1 bg-secondary-gray translate-y-[-2px] rounded-full'></span>
                    {(pubdt.days<31)? pubdt.days+" days ago":pubdt.months+" months ago"}
                </p>
            </div>
        </Link>
  )
}

export default RelatedVideosCard