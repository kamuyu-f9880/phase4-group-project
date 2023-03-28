class ReviewsController < ApplicationController
    before_action :set_movie
    before_action :set_review, only: [:show, :update, :destroy]
  
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
      review = movie.reviews.new(review_params)
  
      if review.save
        render json: review, status: :created, location: movie_review_url(@movie, @review)
      else
        render json: review.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /movies/:movie_id/reviews/:id
    def update
      if review.update(review_params)
        render json: review
      else
        render json: review.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /movies/:movie_id/reviews/:id
    def destroy
      review.destroy
      head :no_content
    end
  
    private
  
    def set_movie
      movie = Movie.find(params[:movie_id])
      render json: movie, status: :ok
    end
  
    def set_review
      review = movie.reviews.find(params[:id])
      render json: review
    end
  
    def review_params
      params.require(:review).permit(:title, :body, :rating)
    end
end
  
