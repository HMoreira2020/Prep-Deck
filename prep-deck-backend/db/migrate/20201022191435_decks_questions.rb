class DecksQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :decks_questions do |t|
      t.integer :deck_id
      t.integer :question_id
    end
  end
end
