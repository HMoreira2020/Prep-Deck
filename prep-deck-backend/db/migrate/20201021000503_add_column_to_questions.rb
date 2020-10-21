class AddColumnToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_reference :questions, :deck, foreign_key: true 
  end
end
