class Api::EpisodesController < ApplicationController
  def index
    debugger
    @episodes = Episode.where("serie_id = ?", params[:id])
  end

  def show
  end
end
