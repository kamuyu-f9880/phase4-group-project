class User < ApplicationRecord
    CONFIRMATION_TOKEN_EXPIRATION = 20.minutes

    has_secure_password

    before_save :downcase_email

    has_many :movies

    has_many :reviews
    has_many :movies, through: :reviews

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: {with: URI::MailTo::EMAIL_REGEXP}
   

    def confirm!
        update_columns(confirmed_at: Time.current)
    end

    def confirmed?
        confirmed_at.present?
    end

    def generate_confirm_token
        signed_id expires_in: CONFIRMATION_TOKEN_EXPIRATION, purpose: :confirm_email
    end
  
    def unconfirmed?
      !confirmed?
    end 
    
    
    private


    def downcase_email
        self.email = email.downcase
    end
end
