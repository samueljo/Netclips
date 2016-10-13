class Api::CurrentWatchingsController < ApplicationController
  def create
    # find based on serie and user id (create or update)
      # create/update episode id
    current_watching = CurrentWatching.find_by(
      'serie_id = ? AND user_id = ?',
        params[:id],
        current_user.id
    )
    if current_watching
      current_watching.update(episode_id: params[:current_watching][:episode_id])
    else
      current_watching.episode_id = params[:current_watching][:episode_id]
      current_watching.save
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
