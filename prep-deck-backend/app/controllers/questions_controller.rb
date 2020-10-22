class QuestionsController < ApplicationController

    def index 
        questions = Question.all 
        render json: questions 
    end 

    def create 
        
    end 


end
