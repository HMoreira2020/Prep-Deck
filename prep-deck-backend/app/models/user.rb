class User < ApplicationRecord
    has_secure_password 
    
    validates :first_name, presence: true 
    validates :last_name, presence: true 
    validates :email, uniqueness: true, presence: true, 'valid_email_2/email': true

end
