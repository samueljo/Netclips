class Api::FavoritesController < ApplicationController
  def index
    @series = Favorite.get_my_list(current_user)
    render 'api/search/index'
  end

  def create
    @favorite_serie = Favorite.new(favorite_params)
    @favorite_serie.user_id = current_user.id
    if @favorite_serie.save
      render json: {}
    else
      render json: @favorite_serie.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite_serie = Favorite.find(params[:id])
    @favorite_serie.destroy
    render json: {}
  end

  private

  def favorite_params
    params.require(:favorite).permit(:serie_id)
  end
end
