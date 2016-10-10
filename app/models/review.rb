class Review < ActiveRecord::Base
  validates :user_id, :serie_id, :body, presence: true
  validates_uniqueness_of :user_id, scope: :serie_id

  
end
