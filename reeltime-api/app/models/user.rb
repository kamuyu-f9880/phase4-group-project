class User < ApplicationRecord
    has many :movies, through: :reviews
end
