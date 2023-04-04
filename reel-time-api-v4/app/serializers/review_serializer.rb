class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment

  belongs_to :user
  belongs_to :movie


end
