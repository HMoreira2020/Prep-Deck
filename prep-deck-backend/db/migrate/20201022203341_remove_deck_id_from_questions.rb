class RemoveDeckIdFromQuestions < ActiveRecord::Migration[6.0]
  def change
    remove_column :questions, :deck_id
  end
end
