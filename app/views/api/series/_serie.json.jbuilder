json.extract! serie, :id, :title, :genres
json.image_url asset_path(serie.image.url(:medium))
