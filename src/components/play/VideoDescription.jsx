import React, { useEffect, useState } from 'react'
import { getDaysAndMonthsSince, valueConverter } from '../../logic/script';

const VideoDescription = ({ description,views,pubdate }) => {
    const [vViews,setVViews] = useState(1);
    const [pubdt,setPubdt] = useState({days:0,months:0});

    useEffect(()=>{
        setVViews(valueConverter(views));
        setPubdt(getDaysAndMonthsSince(pubdate));

    },[views,pubdate])
    return (
        <div className="video-description bg-gray-100 rounded-lg p-2">
            <h3 className="views-upload-date font-semibold">{vViews}  {(pubdt.days<31)? pubdt.days+" days ago":pubdt.months+" months ago"}</h3>
            <p className='line-clamp-2'>
                {description}
            </p>
        </div>
    )
}

export default VideoDescription