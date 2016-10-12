class Api::SearchController < ApplicationController
  def index
    if params[:query] == 'My List'
      @series = Favorite.get_my_list(current_user)
    else
      @series = Serie.search(params)
    end
  end
end
