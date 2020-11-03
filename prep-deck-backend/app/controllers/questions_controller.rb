class QuestionsController < ApplicationController
    # get '/questions', to: 'questions#index'
    def index
        questions = Question.all 
        render json: QuestionSerializer.new(questions).to_serialized_json
    end 

end
