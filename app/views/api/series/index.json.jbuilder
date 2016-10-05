@series.each do |serie|
  json.set! serie.id do
    json.partial! '/api/series/serie', serie: serie
  end
end
