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

require 'test_helper'

class SerieGenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
