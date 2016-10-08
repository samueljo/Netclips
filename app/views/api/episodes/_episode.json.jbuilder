json.extract! episode, :id, :title, :summary, :video_url
json.image_url asset_path(episode.image.url(:medium))
