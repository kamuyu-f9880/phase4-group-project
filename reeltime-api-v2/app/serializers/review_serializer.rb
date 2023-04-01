class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :rating, :user_id, :movie_id

  def user_id
    object.user.id
  end
  def movie_id
    object.movie.id
  end
end