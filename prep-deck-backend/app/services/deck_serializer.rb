class DeckSerializer 
    def initialize(deck_object)
        @deck = deck_object 
    end 

    def to_serialized_json
        @deck.to_json(:include => [:questions])
      end
end 