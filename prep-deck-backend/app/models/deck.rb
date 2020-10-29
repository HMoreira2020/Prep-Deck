class Deck < ApplicationRecord
    belongs_to :user 
    has_many :decks_questions
    has_many :questions, through: :decks_questions

    # def already_has_question?(question) #call deck.already_has_question(@question)
    #     self.questions.include?(question) 
    # end 

    # def add_question(question) #call deck.add_question(@question)
    #     self.questions << question
    #     self.save
    # end 
    
    
end
