class CreateSeries < ActiveRecord::Migration
  def change
    create_table :series do |t|
      t.string :title, null: false, index: true
      t.text :description, null: false
      t.integer :year, null: false
      t.integer :avg_rating, default: 0

      t.timestamps null: false
    end
  end
end
