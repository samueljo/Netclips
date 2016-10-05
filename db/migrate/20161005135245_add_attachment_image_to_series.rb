class AddAttachmentImageToSeries < ActiveRecord::Migration
  def self.up
    change_table :series do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :series, :image
  end
end
