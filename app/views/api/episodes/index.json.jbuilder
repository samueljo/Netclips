json.array! @episodes do |episode|
  json.partial! '/api/episodes/episode', episode: episode
end
