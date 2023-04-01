class User < ApplicationRecord

    has_many :movies

    has_many :reviews
    has_many :movies, through: :reviews

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
end
