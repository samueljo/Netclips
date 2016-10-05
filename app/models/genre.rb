# == Schema Information
#
# Table name: genres
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :serie_genres
  has_many :series, through: :serie_genres, source: :serie
end
