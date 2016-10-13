class EditEpisodeNumberColumn < ActiveRecord::Migration
  def change
    change_column :episodes, :episode_number, :integer, default: 1
  end
end
