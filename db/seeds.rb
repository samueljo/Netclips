# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
# Guest account:
User.create!({
  email: 'guest@guest.com',
  username: 'guest',
  password: 'password' })

Genre.destroy_all
# Genres
all_genres = [
  Genre.create!({ name: 'Movie Trailer' }),
  Genre.create!({ name: 'Talk Show' }),
  Genre.create!({ name: 'NBA' }),
  Genre.create!({ name: 'NFL' }),
  Genre.create!({ name: 'NHL' }),
  Genre.create!({ name: 'MLB' }),
  Genre.create!({ name: 'Tennis' }),
  Genre.create!({ name: 'Golf' }),
  Genre.create!({ name: 'College' }),
  Genre.create!({ name: 'Soccer' }),
  Genre.create!({ name: 'Comedy' }),
  Genre.create!({ name: 'Music' })
]

Serie.destroy_all
# Series
all_series = [
  # 1
  Serie.create!({
    title: 'TalkShow',
    description: 'TalkShow',
    year: 2016,
    image: File.open('app/assets/images/series/conan-obrien.jpg'),
    genre_ids: [all_genres[1].id]
  }),
  # 2
  Serie.create!({
    title: 'TalkShow',
    description: 'TalkShow',
    year: 2016,
    image: File.open('app/assets/images/series/conan-obrien.jpg'),
    genre_ids: [all_genres[1].id]
  }),
  # 3
  Serie.create!({
    title: 'TalkShow',
    description: 'TalkShow',
    year: 2016,
    image: File.open('app/assets/images/series/conan-obrien.jpg'),
    genre_ids: [all_genres[1].id]
  }),
  # 4
  Serie.create!({
    title: 'TalkShow',
    description: 'TalkShow',
    year: 2016,
    image: File.open('app/assets/images/series/conan-obrien.jpg'),
    genre_ids: [all_genres[1].id]
  }),
  # 5
  Serie.create!({
    title: 'TalkShow',
    description: 'TalkShow',
    year: 2016,
    image: File.open('app/assets/images/series/conan-obrien.jpg'),
    genre_ids: [all_genres[1].id]
  }),
  # 6
  Serie.create!({
    title: 'IBM Watson Trailer: Morgan',
    description: 'A corporate troubleshooter (Kate Mara) is sent to a remote, top-secret location, where she is to investigate and evaluate a terrifying accident. She learns the event was triggered by a seemingly innocent “human,” who presents a mystery of both infinite promise and incalculable danger.',
    year: 2016,
    image: File.open('app/assets/images/series/morgan.jpg'),
    genre_ids: [all_genres[0].id]
  }),
  # 7
  Serie.create!({
    title: 'IBM Watson Trailer: Morgan',
    description: 'A corporate troubleshooter (Kate Mara) is sent to a remote, top-secret location, where she is to investigate and evaluate a terrifying accident. She learns the event was triggered by a seemingly innocent “human,” who presents a mystery of both infinite promise and incalculable danger.',
    year: 2016,
    image: File.open('app/assets/images/series/morgan.jpg'),
    genre_ids: [all_genres[0].id]
  }),
  # 8
  Serie.create!({
    title: 'IBM Watson Trailer: Morgan',
    description: 'A corporate troubleshooter (Kate Mara) is sent to a remote, top-secret location, where she is to investigate and evaluate a terrifying accident. She learns the event was triggered by a seemingly innocent “human,” who presents a mystery of both infinite promise and incalculable danger.',
    year: 2016,
    image: File.open('app/assets/images/series/morgan.jpg'),
    genre_ids: [all_genres[0].id]
  }),
  # 9
  Serie.create!({
    title: 'IBM Watson Trailer: Morgan',
    description: 'A corporate troubleshooter (Kate Mara) is sent to a remote, top-secret location, where she is to investigate and evaluate a terrifying accident. She learns the event was triggered by a seemingly innocent “human,” who presents a mystery of both infinite promise and incalculable danger.',
    year: 2016,
    image: File.open('app/assets/images/series/morgan.jpg'),
    genre_ids: [all_genres[0].id]
  }),
  # 10
  Serie.create!({
    title: 'IBM Watson Trailer: Morgan',
    description: 'A corporate troubleshooter (Kate Mara) is sent to a remote, top-secret location, where she is to investigate and evaluate a terrifying accident. She learns the event was triggered by a seemingly innocent “human,” who presents a mystery of both infinite promise and incalculable danger.',
    year: 2016,
    image: File.open('app/assets/images/series/morgan.jpg'),
    genre_ids: [all_genres[0].id]
  }),
  # 11
  Serie.create!({
    title: 'NBA',
    description: 'NBA',
    year: 2016,
    image: File.open('app/assets/images/series/nba-finals-2016.jpg'),
    genre_ids: [all_genres[2].id]
  }),
  # 12
  Serie.create!({
    title: 'NBA',
    description: 'NBA',
    year: 2016,
    image: File.open('app/assets/images/series/nba-finals-2016.jpg'),
    genre_ids: [all_genres[2].id]
  }),
  # 13
  Serie.create!({
    title: 'NBA',
    description: 'NBA',
    year: 2016,
    image: File.open('app/assets/images/series/nba-finals-2016.jpg'),
    genre_ids: [all_genres[2].id]
  }),
  # 14
  Serie.create!({
    title: 'NBA',
    description: 'NBA',
    year: 2016,
    image: File.open('app/assets/images/series/nba-finals-2016.jpg'),
    genre_ids: [all_genres[2].id]
  }),
  # 15
  Serie.create!({
    title: 'NBA',
    description: 'NBA',
    year: 2016,
    image: File.open('app/assets/images/series/nba-finals-2016.jpg'),
    genre_ids: [all_genres[2].id]
  })
]

Episode.destroy_all
# Series
all_episodes = [
  # 1
  Episode.create!({
    title: 'Game 1',
    summary: 'NBA Finals Game 1 Cleveland Cavaliers at Golden State Warriors',
    serie_id: all_series[11].id,
    video_url: 'test'
  }),
  # 2
  Episode.create!({
    title: 'Game 2',
    summary: 'NBA Finals Game 2 Cleveland Cavaliers at Golden State Warriors',
    serie_id: all_series[11].id,
    video_url: 'test1'
  })
  # # 3
  # Episode.create!({
  #   title: 'Game 3',
  #   summary: 'NBA Finals Game 3 Golden State Warriors at Cleveland Cavaliers',
  #   serie_id: all_series[11].id,
  #   video_url: 'test'
  # }),
  # # 4
  # Episode.create!({
  #   title: 'Game 4',
  #   summary: 'NBA Finals Game 4 Golden State Warriors at Cleveland Cavaliers',
  #   serie_id: all_series[11].id,
  #   video_url: 'test'
  # }),
  # # 5
  # Episode.create!({
  #   title: 'Game 5',
  #   summary: 'NBA Finals Game 5 Cleveland Cavaliers at Golden State Warriors',
  #   serie_id: all_series[11].id,
  #   video_url: 'test'
  # }),
  # # 6
  # Episode.create!({
  #   title: 'Game 6',
  #   summary: 'NBA Finals Game 6 Golden State Warriors at Cleveland Cavaliers',
  #   serie_id: all_series[11].id,
  #   video_url: 'test'
  # }),
  # # 7
  # Episode.create!({
  #   title: 'Game 7',
  #   summary: 'NBA Finals Game 7 Cleveland Cavaliers at Golden State Warriors',
  #   serie_id: all_series[11].id,
  #   video_url: 'test'
  # })
]
