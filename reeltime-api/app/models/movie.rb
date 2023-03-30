class Movie < ApplicationRecord
  belongs_to :director
  has_many :reviews
  has_many :movie_actors
  has_many :actors, through: :movie_actors
  validates :title, presence: true
  validates :description, presence: true
  validates :year, presence: true
  validates :duration, presence: true
  validates :rating, presence: true
end