class Movie < ApplicationRecord
    belongs to :director
    has many :actors, through: :movies
    has many :users, through: :reviews
end
