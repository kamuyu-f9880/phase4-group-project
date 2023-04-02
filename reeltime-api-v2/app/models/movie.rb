class Movie < ApplicationRecord

belongs_to :user

has_many :reviews
has_many :actors
has_many :directors

validates :title, presence: true, uniqueness: true
validates :description, presence: true
end
