class Api::SearchController < ApplicationController
  def index
    @series = Serie.search(params)
  end
end
