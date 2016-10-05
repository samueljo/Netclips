class CreateEpisodes < ActiveRecord::Migration
  def change
    create_table :episodes do |t|
      t.integer :serie_id, null: false, index: true
      t.string :title, null: false, index: true
      t.text :summary, null: false
      t.string :video_url, null: false

      t.timestamps null: false
    end
  end
end
