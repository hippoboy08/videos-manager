json.extract! video, :id, :name, :thumbnail, :media, :created_at, :updated_at
json.url video_url(video, format: :json)
