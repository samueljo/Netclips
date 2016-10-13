class AddEpisodeNumberToEpisodes < ActiveRecord::Migration
  def change
    add_column :episodes, :episode_number, :integer, default: 0
  end
end
