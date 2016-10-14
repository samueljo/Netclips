json.extract! episode, :id, :title, :summary, :video_url, :episode_number, :serie_id
json.image_url asset_path(episode.image.url(:medium))
