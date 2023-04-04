class CreateActorsMoviesJoinTable < ActiveRecord::Migration[7.0]
  def change
    create_table :actors_movies, id: false do |t|
      t.references :actor, null: false, foreign_key: true
      t.references :movie, null: false, foreign_key: true
    end
  end
end
