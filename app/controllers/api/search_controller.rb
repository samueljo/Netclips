class Api::SearchController < ApplicationController
  def index
    if params[:query] == 'My List'
      @series = Favorite.get_my_list(current_user).distinct
    elsif params[:query] == 'Continue Watching'
      @series = Serie.joins(:episodes, :current_watchings).where('user_id = ?', current_user.id).distinct
    else
      @series = Serie.search(params).distinct
    end
  end
end
