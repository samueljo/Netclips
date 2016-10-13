json.partial! '/api/series/serie', serie: @serie
json.image_url asset_path(@serie.image.url(:large))
json.extract! @serie, :description, :year, :avg_rating, :genres, :episodes
json.current_user_review @current_user_review
json.other_user_reviews @other_user_reviews
current_episode = current_episode(@serie.current_watchings, @serie.episodes)
json.current_episode current_episode
json.episode_image_url asset_path(current_episode.image.url(:large))
