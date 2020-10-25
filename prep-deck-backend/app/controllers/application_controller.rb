class ApplicationController < ActionController::API
  # before_action :authorized 
  
  # def encode_token(payload)
  #   #payload = {user_id: user.id}  which comes from controller
  #   JWT.encode(payload, 's3cr3t_p@55w0rd', 'HS256' )
  #   #tells it to hash the payload with this password and return a signature
  #   #jwt string: "eyJhbGciOiJIUzI1NiJ9.eyJzZWNyZXQiOiJzYXVjZSJ9.x_VuRoTTgmoVAY9-TMehHXCHGYJDrCHsgVC53vcLP5c" 
  #   #jwt is the encoded base64 of header + payload + signature
  #   #this method is used in controller to create a token or signature. token = encode_token({user_id: user.id})
  # end 

  # def auth_header 
  #   # { 'Authorization': 'Bearer <token>' }
  #   request.headers['Authorization']
  # end 

  # def decoded_token(token)
  #   #token => "eyJhbGciOiJIUzI1NiJ9.eyJzZWNyZXQiOiJzYXVjZSJ9.x_VuRoTTgmoVAY9-TMehHXCHGYJDrCHsgVC53vcLP5c" 
  #   if auth_header
  #     token = auth_header.split(' ')[1] 
  #     # headers: { 'Authorization': 'Bearer <token>' }
  #     begin 
  #       JWT.decode(token, 's3cr3t_p@55w0rd', true, { algorithim: 'HS256' })
  #       #JWT.decode => [{"user_id"=> 'user.id'}, {"alg"=>"HS256"}] 
  #     rescue JWT::DecodeError
  #       nil 
  #     end 
  #   end 
  # end 

  # def current_user
  #   if decoded_token
  #     # decoded_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
  #     # or nil if we can't decode the token
  #     user_id = decoded_token[0]['user_id']
  #     @user = User.find_by(id: user_id)
  #   end
  # end

  # def logged_in?
  #   !!current_user
  # end

  # def authorized
  #   render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  # end

end

