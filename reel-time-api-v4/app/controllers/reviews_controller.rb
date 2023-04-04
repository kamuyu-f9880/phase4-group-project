class ReviewsController < ApplicationController
   
    # GET /movies/:movie_id/reviews
    def index
      movie = Movie.find(params[:movie_id])
      reviews = movie.reviews
      render json: reviews
    end
  
    # GET /movies/:movie_id/reviews/:id
    def show
      review = Review.find(params[:id])
      render json: review, serializer: ReviewSerializer
    end
  
    # POST /movies/:movie_id/reviews
    def create
      movie = Movie.find(params[:movie_id])
      review = current_user.reviews.new(review_params)
      review.movie = movie
  
      if review.save
        render json: review, status: :created
      else
        render json: review.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def review_params
      params.require(:review).permit(:user_id, :movie_id, :comment, :rating)
    end
  end
  
  
  
  
  
  
  # # GET /movies/:movie_id/reviews
  #   def index
  #     movie = Movie.find(params[:movie_id])
  #     reviews = movie.reviews
  #     render json: reviews
  #   end
  
  #   # GET /movies/:movie_id/reviews/:id
  #   def show
  #     review = Review.find(params[:id])
  #     render json: {
  #       user_id: review.user_id,
  #       name: review.name,
  #       comments: review.comments
  #     }
  #   end
  
  #   # POST /movies/:movie_id/reviews
  #   def create
  #     movie = Movie.find(params[:movie_id])
  #     review = current_user.reviews.new(review_params)
  #     review.movie = movie
  
  #     if review.save
  #       render json: review, status: :created
  #     else
  #       render json: review.errors, status: :unprocessable_entity
  #     end
  #   end
  
  #   private
  
  #   def review_params
  #     params.require(:review).permit(:user_id, :movie_id, :comment, :rating)
  #   end
  # end
  