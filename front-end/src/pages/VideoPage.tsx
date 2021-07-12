import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import Loading from '../components/Loading';
import { apiRoute } from '../config';
import http from '../http/http';
import { mapVideoType, VideoType } from '../types';


const VideoPage: React.FunctionComponent = () => {
  const params = useParams<{ id: string }>();
  const [video, setVideo] =
    useState<VideoType>();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { id } = params;
    const getVideo = async (id: string) => {
      try {
        setLoading(true)
        const response = await http.get(`${apiRoute.VIDEOS}/${id}`);
        const mappedData = mapVideoType(response.data.data);
        setVideo(mappedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      getVideo(id) as VideoType;
    }
  }, [params]);

  const handleDelete = async (id: string) => {
    if (id) {
      try {
        setLoading(true)
        await http.delete(`${apiRoute.VIDEOS}/${id}`);
        history.push('/dashboard')
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <>
      <Loading loading={loading}/>

      {video && (
        <div className="flex items-center column">
          <Button color="danger" className="mb-30" onClick={() => handleDelete(video.id ?? '')}>Remove Video</Button>
          <video key={video.src} width="800" height="500" controls poster={video.thumbnail}>
            <source src={video.src} type="video/mp4" />
          </video>
          <div>
            <h3>{video.title}</h3>
            <p>{video.date}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPage;
