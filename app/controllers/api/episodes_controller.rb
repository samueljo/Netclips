class Api::EpisodesController < ApplicationController
  def index
    @episodes = Episode.where("serie_id = ?", params[:series_id])
  end

  def show
  end
end
