class AdminsController < ApplicationController
    before_action :require_admin
  
    def index
      admins = Admin.all
      render json: admins
    end
  
    private
  
    def require_admin
      return if current_user&.admin?
  
      render json: { error: 'You are not authorized to perform this action.' }, status: :unauthorized
    end
end
  
  