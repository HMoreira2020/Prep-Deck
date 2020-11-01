class DecksController < ApplicationController
    before_action :set_deck, only: [:show, :update, :destroy]
    before_action :set_question, only: [:update, :destroy]

    #Get /decks/9 
    def show
        render json: DeckSerializer.new(@deck).to_serialized_json
    end 

     # PATCH/PUT /decks/9
  def update 
    question = Question.find(params[:question_id])
    @deck.questions << question
    if @deck.save 
      render json: DeckSerializer.new(@deck).to_serialized_json, status: :accepted
    else 
      render json: { errors: @deck.errors.full_messages }
    end 
  end

  # Delete /decks/9
  def destroy
    if @deck.questions.include?(@question)
      @deck.questions.delete(@question)
      render json: @deck, status: :accepted
    else 
      render json: { message: "Question is not in your deck." }, status: unprocessable_entity
    end
  end 
    
  private
    def set_deck
      @deck = Deck.find(params[:id])
    end

    def set_question
      @question = Question.find(params[:question_id])
    end 

    def deck_params
      params.require(:deck).permit(:name, :question_id)
    end


    

end

#Parameters {"deck_id"=>"9", "question_id"=>"52", "controller"=>"decks", "action"=>"update", "id"=>"9", "deck"=>{}} permitted: false>
##<Deck id: 9, name: "Heather's deck", created_at: "2020-10-28 04:26:19", updated_at: "2020-10-28 04:26:19", user_id: 8>
#question = Question.find(params[:question_id])