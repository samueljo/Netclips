json.series @series do |serie|
  json.partial! '/api/series/serie', serie: serie
  json.image_url asset_path(serie.image.url(:medium))
  current_episode = current_episode(serie.current_watchings, serie.episodes)
  json.current_episode current_episode
  json.episode_image_url asset_path(current_episode.image.url(:medium))
end
