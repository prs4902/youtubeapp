import React from 'react'
import VideoContainer from './VideoContainer'
import RelatedVideosCard from './RelatedVideosCard'
import useYouTubeVideos from '../../API/youtube';
import { useParams } from 'react-router-dom';
const Player = () => {
    const {catId} = useParams();
    const API_URL = 'https://www.googleapis.com/youtube/v3/videos';
    
    const {videos,loading} = useYouTubeVideos(API_URL,catId);

    return (
        <div className="w-full">
        <div className='mx-4 xl:grid grid-cols-[65%_33%] gap-4 overflow-y-scroll hide-scrollbar'>
            <VideoContainer />
            <div className="related">
            {
                videos.map((item)=>{
                    return <RelatedVideosCard key={item.snippet.title} title={item.snippet.title} thumbnail={item.snippet.thumbnails.standard.url} viewCount={item.statistics.viewCount} pubDate={item.snippet.publishedAt} channelTitle={item.snippet.channelTitle} videoId={item.id} categoryId={item.snippet.categoryId} />
                     
                })
            }
            </div>
        </div>
        </div>
    )
}

export default Player