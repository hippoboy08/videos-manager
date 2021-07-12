import { Card, CardBody, CardImg, CardLink } from 'reactstrap';
import { apiRoute } from '../config';
import { VideoType } from '../types';

const VideoCard: React.FunctionComponent<VideoType> = (props) => {
  const { title, date, id, thumbnail } = props;
  return (
    <Card className="card">
      <CardLink href={`video/${id}`} className="text-center">
        <CardImg
          top
          width="100%"
          src={thumbnail}
          alt="Card image cap"
        />
        <CardBody className="link">
          <h3>{title}</h3>
          <p>{date}</p>
        </CardBody>
      </CardLink>
    </Card>
  );
};

export default VideoCard;
