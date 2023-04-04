class Movie < ApplicationRecord
    has_and_belongs_to_many :actors
    belongs_to :director
    has_many :reviews
    validates :title, presence: true
  end
  