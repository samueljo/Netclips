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

  has_many :series_genres
  has_many :series, through: :series_genres, source: :serie
end
