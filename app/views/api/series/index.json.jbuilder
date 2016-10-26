json.set! @suggestions[0] do
  json.genreId -1
  json.series @suggestions[1].each do |random_serie|
    json.partial! 'api/series/index_item', serie: random_serie
  end
end

json.set! @favorite_series[0] do
  json.genreId 0
  json.series @favorite_series[1].each do |serie|
    json.partial! 'api/series/index_item', serie: serie
  end
end

json.set! @current_series[0] do
  json.genreId 1
  json.series @current_series[1].each do |serie|
    json.partial! 'api/series/index_item', serie: serie
  end
end

@genres.each do |genre|
  json.set! genre.name do
    json.genreId genre.id
    json.series genre.series do |serie|
      json.partial! 'api/series/index_item', serie: serie
    end
  end
end
