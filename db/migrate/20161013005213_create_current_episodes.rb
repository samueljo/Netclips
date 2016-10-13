class CreateCurrentEpisodes < ActiveRecord::Migration
  def change
    create_table :current_episodes do |t|
      t.integer :episode_id, null: false
      t.integer :user_id, null: false, index: true
      t.integer :serie_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
