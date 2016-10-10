json.extract! serie, :id, :title

json.reviews do
  json.partial! 'api/reviews/review', collection: serie.reviews, as: :review
end
