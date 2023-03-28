class ReviewsController < ApplicationController
  before_action :set_movie
  before_action :set_review, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  # GET /movies/:movie_id/reviews
  def index
    reviews = movie.reviews
    render json: reviews
  end

  # GET /movies/:movie_id/reviews/:id
  def show
    render json: review
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
  end

  # PATCH/PUT /movies/:movie_id/reviews/:id
  def update
    if review.user == current_user && review.update(review_params)
      render json: review
    else
      render json: review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /movies/:movie_id/reviews/:id
  def destroy
    if review.user == current_user
      review.destroy
    end
  end

  private
    def set_movie
      movie = Movie.find(params[:movie_id])
      render json: movie
    end

    def set_review
      review = Review.find(params[:id])
      render json: review
    end

    def review_params
      params.require(:review).permit(:title, :content, :rating)
    end
end

  
