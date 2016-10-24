json.set! @suggestions[0] do
  json.genreId -1
  json.series @suggestions[1].each do |serie|
    random_genre = serie.genres.sample
    random_serie = random_genre.series.sample
    json.partial! 'api/series/serie', serie: random_serie
    json.image_url asset_path(random_serie.image.url(:medium))
    current_episode = current_episode(random_serie.current_watchings, random_serie.episodes)
    json.current_episode current_episode
    json.episode_image_url asset_path(current_episode.image.url(:medium))
  end
end

json.set! @favorite_series[0] do
  json.genreId 0
  json.series @favorite_series[1].each do |serie|
    json.partial! 'api/series/serie', serie: serie
    json.image_url asset_path(serie.image.url(:medium))
    current_episode = current_episode(serie.current_watchings, serie.episodes)
    json.current_episode current_episode
    json.episode_image_url asset_path(current_episode.image.url(:medium))
  end
end

json.set! @current_series[0] do
  json.genreId 1
  json.series @current_series[1].each do |serie|
    json.partial! 'api/series/serie', serie: serie
    json.image_url asset_path(serie.image.url(:medium))
    current_episode = current_episode(serie.current_watchings, serie.episodes)
    json.current_episode current_episode
    json.episode_image_url asset_path(current_episode.image.url(:medium))
  end
end

@genres.each do |genre|
  json.set! genre.name do
    json.genreId genre.id
    json.series genre.series do |serie|
      json.partial! '/api/series/serie', serie: serie
      json.image_url asset_path(serie.image.url(:medium))
      current_episode = current_episode(serie.current_watchings, serie.episodes)
      json.current_episode current_episode
      json.episode_image_url asset_path(current_episode.image.url(:medium))
    end
  end
end
