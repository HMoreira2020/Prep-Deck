class QuestionSerializer 
    def initialize(question_object)
        @question = question_object 
    end 

    def to_serialized_json
        @question.to_json(:include => {
          :decks => {:only => :id}
        })
      end
end 