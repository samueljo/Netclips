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

class Favorite < ActiveRecord::Base
  validates :serie_id, :user_id, presence: true
  validates_uniqueness_of :user_id, scope: :serie_id

  belongs_to :user
  belongs_to :serie

  def self.get_my_list(current_user)
    return current_user.favorite_series.includes(:episodes, :current_watchings).order(:created_at).distinct
  end
end
