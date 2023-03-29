class Actor < ApplicationRecord
    has_many :actormovies
    has_many :movies, through: :actormovies
  
    validates :name, presence: true
end