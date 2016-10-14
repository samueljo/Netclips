class Api::ReviewsController < ApplicationController
  def show
    @review = Review.find(params[:id])
  end

  def create
    review = Review.new(review_params)
    review.user_id = current_user.id
    if review.save
      render_serie_show(review)
    else
      render json: review, status: :unprocessable_entity
    end
  end

  def update
    review = Review.find(params[:id])
    if review.update(review_params)
      render_serie_show(review)
    else
      render json: review, status: :unprocessable_entity
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render_serie_show(review)
  end

  private

  def render_serie_show(review)
    @serie = review.serie
    @current_user_review = @serie.reviews.where(user_id: current_user.id)
    @other_user_reviews = @serie.reviews.where.not(user_id: current_user.id)
    render 'api/series/show'
  end

  def review_params
    params.require(:review).permit(:serie_id, :rating, :body)
  end
end
