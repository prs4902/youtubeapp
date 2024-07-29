import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyCP876fUEYpZa1zZ7QB4VVT1ULLaOTvzHo';

const useVideoInfo = (videoId) => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!videoId) return;

    const fetchVideoInfo = async () => {
        try {
          setLoading(true);
          setError(null); // Reset error state when a new request is made
          setVideoInfo({}); // Reset video info state when a new request is made
      
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,contentDetails,statistics`
          );
      
          // console.log('API response:', response.data); // Log the response for debugging
      
          if (response.data.items.length === 0) {
            throw new Error('Video not found');
          }
      
          setVideoInfo(response.data.items[0]);
        } catch (error) {
          console.error('Error fetching video info:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      

    fetchVideoInfo();
  }, [videoId]);

  return { videoInfo, loading, error };
};

export default useVideoInfo;
