class Api::SeriesController < ApplicationController
  helper_method :current_episode

  def index
    @favorite_series = ['My List', Favorite.get_my_list(current_user)]
    @genres = Genre.includes(series: [:episodes, :current_watchings])
  end

  def show
    @serie = Serie.includes(:genres, :episodes, :reviews).find(params[:id])
    @current_user_review = @serie.reviews.where(user_id: current_user.id)
    @other_user_reviews = @serie.reviews.where.not(user_id: current_user.id)
  end

  def create
    @serie = Serie.new(serie_params)
    if @serie.save
      render :index
    else
      render json: @serie.errors.full_messages, status: 422
    end
  end

  def current_episode(current_watchings, episodes)
    current_watching = current_watchings.select { |current| current.user_id == current_user.id }
    if (current_watching[0])
      return episodes.select{ |episode| episode.id == current_watching[0].episode_id }[0]
    else
      return episodes.select { |episode| episode.episode_number == 1 }[0]
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
