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

require 'test_helper'

class EpisodeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
