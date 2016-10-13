# == Schema Information
#
# Table name: current_episodes
#
#  id         :integer          not null, primary key
#  episode_id :integer          not null
#  user_id    :integer          not null
#  serie_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class CurrentEpisodeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
