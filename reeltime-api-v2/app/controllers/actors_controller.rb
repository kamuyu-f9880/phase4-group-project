class ActorsController < ApplicationController
  # GET /actors
  def index
    actors = Actor.all
    # use actor serializer to format the response data
    render json: actors, each_serializer: ActorSerializer
  end

  # POST /actors
  def create
    actor = Actor.new(actor_params)
    if actor.save
      # use actor serializer to format the response data
      render json: actor, serializer: ActorSerializer, status: :created
    else
      render json: actor.errors, status: :unprocessable_entity
    end
  end

  # GET /actors/:id
  def show
    actor = Actor.find(params[:id])
    # use actor serializer to format the response data
    render json: actor, serializer: ActorSerializer
  end

  # PUT /actors/:id
  def update
    actor = Actor.find(params[:id])
    if actor.update(actor_params)
      # use actor serializer to format the response data
      render json: actor, serializer: ActorSerializer
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
    params.require(:actor).permit(:name, :age, :gender)
  end
end
