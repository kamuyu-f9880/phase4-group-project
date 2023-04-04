class User < ApplicationRecord
    has_many :reviews
    has_many :movies, through: :reviews
    has_many :directors, through: :movies
    has_many :reviews, through: :movies
    
    
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: {with: URI::MailTo::EMAIL_REGEXP}
  end
  