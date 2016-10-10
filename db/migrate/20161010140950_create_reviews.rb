class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :serie_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.integer :rating, default: 0
      t.text :body, null: false

      t.timestamps null: false
    end
  end
end
