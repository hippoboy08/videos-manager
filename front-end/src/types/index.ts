import { apiRoute } from "../config"

export type VideoType = {
	src?: string,
  title?: string,
  date?: string,
  thumbnail?: string,
	id?: string
}

export const mapVideoType = (data: any) => {
	return {
		id: data.id,
		title: data.name,
		src: `${apiRoute.BASE_URL}${data.video}`,
		thumbnail: `${apiRoute.BASE_URL}${data.thumbnail}`,
		date: data.date
	} as VideoType
}