# == Schema Information
#
# Table name: current_watchings
#
#  id         :integer          not null, primary key
#  episode_id :integer          not null
#  user_id    :integer          not null
#  serie_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CurrentWatching < ActiveRecord::Base
  validates :user_id, :serie_id, :episode_id, presence: true
  validates_uniqueness_of :user_id, scope: :serie_id

  belongs_to :user
  belongs_to :serie
  belongs_to :episode


  def self.get_current_series(current_user)
    return current_user.current_series.includes(:episodes, :current_watchings).distinct
  end
end
