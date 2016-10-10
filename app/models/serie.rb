# == Schema Information
#
# Table name: series
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  description        :text             not null
#  year               :integer          not null
#  avg_rating         :integer          default(0)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Serie < ActiveRecord::Base
  has_attached_file :image, styles: { large: "1250x520>", medium: "350x200>", thumb: "85x50>" }, default_url: "temp_logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  validates :title, :description, :year, presence: true

  has_many :serie_genres
  has_many :genres, through: :serie_genres, source: :genre
  has_many :episodes
  has_many :reviews

  def current_user_reviews(serie, current_user)
    Review.all.where(user_id: current_user.id).where(serie_id: serie.id)
  end

  def other_user_reviews(serie, current_user)
    Review.all.where(serie_id: serie_id).where.not(user_id: current_user.id)
  end
end
