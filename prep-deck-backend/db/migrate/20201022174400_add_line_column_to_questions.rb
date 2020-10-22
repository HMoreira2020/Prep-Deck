class AddLineColumnToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :content_2, :string
  end
end
