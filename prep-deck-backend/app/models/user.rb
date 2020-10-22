class User < ApplicationRecord
    has_secure_password 
    has_many :decks 
    
    validates :first_name, presence: true 
    validates :last_name, presence: true
    validates :password, presence: true  
    validates :email, uniqueness: true, presence: true, 'valid_email_2/email': true
    

end
