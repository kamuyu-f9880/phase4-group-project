class User < ApplicationRecord
    before_save :downcase_email

    has_many :movies

    has_many :reviews
    has_many :movies, through: :reviews

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: {with: URI::MailTo::EMAIL_REGEXP}
    validates :password, presence: true

    def downcase_email
        self.email = email.downcase
    end
end
