class DecksQuestion < ApplicationRecord
    belongs_to :deck 
    belongs_to :question
    
end