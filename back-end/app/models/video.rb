class Video < ApplicationRecord
  mount_uploader :thumbnail, MediaUploader
  mount_uploader :media, MediaUploader
end
