@genres.each do |genre|
  json.set! genre.name do
    json.genreId genre.id
    json.series genre.series do |serie|
      json.partial! '/api/series/serie', serie: serie
      json.image_url asset_path(serie.image.url(:medium))
    end
  end
end
