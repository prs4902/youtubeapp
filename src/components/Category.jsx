import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useYouTubeVideos from '../API/youtube';
import ErrorLoader from '../ErrorLoader';
import VideoCard from './main/VideoCard';

const Category = () => {
    const { catId } = useParams();
    
    const API_URL = 'https://www.googleapis.com/youtube/v3/videos';
    const { videos, loading, error } = useYouTubeVideos(API_URL, catId);
    
    return (
        <div className='m-4 grid-auto-fit'>
            {
                (error) ? <ErrorLoader errorMsg={error.message} statusCode={error.response.status} /> :
                        videos.map((item) => {
                            return <VideoCard playerUrl={`../player/${item.id}/${item.snippet.categoryId}`} key={item.snippet.title} title={item.snippet.title} thumbnail={item.snippet.thumbnails.standard.url} viewCount={item.statistics.viewCount} pubDate={item.snippet.publishedAt} channelTitle={item.snippet.channelTitle} videoId={item.id} categoryId={item.snippet.categoryId} />

                        })
            }
        </div>
    )
}

export default Category