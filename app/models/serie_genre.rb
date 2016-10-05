# == Schema Information
#
# Table name: serie_genres
#
#  id         :integer          not null, primary key
#  serie_id   :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SerieGenre < ActiveRecord::Base
  validates_associated :serie, :genre

  belongs_to :serie
  belongs_to :genre
end
