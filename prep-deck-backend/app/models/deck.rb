class Deck < ApplicationRecord
    belongs_to :user 
    has_many :decks_questions
    has_many :questions, through: :decks_questions
    
end
