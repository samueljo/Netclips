class Api::SeriesController < ApplicationController
  def index
    @genres = Genre.all.includes(:series, :reviews)
    # also need to grab current episodes? & mylist
  end

  def show
    @serie = Serie.includes(:genres, :episodes).find(params[:id])
    # also need to includes: reviews
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
