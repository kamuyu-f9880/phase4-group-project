class ReviewsController < ApplicationController
 # GET /movies/:movie_id/reviews
  def index
    reviews = Movie.reviews
    render json: reviews
  end

  # GET /movies/:movie_id/reviews/:id
  def show
    render json: {
      user_id: reviews.user_id,
      name: reviews.name,
      comments: reviews.comments
    }
  end

  # POST /movies/:movie_id/reviews
  def create
    review = current_user.reviews.new(review_params)
    review.movie = movie

    if review.save
      render json: review, status: :created
    else
      render json: review.errors, status: :unprocessable_entity
    end

    def user_params
      params.require(:review).permit(:user_id, :movie_id, :comments, :rating)
    end
  end
end