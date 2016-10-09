json.partial! '/api/series/serie', serie: @serie
json.image_url asset_path(@serie.image.url(:large))
json.extract! @serie, :description, :year, :avg_rating, :genres, :episodes
