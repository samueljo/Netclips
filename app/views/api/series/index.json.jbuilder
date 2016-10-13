json.set! @favorite_series[0] do
  json.genreId 0
  json.series @favorite_series[1].each do |serie|
    json.partial! 'api/series/serie', serie: serie
    json.image_url asset_path(serie.image.url(:medium))
    json.current_episode current_episode(serie.current_watchings, serie.episodes)
  end
end

@genres.each do |genre|
  json.set! genre.name do
    json.genreId genre.id
    json.series genre.series do |serie|
      json.partial! '/api/series/serie', serie: serie
      json.image_url asset_path(serie.image.url(:medium))
      json.current_episode current_episode(serie.current_watchings, serie.episodes)
    end
  end
end
