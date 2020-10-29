class Question < ApplicationRecord
    has_many :decks_questions
    has_many :decks, through: :decks_questions

end
