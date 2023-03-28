class MoviesController < ApplicationController
    def index
      movies = Movie.all
      render json: movies
    end
  
    def show
      movie = Movie.find(params[:id])
      render json: movie
    end
  
    def new
      movie = Movie.new
      render json: movie
    end
  
    def create
      movie = Movie.new(movie_params)
      if movie.save
        render json: movie
      else
        render json: { errors: movie.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def edit
      movie = Movie.find(params[:id])
      render json: movie
    end
  
    def update
      movie = Movie.find(params[:id])
      if movie.update(movie_params)
        render json: movie
      else
        render json: { errors: movie.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      movie = Movie.find(params[:id])
      movie.destroy
  
      render json: movie
    end
  
    private
      def movie_params
        params.require(:movie).permit(:title, :release_date, :plot_summary, :director_id)
      end
end
