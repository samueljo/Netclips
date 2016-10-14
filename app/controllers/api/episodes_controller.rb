class Api::EpisodesController < ApplicationController
  def index
    @episodes = Episode.includes(:serie).where("serie_id = ?", params[:series_id]).order(episode_number: :asc)
  end

  def show
    @episode = Episode.find(params[:id])
  end

end
