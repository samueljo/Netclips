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
    suggestions = Serie.joins(:genres, :current_watchings).includes(:episodes).where(
      "current_watchings.user_id = ?", user.id
    )
    # suggestions = Serie.find_by_sql [
      # "SELECT
      #   DISTINCT series.*, genres.id, episodes.*, current_watchings.*
      # FROM
      #   genres
      # JOIN
      #   serie_genres ON serie_genres.genre_id = genres.id
      # JOIN
      #   series ON series.id = serie_genres.serie_id
      # JOIN
      #   episodes ON episodes.serie_id = series.id
      # LEFT JOIN
      #   current_watchings ON current_watchings.serie_id = series.id
      # WHERE
      #   current_watchings.serie_id IS NULL AND genres.id IN (
      #   SELECT
      #     DISTINCT genres.id AS genreID
      #   FROM
      #     genres
      #   JOIN
      #     serie_genres ON serie_genres.genre_id = genres.id
      #   JOIN
      #     series ON series.id = serie_genres.serie_id
      #   JOIN
      #     current_watchings ON current_watchings.serie_id = series.id
      #   WHERE
      #     current_watchings.user_id = ?
      # )", user.id
    # ]

    # suggestions = Genre.select(
    #   [
    #     Series.arel_table[Arel.star], Genre.arel_table[:id], Episode.arel_table[Arel.star], CurrentWatching.arel_table[Arel.star]
    #   ]
    # ).where(
    #   CurrentWatching.arel_table[:serie_id].eq(nil).and(
    #     Genre.arel_table[:id].in(
    #       Genre.select(Genre.arel_table[:id].as('genreID')).where(CurrentWatching.arel_table[:user_id].eq(180)).joins(
    #         Genre.arel_table.join(SerieGenre.arel_table).on(
    #           SerieGenre.arel_table[:genre_id].eq(Genre.arel_table[:id])
    #         ).join_sources
    #       ).joins(
    #         Genre.arel_table.join(Series.arel_table).on(
    #           Series.arel_table[:id].eq(SerieGenre.arel_table[:serie_id])
    #         ).join_sources
    #       ).joins(
    #         Genre.arel_table.join(CurrentWatching.arel_table).on(
    #           CurrentWatching.arel_table[:serie_id].eq(Series.arel_table[:id])
    #         ).join_sources
    #       ).uniq.ast
    #     )
    #   )
    # ).joins(
    #   Genre.arel_table.join(SerieGenre.arel_table).on(
    #     SerieGenre.arel_table[:genre_id].eq(Genre.arel_table[:id])
    #   ).join_sources
    # ).joins(
    #   Genre.arel_table.join(Series.arel_table).on(
    #     Series.arel_table[:id].eq(SerieGenre.arel_table[:serie_id])
    #   ).join_sources
    # ).joins(
    #   Genre.arel_table.join(Episode.arel_table).on(
    #     Episode.arel_table[:serie_id].eq(Series.arel_table[:id])
    #   ).join_sources
    # ).joins(
    #   Genre.arel_table.join(CurrentWatching.arel_table).on(
    #     CurrentWatching.arel_table[:serie_id].eq(Series.arel_table[:id])
    #   ).join_sources
    # ).uniq
    suggested = [];
    unless suggestions.empty?
      # while suggested.length < 15
        # suggested.push(suggestions.sample)
        # random_genre = suggestions.sample.genres.sample
        # random_serie = random_genre.series.sample
        # if suggested.include?(random_serie)
        #   random_genre = suggestions.sample.genres.sample
        #   random_serie = random_genre.series.sample
        # else
        #   suggested.push(random_serie)
        # end
      # end
    end

    return suggested

  end
end


# SELECT DISTINCT series.id AS serieID, genres.id AS g FROM genres JOIN serie_genres ON serie_genres.genre_id = genres.id JOIN series ON series.id = serie_genres.serie_id WHERE g IN (SELECT DISTINCT genres.id AS genreID FROM genres JOIN serie_genres ON serie_genres.genre_id = genres.id JOIN series ON series.id = serie_genres.serie_id JOIN current_watchings ON current_watchings.serie_id = series.id WHERE current_watchings.user_id = 180);
# SELECT DISTINCT genres.id AS genreID FROM genres JOIN serie_genres ON serie_genres.genre_id = genres.id JOIN series ON series.id = serie_genres.serie_id JOIN current_watchings ON current_watchings.serie_id = series.id WHERE current_watchings.user_id = 180;
