# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  serie_id   :integer          not null
#  user_id    :integer          not null
#  rating     :integer          default(0)
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base
  validates :user_id, :serie_id, presence: true
  validates_uniqueness_of :user_id, scope: :serie_id

  belongs_to :user
  belongs_to :serie
end
