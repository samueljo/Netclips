# == Schema Information
#
# Table name: episodes
#
#  id         :integer          not null, primary key
#  serie_id   :integer          not null
#  title      :string           not null
#  summary    :text             not null
#  video_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Episode < ActiveRecord::Base
  # has_attached_file :image, styles: { large: "", medium: "300x300>", thumb: "100x100>" }, default_url: "/images/temp_logo.png"
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  validates :serie_id, :title, :summary, :video_url, presence: true
  validates :video_url, uniqueness: true

  belongs_to :serie
end
