class Api::CurrentWatchingsController < ApplicationController
  def create
    current_watching = CurrentWatching.find_by(
      'serie_id = ? AND user_id = ?',
        params[:current_watching][:serie_id],
        current_user.id
    )
    
    if current_watching
      if current_watching.update(episode_id: params[:current_watching][:episode_id])
        render json: {}
      else
        render json: current_watching.errors.full_messages, status: 422
      end
    else
      current_watching = CurrentWatching.new(current_watching_params)
      current_watching.user_id = current_user.id
      if current_watching.save
        render json: {}
      else
        render json: current_watching.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    current_watching = CurrentWatching.find_by(
      'serie_id = ? AND user_id = ?',
      params[:id],
      current_user.id
    )
    current_watching.destroy
    render json: {}
  end

  private

  def current_watching_params
    params.require(:current_watching).permit(:serie_id, :episode_id)
  end
end
