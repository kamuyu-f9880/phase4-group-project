class Movie < ApplicationRecord

belongs_to :user

has_many :reviews
has_many :actors
has_many :directors

end
