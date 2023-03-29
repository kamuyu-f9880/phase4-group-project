class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :movie_id
      t.string :title
      t.string :comments
      t.integer :rating

      t.timestamps
    end
  end
end
