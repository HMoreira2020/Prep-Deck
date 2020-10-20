class UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users
    end 

    def create 
        #for some reason password does not show up in whitelisted user_params, only params so I couldn't do User.new(user_params)
        user = User.new(first_name: user_params[:first_name], last_name: user_params[:last_name], email: user_params[:email], password: params[:password])
        if user.save 
            session[:user_id] = user.id
            render json: user 
        end
    end 

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end
end



#Important Point: The body of the fetch request becomes the params sent to the backend
# In the fetch request, structure the request
# In the controller action, handle the request
# In the last line of the controller action, structure the response
# In the second .then, handle the response given to the fetch request
