import React, { useEffect, useState } from 'react'
import Image from '../../assets/avatar.avif'
import Like from '../../assets/like.svg'
import DisLike from '../../assets/dislike.svg'
import Share from '../../assets/share.svg'
import Download from '../../assets/download.svg'
import ThreeDots from '../../assets/threeDots.svg'
import {valueConverter} from '../../logic/script'

const AboutChannel_Video = ({channelTitle,likes}) => {
    const [vlikes,setVLikes] = useState(0);
    useEffect(()=>{
        setVLikes(valueConverter(likes));
    },[likes])
    return (
        <div className="about-video my-4 xl:flex items-center justify-between">

            <div className="flex items-center gap-1 mb-2 xl:mb-0">
                <img src={Image} alt="profile" className='w-14 h-14 rounded-full object-cover' />
                <div>
                    <h3 className='font-semibold capitalize'>{channelTitle}</h3>
                    <p className='text-sm text-nowrap'>253k subscribers</p>
                </div>
                <button className='text-sm py-2 px-6 rounded-full bg-black text-white'>Subscribe</button>
            </div>
            <div className="impressions flex items-center gap-3">
                {/* likes & dis */}
                <div className="like-dislike flex items-center rounded-full">
                    <div className="like flex gap-1 font-semibold text cursor-default sm:cursor-pointer px-4 py-2 rounded-l-full hover:bg-gray-200 bg-gray-100">
                        <img src={Like} alt="" className='w-6 h-6' />
                        <p>{vlikes}</p>
                    </div>
                    <div className="dislike border-l hover:bg-gray-200 bg-gray-100 border-gray-500 py-2 px-4 rounded-r-full  cursor-default sm:cursor-pointer">
                        <img src={DisLike} alt="" className='w-6 h-6' />
                    </div>
                </div>
                {/* share */}
                <div className="share bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full flex gap-1 font-semibold text cursor-default sm:cursor-pointer">
                    <img src={Share} alt="" className='w-6 h-6' />
                    <p className='hidden sm:block'>Share</p>
                </div>
                {/* download */}
                <div className="downlaod bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full flex gap-1 font-semibold text cursor-default sm:cursor-pointer">
                    <img src={Download} alt="" className='w-6 h-6' />
                    <p className='hidden sm:block'>Download</p>
                </div>
                {/* three dots */}
                <div className="three-dots bg-gray-100 hover:bg-gray-200 px-2 py-2 rounded-full flex gap-1 font-semibold text cursor-default sm:cursor-pointer">
                    <img src={ThreeDots} alt="" className='w-6 h-6' />
                </div>
            </div>

        </div>
    )
}

export default AboutChannel_Video