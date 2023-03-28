class Movie < ApplicationRecord
    belongs_to :director
    has_many :actor_movies
    has_many :actors, through: :actor_movies
    has_many :reviews
    has_many :users, through: :reviews
  
    validates :title, presence: true
    validates :release_date, presence: true
    validates :plot_summary, presence: true
    validates :director, presence: true
end