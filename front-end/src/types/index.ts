import { apiRoute } from '../config';

export type VideoType = {
  src?: string;
  title?: string;
  date?: string;
  thumbnail?: string;
  id?: string;
};

const convertDate = (d: Date) => {
  const date = new Date(d);
  const D = (`0${date.getDate() + 1}`).slice(-2);
  const M = (`0${date.getMonth() + 1}`).slice(-2);
  const Y = date.getFullYear();
  return `${D}/${M}/${Y}`;
};

export const mapVideoType = (data: any) => {
  return {
    id: data.id,
    title: data.name,
    src: `${apiRoute.BASE_URL}${data.media.url}`,
    thumbnail: `${apiRoute.BASE_URL}${data.thumbnail.url}`,
    date: convertDate(data.updated_at),
  } as VideoType;
};
