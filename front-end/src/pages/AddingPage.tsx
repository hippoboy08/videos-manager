import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Col,
  CustomInput,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import Loading from '../components/Loading';
import { apiRoute } from '../config';
import http from '../http/http';

const AddingPage: React.FunctionComponent = () => {
  const history = useHistory();
  const addingRef = useRef<any>({
    name: '',
    video: null,
    thumbnail: null,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: any) => {
    addingRef.current.name = event.target.value;
  };

  const handleFileChange = (event: any) => {
    const currentFile = event.target.files[0];

    if (currentFile.type.includes('video')) {
      addingRef.current.video = currentFile;
    }

    if (event.target.accept.includes('image')) {
      addingRef.current.thumbnail = currentFile;
    }
  };

  const createVideo = async (data: FormData) => {
    try {
      setLoading(true);
      await http.post(apiRoute.VIDEOS, data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      current: { name, video, thumbnail },
    } = addingRef;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('media', video);
    formData.append('thumbnail', thumbnail);
    await createVideo(formData);
    history.push('/dashboard');
  };

  return (
    <>
      <Loading loading={loading}/>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="videoName" sm={2} className="text-white">
            Video Name
          </Label>
          <Col sm={10}>
            <Input
              name="videoName"
              id="videoName"
              placeholder="Video Name"
              onChange={handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="video-uploading">
            Video
          </Label>
          <Col sm={10}>
            <CustomInput
              onChange={handleFileChange}
              type="file"
              id="video-uploading"
              name="video"
              label="Choose a video and drop it here"
              multiple={false}
              accept="video/*"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="thumbnail" sm={2} className="text-white">
            Thumbnail
          </Label>
          <Col sm={10}>
            <CustomInput
              onChange={handleFileChange}
              type="file"
              id="thumbnail-uploading"
              name="thumbnail"
              label="Choose a image and drop it here"
              multiple={false}
              accept="image/*"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}></Col>
          <Col sm={10}>
            <Button>Save</Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};

export default AddingPage;
