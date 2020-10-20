class SessionsController < ApplicationController
    def create 
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user 
        else 
            flash[:error] = "Login is incorrect"
        end 
    end 

    def destroy
        session.delete(:user_id)
        
    end 

    
    
end 