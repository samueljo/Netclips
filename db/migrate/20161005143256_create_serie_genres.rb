class CreateSerieGenres < ActiveRecord::Migration
  def change
    create_table :serie_genres do |t|
      t.integer :serie_id, null: false, index: true
      t.integer :genre_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
