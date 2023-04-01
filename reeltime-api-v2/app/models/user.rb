class User < ApplicationRecord

    has_many :movies

    has_many :reviews
    has_many :movies, through: :reviews
end
