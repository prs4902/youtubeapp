import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { context } from "../context/ContextProvider";

const SEARCH_API_URL = 'https://www.googleapis.com/youtube/v3/search';
const VIDEOS_API_URL = 'https://www.googleapis.com/youtube/v3/videos';

function useSearchWithCategory(query) {
  const { API_KEY } = useContext(context);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      setError(null);
      setLoading(true);
      try {
        // Fetch video IDs based on search query
        const searchResponse = await axios.get(SEARCH_API_URL, {
          params: {
            part: 'snippet',
            type: 'video',
            maxResults: 10,
            q: query,
            key: API_KEY,
          }
        });
        
        const videoIds = searchResponse.data.items.map(item => item.id.videoId).join(',');
        
        if (!videoIds) {
          setVideos([]);
          setLoading(false);
          return;
        }

        // Fetch detailed information for each video including categoryId
        const videosResponse = await axios.get(VIDEOS_API_URL, {
          params: {
            part: 'snippet,contentDetails,statistics',
            id: videoIds,
            key: API_KEY,
          }
        });

        console.log(videosResponse.data);
        setVideos(videosResponse.data.items);
      } catch (err) {
        setError(err || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      getVideos();
    } else {
      setVideos([]);
    }
  }, [query, API_KEY]);

  return { videos, loading, error };
}

export default useSearchWithCategory;
