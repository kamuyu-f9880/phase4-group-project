class DirectorsController < ApplicationController
    # GET /directors
    def index
      directors = Director.all
      render json: directors
    end
  
    # GET /directors/:id
    def show
      director = Director.find(params[:id])
      render json: director
    end
  
    # POST /directors
    def create
      director = Director.new(director_params)
  
      if director.save
        render json: director, status: :created
      else
        render json: director.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /directors/:id
    def update
      director = Director.find(params[:id])
  
      if director.update(director_params)
        render json: director
      else
        render json: director.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /directors/:id
    def destroy
      director = Director.find(params[:id])
      director.destroy
      head :no_content
    end
  
    private
  
    def director_params
      params.require(:director).permit(:name)
    end
end
  
