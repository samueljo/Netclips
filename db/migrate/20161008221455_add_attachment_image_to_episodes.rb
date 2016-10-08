class AddAttachmentImageToEpisodes < ActiveRecord::Migration
  def self.up
    change_table :episodes do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :episodes, :image
  end
end
