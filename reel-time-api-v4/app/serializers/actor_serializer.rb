class ActorSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :movies
  belongs_to :movie
end
