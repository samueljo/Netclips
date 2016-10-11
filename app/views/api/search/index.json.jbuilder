json.series @series do |serie|
  json.partial! '/api/series/serie', serie: serie
  json.image_url asset_path(serie.image.url(:medium))
end
