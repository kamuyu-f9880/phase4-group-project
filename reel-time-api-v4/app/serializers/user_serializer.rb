class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
    
  
    has_many :reviews
    has_many :movies, through: :reviews
    has_many :directors, through: :movies
    has_many :reviews, through: :movies
end
