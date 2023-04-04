class AddActorIdToMovies < ActiveRecord::Migration[7.0]
  def change
    add_reference :movies, :actor, null: false, foreign_key: true
  end
end
