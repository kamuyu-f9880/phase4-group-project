class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :director, :actors

  def director
    DirectorSerializer.new(object.director).attributes
  end

  def actors
    object.actors.map do |actor|
      ActorSerializer.new(actor).attributes
    end
  end
end