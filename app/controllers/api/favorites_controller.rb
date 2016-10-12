class Api::FavoritesController < ApplicationController
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
    @favorite = Favorite.find_by(
      'serie_id = ? AND user_id = ?',
      params[:id],
      current_user.id
    )
    @favorite.destroy
    render json: {}
  end

  private

  def favorite_params
    params.require(:favorite).permit(:serie_id)
  end
end
