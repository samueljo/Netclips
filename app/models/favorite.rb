class Favorite < ActiveRecord::Base
  validates :serie_id, :user_id, presence: true
  validates_uniqueness_of :user_id, scope: :serie_id

  belongs_to :user
  belongs_to :serie
end
