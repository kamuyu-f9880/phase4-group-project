class MoviesController < ApplicationController
    # GET /movies
    def index
      movies = Movie.all
      render json: movies
    end
  
    # GET /movies/:id
    def show
      movie = Movie.find(params[:id])
      render json: movie
    end
  
    # POST /movies
    def create
      movie = Movie.new(movie_params)
  
      if movie.save
        render json: movie, status: :created
      else
        render json: movie.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /movies/:id
    def update
      movie = Movie.find(params[:id])
  
      if movie.update(movie_params)
        render json: movie
      else
        render json: movie.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /movies/:id
    def destroy
      movie = Movie.find(params[:id])
      movie.destroy
      head :no_content
    end
  
    private
  
    def movie_params
      params.require(:movie).permit(:title, :description)
    end
end
  