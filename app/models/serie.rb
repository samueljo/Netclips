# == Schema Information
#
# Table name: series
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  description        :text             not null
#  year               :integer          not null
#  avg_rating         :integer          default(0)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Serie < ActiveRecord::Base
  has_attached_file :image, styles: { large: "1250x520>", medium: "350x200>", thumb: "85x50>" }, default_url: "temp_logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  validates :title, :description, :year, presence: true

  has_many :serie_genres, dependent: :destroy
  has_many :genres, through: :serie_genres, source: :genre
  has_many :episodes, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :current_watchings, dependent: :destroy
  has_many :current_watchers, through: :current_watchings, source: :user
  has_many :current_episodes, through: :current_watchings, source: :episode

  def self.search(params)
    Serie.joins(:genres).includes(:episodes, :current_watchings).where(
      "lower(series.title) LIKE ? OR lower(genres.name) LIKE ?",
      "%#{params[:query].downcase}%",
      "%#{params[:query].downcase}%"
    )
  end

  def self.get_suggestions_for_current_user(user)
    current_watchings = Genre.select(:id).joins(:current_watchings).where("current_watchings.user_id = ?", user.id)
    favorites = Genre.select(:id).joins(:favorites).where("favorites.user_id = ?", user.id)
    suggestions = Serie
      .joins(:genres)
      .joins("LEFT JOIN current_watchings ON current_watchings.serie_id = series.id")
      .includes(:episodes, :current_watchings)
      .where("current_watchings.serie_id IS NULL")
      .where("genre_id IN (?) OR genre_id IN (?)", current_watchings, favorites)
      .distinct

    suggested = [];
    unless suggestions.empty?
      suggested = suggestions.shuffle.take(15)
    end
    return suggested
  end
end
