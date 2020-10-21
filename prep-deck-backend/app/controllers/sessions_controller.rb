class SessionsController < ApplicationController
    def create 
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user 
        else 
            flash[:error] = "Login is incorrect"
            #how do alerts work in this app 
            #is redirection necessary 
            #why when I reload the page does it end the session? 
            redirect_to root_path 
        end 
    end 

    def destroy
        session.delete(:user_id)
        redirect_to root_path 
    end 

    
    
end 