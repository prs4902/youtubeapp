// src/useYouTubeVideos.js
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { context } from '../context/ContextProvider';


const useYouTubeVideos = (API_URL, catId = 0) => {

  const { API_KEY } = useContext(context);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const language = 'en';
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(API_URL, {
          params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            regionCode: 'IN',
            relevanceLanguage: 'hin',
            maxResults: 10,
            key: API_KEY,
            videoCategoryId: catId,
          },
        });
        const filteredVideos = response.data.items.filter(
          video => video.snippet.defaultAudioLanguage === language
        );
        setVideos(response.data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();

  }, [API_URL,catId]);

  return { videos, loading, error };
};

export default useYouTubeVideos;
