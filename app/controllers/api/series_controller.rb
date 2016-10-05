class Api::SeriesController < ApplicationController
  def index
    @series = Serie.all
  end

  def show
    @serie = Serie.find(params[:id])
  end

  def create
    @serie = Serie.new(serie_params)
    if @serie.save
      render :index
    else
      render json: @serie.errors.full_messages, status: 422
    end
  end

  private

  def serie_params
    params.require(:serie).permit(
      :title,
      :description,
      :year,
      :image,
      genre_ids: []
    )
  end
end
