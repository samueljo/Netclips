# == Schema Information
#
# Table name: favorites
#
#  id         :integer          not null, primary key
#  serie_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class FavoriteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
