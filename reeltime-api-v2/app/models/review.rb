class Review < ApplicationRecord

    belongs_to :user
    belongs_to :movie

    validates :rating, presence: true
    validates :comments, presence: true, length: { maximum: 500 }
    
end
