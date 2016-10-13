class EditCurrentEpisodeTableName < ActiveRecord::Migration
  def change
    rename_table :current_episodes, :current_watchings
  end
end
