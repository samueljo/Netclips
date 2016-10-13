json.extract! episode, :id, :title, :summary, :video_url, :episode_number
json.image_url asset_path(episode.image.url(:medium))
