import React, { useEffect, useState } from 'react'
import CommentCard from './comment/CommentCard'
import VideoDescription from './VideoDescription'
import AboutChannel_Video from './AboutChannel_Video'
import { useParams } from 'react-router-dom'
import useVideoInfo from '../../API/useVideoInfo'
import { valueConverter } from '../../logic/script'

const VideoContainer = () => {
  const [title,setTitle] = useState('');
  const [channelTitle,setChannelTitle] = useState('');
  const [vDescription,setVDescription] = useState('');
  const [like,setLike] = useState(0);
  const [commentCount,setCommentCount] = useState(0);
  const [vuploadDate,setVUploadDate] = useState('');
  const [videoViews,setVideoViews] = useState(1);
 
  const { vId, catId } = useParams();

  const {videoInfo} = useVideoInfo(vId);
  
  const [snippet, setSnippet] = useState(null);
  const [contentDetails, setContentDetails] = useState(null);
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const fetchAndSetData = async () => {
      if (videoInfo) {
        setSnippet(videoInfo.snippet);
        setContentDetails(videoInfo.contentDetails);
        setStatistics(videoInfo.statistics);

        setChannelTitle(snippet.channelTitle);
        setTitle(snippet.title);
        setVDescription(snippet.description);
        setLike(statistics.likeCount);
        setCommentCount(valueConverter(statistics.commentCount));
        setVideoViews(statistics.viewCount);
        setVUploadDate(snippet.publishedAt);
      }
    };

    fetchAndSetData();
  }, [videoInfo]);
  return (
    <div className="video-container">
      {/* <video src='https://www.youtube.com/f44406ca-2acb-4535-bd10-aaeca8e3ad84' className='w-full h-96 border-2 rounded-lg'></video> */}
      <iframe className='w-full h-80 sm:h-[500px] rounded-lg' src={`https://www.youtube.com/embed/${vId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      {/* <img src={Image} className='w-full h-96' alt="" /> */}
      <h3 className='font-bold text-lg line-clamp-2 capitalize'>{title || 'Title Not Available'}</h3>
      {/* about video & channel*/}
      <AboutChannel_Video channelTitle={channelTitle} likes={like} />
      {/* description */}
      <VideoDescription description={vDescription} views={videoViews} pubdate={vuploadDate} />
      {/* comment section */}
      <div className="comments mt-4">
        <h3 className="text-lg capitalize font-bold">{commentCount} comments</h3>
        <CommentCard />
      </div>
    </div>
  )
}

export default VideoContainer