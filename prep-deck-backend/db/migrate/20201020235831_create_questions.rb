class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :content
      t.string :choice_a
      t.string :choice_b
      t.string :choice_c
      t.string :choice_d
      t.string :correct_answer
      t.string :topic
      t.references :deck, foreign_key: true 
    end
  end
end
