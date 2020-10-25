class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create] 

    def create 
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            token = encode_token({ user_id: @user.id })
            render json: user, jwt: token, status: :accepted
        else
            render json: { message: 'Invalid username or password' }, status: :unauthorized
        end
    end 

    def destroy
        session.delete(:user_id)
        redirect_to root_path 
    end 

    def user_params
        params.require(:user).permit(:email, :password)
    end
    
    
end 