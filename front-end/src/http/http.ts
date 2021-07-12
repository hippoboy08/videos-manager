import axios from 'axios';
import { apiRoute } from '../config';

const http = axios.create({
  baseURL: `${apiRoute.BASE_URL}/api/v1`,
});

export default http;
