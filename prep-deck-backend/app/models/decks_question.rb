class DecksQuestion < ApplicationRecord
    belongs_to :deck 
    belongs_to :question

    validates_uniqueness_of :deck_id, :scope => :question_id
    
end