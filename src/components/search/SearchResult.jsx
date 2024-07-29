import React from 'react'
import { useParams } from 'react-router-dom'
import useSearch from '../../API/useSearch';
import VideoCard from '../main/VideoCard';
import ErrorLoader from '../../ErrorLoader';
const SearchResult = () => {
    const {q} = useParams();
    const {videos,loading,error} = useSearch(q);

    // console.log(videos);
  return (
    <div className="m-4 grid-auto-fit">
            
          {
            (error)?<ErrorLoader errorMsg={error.message} statusCode={error.response.status} /> :
                videos.map((item)=>{
                    return <VideoCard key={item.snippet.title} playerUrl={`../player/${item.id}/${item.snippet.categoryId}`} title={item.snippet.title} thumbnail={item.snippet.thumbnails.high.url} channelTitle={item.snippet.channelTitle} videoId={item.id} viewCount={item.statistics.viewCount} pubDate={item.snippet.publishedAt} categoryId={item.snippet.categoryId} />
                     
                })
            }
    </div>
  )
}

export default SearchResult