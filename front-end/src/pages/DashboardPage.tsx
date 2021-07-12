import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import VideoCard from '../components/VideoCard';
import { apiRoute } from '../config';
import http from '../http/http';
import { mapVideoType, VideoType } from '../types';

const DashboardPage: React.FunctionComponent = () => {
  const [videos, setVideos] = useState([] as VideoType[]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await http.get(apiRoute.VIDEOS);
        const mappedData = response.data.map((d: any) => {
          return mapVideoType(d);
        });
        setVideos(mappedData)
      } catch (error) {
        console.error(error)
      }
    }
    getVideos()
  }, []);

  return (
    <>
      <h1 className="text-white text-center mb-30">Dashboard Page</h1>
      <Row>
        {videos.map((video: VideoType) => (
          <Col key={video.id} xs="4" className="mb-30">
            <VideoCard {...video}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DashboardPage;
