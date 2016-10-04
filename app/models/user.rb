# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  admin              :boolean          default(FALSE)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  username           :string           not null
#  current_episode_id :integer          default(1)
#

class User < ActiveRecord::Base
  validates :password_digest, :username, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  # has_many: :current_episode_ids

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end




class SeriesController
  def show
    @series = Series.find(params[:id])
    @current_episode_id = @series.current_episode_for_user(current_user)
  end

end


class Series

  def current_episode_id_for_user(user)
    current_episode = CurrentEpisode.find_by(
      series: self,
      user: user
    )
    current_episode.episode_id
  end

end
