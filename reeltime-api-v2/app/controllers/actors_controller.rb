class ActorsController < ApplicationController
    # GET /actors
    def index
      actors = Actor.all
      render json: actors
    end
  
    # GET /actors/:id
    def show
      actor = Actor.find(params[:id])
      render json: actor
    end
  
    # POST /actors
    def create
      actor = Actor.new(actor_params)
  
      if actor.save
        render json: actor, status: :created
      else
        render json: actor.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /actors/:id
    def update
      actor = Actor.find(params[:id])
  
      if actor.update(actor_params)
        render json: actor
      else
        render json: actor.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /actors/:id
    def destroy
      actor = Actor.find(params[:id])
      actor.destroy
      head :no_content
    end
  
    private
  
    def actor_params
      params.require(:actor).permit(:name)
    end
end
