class RemoveCurrentEpisodeIdFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :current_episode_id
  end
end
