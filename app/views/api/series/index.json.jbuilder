@genres.each do |genre|
  json.set! genre.name do
    json.series genre.series do |serie|
      json.partial! '/api/series/serie', serie: serie
    end
  end
end
