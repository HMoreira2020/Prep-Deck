class AddUserReferenceToDecks < ActiveRecord::Migration[6.0]
  def change
    add_reference :decks, :user, foreign_key: true 
  end
end
