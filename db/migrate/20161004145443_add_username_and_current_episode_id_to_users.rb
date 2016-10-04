class AddUsernameAndCurrentEpisodeIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :username, :string, null: false
    add_column :users, :current_episode_id, :integer, default: 1
    add_index :users, :current_episode_id
  end
end
