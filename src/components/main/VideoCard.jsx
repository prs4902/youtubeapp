import React, { useEffect, useState } from 'react'
import Thumbnail from '../../assets/thumbnail/thumb.jpg'
import { Link } from 'react-router-dom'
import { valueConverter,getDaysAndMonthsSince } from '../../logic/script'
const VideoCard = ({title,thumbnail,viewCount,pubDate,channelTitle,videoId,categoryId,playerUrl=`player/${videoId}/${categoryId}`}) => {
    // counter converter
    
  const [uploadDate,setUploadDate] = useState({days:0,months:0});
  const [viewsCount,setViewCount] = useState(1);
  useEffect(()=>{
    setUploadDate(getDaysAndMonthsSince(pubDate));
    setViewCount(valueConverter(viewCount));
  },[]);
    return (
        <Link to={playerUrl}>
            <img src={thumbnail} alt="" className='w-full h-56 rounded-lg object-cover' />

            <div className="video-info mt-2 flex items-start gap-2">
            <img className='w-10 h-10 rounded-full object-cover' src='https://xsgames.co/randomusers/avatar.php?g=pixel     ' alt='Avtar'/>
                <div>
                    <h3 className='line-clamp-2 font-semibold'>{title}</h3>
                    <p className="line-clamp-1 text-secondary-gray">{channelTitle}</p>
                    <p className="text-secondary-gray line-clamp-1">
                        {viewsCount} views
                        <span className='inline-block p-[2px] rounded-full bg-primary-gray mx-1 translate-y-[-2px]'></span>
                        {(uploadDate.days<31)? uploadDate.days+" days ago":uploadDate.months+" months ago"}
                        </p>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard