class Api::EpisodesController < ApplicationController
  def index
    @episodes = Episode.where("serie_id = ?", params[:series_id]).order(episode_number: :desc)
  end

  def show
    @episode = Episode.find(params[:id])
  end

end
