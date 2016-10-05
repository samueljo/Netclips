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
  Serie.create!({
    title: 'IBM Watson Trailer: Morgan',
    description: "A corporate troubleshooter (Kate Mara) is sent to a remote, top-secret location, where she is to investigate and evaluate a terrifying accident. She learns the event was triggered by a seemingly innocent “human,” who presents a mystery of both infinite promise and incalculable danger.",
    year: 2016,
    image: File.open('/Users/SamJo/Desktop/Netclips/app/assets/images/series/Morgan.jpg'),
    genre_ids: [all_genres[0].id]
  })
]
