class ReviewsController < ApplicationController
    before_action :set_movie
    before_action :set_review, only: [:edit, :update, :destroy]
  
    def create
      review = movie.reviews.new(review_params)
      review.user = current_user
  
      if review.save
        redirect_to movie, notice: 'Review was successfully created.'
      else
        render 'movies/show'
      end
    end
  
    def edit
    end
  
    def update
      if review.update(review_params)
        redirect_to movie, notice: 'Review was successfully updated.'
      else
        render 'movies/show'
      end
    end
  
    def destroy
      review.destroy
      redirect_to movie, notice: 'Review was successfully destroyed.'
    end
  
    private
      def set_movie
        movie = Movie.find(params[:movie_id])
        render json: movie
      end
  
      def set_review
        review = current_user.reviews.find(params[:id])
        render json: review
      end
  
      def review_params
        params.require(:review).permit(:title, :body, :rating)
      end
end
