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
  password: 'password'
})

all_users = [];

20.times do
  email = Faker::Internet.free_email
  username = Faker::Internet.user_name
  email = Faker::Internet.free_email while (User.find_by(email: email))
  user = User.create!({
    email: email,
    username: username,
    password: 'password'
  })

  all_users.push(user)
end

Genre.destroy_all
# Genres
all_genres = [
  # 0
  Genre.create!({ name: 'Movie Trailer' }),
  # 1
  Genre.create!({ name: 'Talk Show' }),
  # 2
  Genre.create!({ name: 'NBA' }),
  # 3
  Genre.create!({ name: 'NFL' }),
  # 4
  Genre.create!({ name: 'NHL' }),
  # 5
  Genre.create!({ name: 'MLB' }),
  # 6
  Genre.create!({ name: 'Tennis' }),
  # 7
  Genre.create!({ name: 'Golf' }),
  # 8
  Genre.create!({ name: 'College' }),
  # 9
  Genre.create!({ name: 'Soccer' }),
  # 10
  Genre.create!({ name: 'Funny' }),
  # 11
  Genre.create!({ name: 'Music' }),
  # 12
  Genre.create!({ name: 'Sports' }),
  # 13
  Genre.create!({ name: 'Action'}),
  # 14
  Genre.create!({ name: 'Documentary'})
]

Serie.destroy_all
# Series
all_series = [
  # 0 NBA Finals 2016
  Serie.create!({
    title: 'NBA Finals 2016',
    description: 'NBA Finals 2016: Cleveland Cavaliers vs. Golden State Warriors',
    year: 2016,
    image: File.open('app/assets/images/series/nba-finals-2016.jpg'),
    genre_ids: [all_genres[2].id, all_genres[12].id]
  }),

  # Movie Trailers
  # 1 Morgan
  Serie.create!({
    title: 'Morgan',
    description: 'A corporate troubleshooter (Kate Mara) is sent to a remote, top-secret location, where she is to investigate and evaluate a terrifying accident. She learns the event was triggered by a seemingly innocent “human,” who presents a mystery of both infinite promise and incalculable danger.',
    year: 2016,
    image: File.open('app/assets/images/series/morgan.jpg'),
    genre_ids: [all_genres[0].id, all_genres[13].id]
  }),
  # 2 John Wick 2
  Serie.create!({
    title: 'John Wick: Chapter 2',
    description: 'The continuing adventures of former hitman, John Wick.',
    year: 2017,
    image: File.open('app/assets/images/series/movies/john-wick-2.jpg'),
    genre_ids: [all_genres[0].id, all_genres[13].id]
  }),
  # 3 The Great Wall
  Serie.create!({
    title: 'The Great Wall',
    description: 'Starring global superstar Matt Damon and directed by one of the most breathtaking visual stylists of our time, Zhang Yimou (Hero, House of Flying Daggers), Legendary’s The Great Wall tells the story of an elite force making a valiant stand for humanity on the world’s most iconic structure. The first English-language production for Yimou is the largest film ever shot entirely in China.',
    year: 2017,
    image: File.open('app/assets/images/series/movies/the-great-wall.jpg'),
    genre_ids: [all_genres[0].id, all_genres[13].id]
  }),
  # 4 Power Rangers
  Serie.create!({
    title: 'Power Rangers',
    description: 'A group of high-school kids, who are infused with unique superpowers, harness their abilities in order to save the world.',
    year: 2016,
    image: File.open('app/assets/images/series/movies/power-rangers.jpg'),
    genre_ids: [all_genres[0].id, all_genres[13].id]
  }),
  # 5 Resident Evil
  Serie.create!({
    title: 'Resident Evil: The Final Chapter',
    description: "Picking up immediately after the events in Resident Evil: Retribution, humanity is on its last legs in Washington D.C. As the only survivor of what was meant to be humanity's final stand against the undead hordes, Alice must return to where the nightmare began - Raccoon City, where the Umbrella Corporation is gathering its forces for a final strike against the only remaining survivors of the apocalypse.",
    year: 2017,
    image: File.open('app/assets/images/series/movies/resident-evil.jpg'),
    genre_ids: [all_genres[0].id, all_genres[13].id]
  }),
  # 6 Underworld
  Serie.create!({
    title: 'Underworld: Blood Wars',
    description: 'Vampire death dealer, Selene (Kate Beckinsale) fights to end the eternal war between the Lycan clan and the Vampire faction that betrayed her.',
    year: 2017,
    image: File.open('app/assets/images/series/movies/underworld.jpg'),
    genre_ids: [all_genres[0].id, all_genres[13].id]
  }),
  #7 Jackie
  Serie.create!({
    title: 'Jackie',
    description: "Following the assassination of her husband, First Lady Jacqueline Kennedy fights through grief and trauma to regain her faith, console her children, and define her husband's historic legacy.",
    year: 2016,
    image: File.open('app/assets/images/series/movies/jackie.jpg'),
    genre_ids: [all_genres[0].id]
  }),
  #8 Patriots Day
  Serie.create!({
    title: 'Patriots Day',
    description: "An account of Boston Police Commissioner Ed Davis's actions in the events leading up to the 2013 Boston Marathon bombing and the aftermath, which includes the city-wide manhunt to find the terrorists behind it.",
    year: 2017,
    image: File.open('app/assets/images/series/movies/patriots-day.jpg'),
    genre_ids: [all_genres[0].id]
  }),
  #9 Allied
  Serie.create!({
    title: 'Allied',
    description: 'ALLIED is the story of intelligence officer Max Vatan (Pitt), who in 1942 North Africa encounters French Resistance fighter Marianne Beausejour (Cotillard) on a deadly mission behind enemy lines. Reunited in London, their relationship is threatened by the extreme pressures of the war.',
    year: 2016,
    image: File.open('app/assets/images/series/movies/allied.jpg'),
    genre_ids: [all_genres[0].id]
  }),
  #10 Pirates of the Caribbean
  Serie.create!({
    title: 'Pirates of the Caribbean: Dead Men Tell No Tales',
    description: 'Captain Jack Sparrow searches for the trident of Poseidon.',
    year: 2017,
    image: File.open('app/assets/images/series/movies/pirates.jpg'),
    genre_ids: [all_genres[0].id, all_genres[13].id]
  }),
  #11 Middle School
  Serie.create!({
    title: 'Middle School: The Worst Years of My Life',
    description: 'A quiet teenage artist Rafe Katchadorian has a wild imagination and is sick of middle school and the rules that have been put before him. Rafe and his best friend Leo have come up with a plan; break every rule in the school hand book and as you expect trouble follows.',
    year: 2016,
    image: File.open('app/assets/images/series/movies/middle-school.jpg'),
    genre_ids: [all_genres[0].id, all_genres[10].id]
  }),
  #12 Fantastic Beasts
  Serie.create!({
    title: 'Fantastic Beasts and Where to Find Them',
    description: "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school.",
    year: 2016,
    image: File.open('app/assets/images/series/movies/fantastic-beasts.jpg'),
    genre_ids: [all_genres[0].id]
  }),
  #13 Denial
  Serie.create!({
    title: 'Denial',
    description: 'Acclaimed writer and historian Deborah E. Lipstadt must battle for historical truth to prove the Holocaust actually occurred when David Irving, a renowned denier, sues her for libel.',
    year: 2016,
    image: File.open('app/assets/images/series/movies/denial.jpg'),
    genre_ids: [all_genres[0].id]
  }),
  #14 Nerve
  Serie.create!({
    title: 'Nerve',
    description: "A high school senior finds herself immersed in an online game of truth or dare, where her every move starts to become manipulated by an anonymous community of 'watchers.'",
    year: 2016,
    image: File.open('app/assets/images/series/movies/nerve.jpg'),
    genre_ids: [all_genres[0].id]
  }),
  #15 Lego Batman Movie
  Serie.create!({
    title: 'The LEGO Batman Movie',
    description: 'A spin-off of The Lego Movie (2014) centering on the character of Batman.',
    year: 2017,
    image: File.open('app/assets/images/series/movies/lego-batman.jpg'),
    genre_ids: [all_genres[0].id, all_genres[10].id]
  }),
  #16 Justice League
  Serie.create!({
    title: 'Justice League',
    description: "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.",
    year: 2017,
    image: File.open('app/assets/images/series/movies/justice-league.jpg'),
    genre_ids: [all_genres[0].id, all_genres[13].id]
  }),
  #17 My Blind Brother
  Serie.create!({
    title: 'My Blind Brother',
    description: 'The rivalry between two brothers reaches a fever pitch during a charity swim competition.',
    year: 2016,
    image: File.open('app/assets/images/series/movies/my-blind-brother.jpg'),
    genre_ids: [all_genres[0].id, all_genres[10].id]
  }),

  # Talk Shows
  # 18 Conan
  Serie.create!({
    title: 'Conan',
    description: 'Conan is a late-night talk show, special travel show and hosted narrator documentary airing each Monday through Thursday on TBS in the United States.',
    year: 2016,
    image: File.open('app/assets/images/series/conan-obrien.jpg'),
    genre_ids: [all_genres[1].id, all_genres[10].id]
  }),
  # 19 Jimmy Kimmel
  Serie.create!({
    title: 'Jimmy Kimmel Live!',
    description: 'Home of Celebrities Read Mean Tweets, YouTube Challenges and the rest of your favorite viral late night videos.',
    year: 2016,
    image: File.open('app/assets/images/series/talk/jimmy-kimmel.jpeg'),
    genre_ids: [all_genres[1].id, all_genres[10].id]
  }),
  # 20 Jimmy Fallon
  Serie.create!({
    title: 'The Tonight Show Starring Jimmy Fallon',
    description: "The Tonight Show Starring Jimmy Fallon features hilarious highlights from the show including: comedy sketches, music parodies, celebrity interviews, ridiculous games, and, of course, Jimmy's Thank You Notes and hashtags! You'll also find behind the scenes videos and other great web exclusives.",
    year: 2016,
    image: File.open('app/assets/images/series/talk/jimmy-fallon.jpeg'),
    genre_ids: [all_genres[1].id, all_genres[10].id]
  }),
  # 21 Stephen Colbert
  Serie.create!({
    title: 'The Late Show with Stephen Colbert',
    description: 'The Late Show with Stephen Colbert is an American late-night talk show hosted by Stephen Colbert.',
    year: 2016,
    image: File.open('app/assets/images/series/talk/colbert.jpg'),
    genre_ids: [all_genres[1].id]
  }),
  # 22 John Oliver
  Serie.create!({
    title: 'Last Week Tonight with John Oliver',
    description: 'Last Week Tonight with John Oliver, often abridged as Last Week Tonight, is an American late-night talk and news satire television program hosted by comedian John Oliver.',
    year: 2016,
    image: File.open('app/assets/images/series/talk/john-oliver.jpg'),
    genre_ids: [all_genres[1].id]
  }),
  # 23 Trevor Noah
  Serie.create!({
    title: 'The Daily Show with Trevor Noah',
    description: "The Daily Show is an Emmy and Peabody Award-winning program that looks at the day's top headlines through a sharp, reality-based lens. Along with the help of The Best F*@king News Team Ever, Trevor Noah covers the biggest news stories in politics, pop culture and more.",
    year: 2016,
    image: File.open('app/assets/images/series/talk/trevor-noah.jpg'),
    genre_ids: [all_genres[1].id]
  }),

  # NBA
  # 24 NBA HOF 2016 Speech
  Serie.create!({
    title: 'NBA Hall of Fame 2016 Induction',
    description: "NBA Hall of Fame 2016 Induction featuring Allen Iverson, Yao Ming, & Shaquille O’Neal.",
    year: 2016,
    image: File.open('app/assets/images/series/nba/nba-16-hof.jpg'),
    genre_ids: [all_genres[2].id, all_genres[12].id]
  }),

  # 25 NBA MVP 2016 Highlights
  Serie.create!({
    title: 'NBA MVP 2016 Highlights',
    description: "Highlights from Stephen Curry's 2016 MVP campaign.",
    year: 2016,
    image: File.open('app/assets/images/series/nba/curry-mvp.jpg'),
    genre_ids: [all_genres[2].id, all_genres[12].id]
  }),

  # 26 NBA 2016 Season Highlights
  Serie.create!({
    title: 'NBA 2016 Season Highlights',
    description: "Highlights from the NBA 2016 Season.",
    year: 2016,
    image: File.open('app/assets/images/series/nba/nba-16.jpg'),
    genre_ids: [all_genres[2].id, all_genres[12].id]
  }),

  # 27 NBA 2016 Slam Dunk Contest
  Serie.create!({
    title: 'NBA 2016 Slam Dunk Contest',
    description: "Highlights from the NBA 2016 Slam Dunk Contest.",
    year: 2016,
    image: File.open('app/assets/images/series/nba/nba-16-slam-dunk.jpg'),
    genre_ids: [all_genres[2].id, all_genres[12].id]
  }),

  # 28 NBA 2016 All Star Game
  Serie.create!({
    title: 'NBA 2016 All Star Game',
    description: "Highlights from the NBA 2016 All Star Game in Toroto, CA.",
    year: 2016,
    image: File.open('app/assets/images/series/nba/nba-16-allstar.jpg'),
    genre_ids: [all_genres[2].id, all_genres[12].id]
  }),

  # 29 NFL Bad Lip Reading
  Serie.create!({
    title: 'NFL Bad Lip Reading',
    description: "Bad Lip Reading NFL Edition",
    year: 2016,
    image: File.open('app/assets/images/series/nfl/nfl-badlipreading.jpg'),
    genre_ids: [all_genres[3].id, all_genres[10].id, all_genres[12].id]
  }),
  # 30 NFL 2015 Superbowl
  Serie.create!({
    title: 'NFL 2015 Superbowl',
    description: "Super Bowl XLIX",
    year: 2015,
    image: File.open('app/assets/images/series/nfl/superbowl2015.jpg'),
    genre_ids: [all_genres[3].id, all_genres[12].id]
  }),
  # 31 NFL 2014 Superbowl
  Serie.create!({
    title: 'NFL 2014 Superbowl',
    description: "Super Bowl XLVIII",
    year: 2014,
    image: File.open('app/assets/images/series/nfl/superbowl2014.jpg'),
    genre_ids: [all_genres[3].id, all_genres[12].id]
  }),
  # 32 NFL 2013 Superbowl
  Serie.create!({
    title: 'NFL 2013 Superbowl',
    description: "Super Bowl XLVII",
    year: 2013,
    image: File.open('app/assets/images/series/nfl/superbowl2013.jpg'),
    genre_ids: [all_genres[3].id, all_genres[12].id]
  }),
  # 33 NFL 2012 Superbowl
  Serie.create!({
    title: 'NFL 2012 Superbowl',
    description: "Super Bowl XLVI",
    year: 2012,
    image: File.open('app/assets/images/series/nfl/superbowl2012.jpg'),
    genre_ids: [all_genres[3].id, all_genres[12].id]
  }),
  # 34 2016 Olympics
  Serie.create!({
    title: '2016 Olympics',
    description: "2016 Rio Olympics",
    year: 2016,
    image: File.open('app/assets/images/series/2016olympics.jpg'),
    genre_ids: [all_genres[12].id]
  }),
  # 35 SNL
  Serie.create!({
    title: 'SNL',
    description: "NBC: Saturday Night Live!",
    year: 2016,
    image: File.open('app/assets/images/series/SNL.jpg'),
    genre_ids: [all_genres[10].id]
  }),
  #36 Kanye - Famous
  Serie.create!({
    title: 'Kanye West - Famous',
    description: "Music video for Kanye West's Famous",
    year: 2016,
    image: File.open('app/assets/images/series/music/kanyewest1.jpg'),
    genre_ids: [all_genres[11].id]
  }),
  #37 Glass Animals - Pools
  Serie.create!({
    title: 'Glass Animals - Pools',
    description: "Music video for  Glass Animals' Pools",
    year: 2014,
    image: File.open('app/assets/images/series/music/glassanimals1.jpg'),
    genre_ids: [all_genres[11].id]
  }),
  #38 James Blake - Limit To Your Love
  Serie.create!({
    title: 'James Blake - Limit To Your Love',
    description: "Music video for James Blake's Limit To Your Love",
    year: 2010,
    image: File.open('app/assets/images/series/music/jamesblake1.jpg'),
    genre_ids: [all_genres[11].id]
  }),
  #39 J. Cole - Love Yourz
  Serie.create!({
    title: 'J. Cole - Love Yourz',
    description: "Music video for J. Cole's Love Yourz",
    year: 2014,
    image: File.open('app/assets/images/series/music/jcole1.jpg'),
    genre_ids: [all_genres[11].id]
  }),
  #40 Frank Ocean - Forrest Gump - Grammys
  Serie.create!({
    title: 'Frank Ocean - Forrest Gump - Grammys',
    description: "Frank Ocean performs 'Forrest Gump' off his critically acclaimed album Channel ORANGE at the Grammys.",
    year: 2014,
    image: File.open('app/assets/images/series/music/frankocean1.jpg'),
    genre_ids: [all_genres[11].id]
  }),
  #41 Beyoncé - Hold Up
  Serie.create!({
    title: 'Beyoncé - Hold Up',
    description: "Music video for Beyoncé's Hold Up",
    year: 2016,
    image: File.open('app/assets/images/series/music/beyonce1.jpg'),
    genre_ids: [all_genres[11].id]
  }),
  #42 Rhye - The Fall
  Serie.create!({
    title: 'Rhye - The Fall',
    description: "Music video for Rhye's The Fall",
    year: 2012,
    image: File.open('app/assets/images/series/music/rhye1.jpg'),
    genre_ids: [all_genres[11].id]
  }),
  #43 Dr Dog - That Old Black Hole
  Serie.create!({
    title: 'Dr. Dog - That Old Black Hole',
    description: "Music video for Dr. Dog's That Old Black Hole",
    year: 2012,
    image: File.open('app/assets/images/series/music/drdog1.jpg'),
    genre_ids: [all_genres[11].id]
  }),

  #44
  Serie.create!({
    title: 'Vice: Autobiographies',
    description: "Autobiographies in VICE's online den of nefarious activities, investigative journalism, and enlightening documentaries.",
    year: 2016,
    image: File.open('app/assets/images/series/doc/viceauto.jpg'),
    genre_ids: [all_genres[14].id]
  }),
  #45
  Serie.create!({
    title: "The VICE Guide to Comics",
    description: "In this extra spooky episode of 'The VICE Guide to Comics,' our art editor Nick Gazin shares the best terror comics, just in time for Halloween. And, as always, his list is completely objective, so no arguments in the comment section please.",
    year: 2016,
    image: File.open('app/assets/images/series/doc/comics.jpg'),
    genre_ids: [all_genres[14].id]
  }),
  #46
  Serie.create!({
    title: 'Vice: High Society',
    description: "High Society is a new VICE documentary series about drugs in the UK.",
    year: 2016,
    image: File.open('app/assets/images/series/doc/highsociety.jpg'),
    genre_ids: [all_genres[14].id]
  }),
  #47
  Serie.create!({
    title: 'Vice: Hunting for Hallucinogenic Honey in 360°',
    description: "Nepal’s Gurung people live mostly in small villages in the vast Annapurna mountain ranges. In this remote region, they practice an ancient tradition of honey hunting where they descend towering cliffs on handmade ladders, to harvest honey nestled under jagged overhangs.",
    year: 2016,
    image: File.open('app/assets/images/series/doc/hallucinate.jpg'),
    genre_ids: [all_genres[14].id]
  }),
  #48
  Serie.create!({
    title: 'Vice: The Exorcist',
    description: "Altar Swartz beheaded 15-year-old Lee Adams in the back of an abandoned Primary School in Cape Town in 2013. In a strange turn of events, Aljar’s defense in court claimed he was possessed by the devil. After pleading guilty the murder, Aljar’s lawyer requested an exorcism be performed on his client. That's when Reverend Cecil Begbie was called in to the job.",
    year: 2016,
    image: File.open('app/assets/images/series/doc/exorcist.jpg'),
    genre_ids: [all_genres[14].id]
  })
]

Episode.destroy_all
# Episodes
all_episodes = [
  # 1 NBA Finals
  Episode.create!({
    title: 'Game 1',
    summary: 'NBA Finals Game 1 Cleveland Cavaliers at Golden State Warriors',
    serie_id: all_series[0].id,
    image: File.open('app/assets/images/episodes/nba/nbafinals16_1.jpg'),
    video_url: '3aiQEbjfv8Y',
    episode_number: 1
  }),
  # 2 NBA Finals
  Episode.create!({
    title: 'Game 2',
    summary: 'NBA Finals Game 2 Cleveland Cavaliers at Golden State Warriors',
    serie_id: all_series[0].id,
    image: File.open('app/assets/images/episodes/nba/nbafinals16_2.jpg'),
    video_url: 'Ae72b10dYdU',
    episode_number: 2
  }),
  # 3 NBA Finals
  Episode.create!({
    title: 'Game 3',
    summary: 'NBA Finals Game 3 Golden State Warriors at Cleveland Cavaliers',
    serie_id: all_series[0].id,
    image: File.open('app/assets/images/episodes/nba/nbafinals16_3.jpg'),
    video_url: 'G-GI54oH_oo',
    episode_number: 3
  }),
  # 4 NBA Finals
  Episode.create!({
    title: 'Game 4',
    summary: 'NBA Finals Game 4 Golden State Warriors at Cleveland Cavaliers',
    serie_id: all_series[0].id,
    image: File.open('app/assets/images/episodes/nba/nbafinals16_4.jpg'),
    video_url: 'cs4FZWcQawQ',
    episode_number: 4
  }),
  # 5 NBA Finals
  Episode.create!({
    title: 'Game 5',
    summary: 'NBA Finals Game 5 Cleveland Cavaliers at Golden State Warriors',
    serie_id: all_series[0].id,
    image: File.open('app/assets/images/episodes/nba/nbafinals16_5.jpg'),
    video_url: '494lFLd4OXI',
    episode_number: 5
  }),
  # 6 NBA Finals
  Episode.create!({
    title: 'Game 6',
    summary: 'NBA Finals Game 6 Golden State Warriors at Cleveland Cavaliers',
    serie_id: all_series[0].id,
    image: File.open('app/assets/images/episodes/nba/nbafinals16_6.jpg'),
    video_url: 'bzY9xOxltSs',
    episode_number: 6
  }),
  # 7 NBA Finals
  Episode.create!({
    title: 'Game 7',
    summary: 'NBA Finals Game 7 Cleveland Cavaliers at Golden State Warriors',
    serie_id: all_series[0].id,
    image: File.open('app/assets/images/episodes/nba/nbafinals16_7.jpg'),
    video_url: '3hp7NfhmGfA',
    episode_number: 7
  }),
  # 8 Morgan
  Episode.create!({
    title: 'IBM Watson Trailer: Morgan',
    summary: 'A corporate troubleshooter (Kate Mara) is sent to a remote, top-secret location, where she is to investigate and evaluate a terrifying accident. She learns the event was triggered by a seemingly innocent “human,” who presents a mystery of both infinite promise and incalculable danger.',
    serie_id: all_series[1].id,
    image: File.open('app/assets/images/series/morgan.jpg'),
    video_url: 'gJEzuYynaiw'
  }),
  # 9 John Wick 2
  Episode.create!({
    title: 'Trailer: John Wick: Chapter 2',
    summary: 'The continuing adventures of former hitman, John Wick.',
    serie_id: all_series[2].id,
    image: File.open('app/assets/images/series/movies/john-wick-2.jpg'),
    video_url: 'KGh16qHmUck'
  }),
  # 10 The Great Wall
  Episode.create!({
    title: 'Trailer: The Great Wall',
    summary: 'Starring global superstar Matt Damon and directed by one of the most breathtaking visual stylists of our time, Zhang Yimou (Hero, House of Flying Daggers), Legendary’s The Great Wall tells the story of an elite force making a valiant stand for humanity on the world’s most iconic structure. The first English-language production for Yimou is the largest film ever shot entirely in China.',
    serie_id: all_series[3].id,
    image: File.open('app/assets/images/series/movies/the-great-wall.jpg'),
    video_url: 'av85pHZcncE'
  }),
  # 11 Power Rangers
  Episode.create!({
    title: 'Trailer: Power Rangers',
    summary: 'A group of high-school kids, who are infused with unique superpowers, harness their abilities in order to save the world.',
    serie_id: all_series[4].id,
    image: File.open('app/assets/images/series/movies/power-rangers.jpg'),
    video_url: 'M5Kgm2I-jFU'
  }),
  # 12 Resident Evil
  Episode.create!({
    title: 'Resident Evil: The Final Chapter',
    summary: "Picking up immediately after the events in Resident Evil: Retribution, humanity is on its last legs in Washington D.C. As the only survivor of what was meant to be humanity's final stand against the undead hordes, Alice must return to where the nightmare began - Raccoon City, where the Umbrella Corporation is gathering its forces for a final strike against the only remaining survivors of the apocalypse.",
    serie_id: all_series[5].id,
    image: File.open('app/assets/images/series/movies/resident-evil.jpg'),
    video_url: 'Zxo0aoetVAo'
  }),
  # 13 Underworld
  Episode.create!({
    title: 'Trailer: Underworld: Blood Wars',
    summary: 'Vampire death dealer, Selene (Kate Beckinsale) fights to end the eternal war between the Lycan clan and the Vampire faction that betrayed her.',
    serie_id: all_series[6].id,
    image: File.open('app/assets/images/series/movies/underworld.jpg'),
    video_url: 'QSlaWHDu5WU'
  }),
  # 14 Jackie
  Episode.create!({
    title: 'Trailer: Jackie',
    summary: "Following the assassination of her husband, First Lady Jacqueline Kennedy fights through grief and trauma to regain her faith, console her children, and define her husband's historic legacy.",
    serie_id: all_series[7].id,
    image: File.open('app/assets/images/series/movies/jackie.jpg'),
    video_url: 'jjClaFDhSCs'
  }),
  # 15 Patriots
  Episode.create!({
    title: 'Trailer: Patriots Day',
    summary: "An account of Boston Police Commissioner Ed Davis's actions in the events leading up to the 2013 Boston Marathon bombing and the aftermath, which includes the city-wide manhunt to find the terrorists behind it.",
    serie_id: all_series[8].id,
    image: File.open('app/assets/images/series/movies/patriots-day.jpg'),
    video_url: 'LLJp96zInUQ'
  }),
  # 16 Allied
  Episode.create!({
    title: 'Trailer: Allied',
    summary: 'ALLIED is the story of intelligence officer Max Vatan (Pitt), who in 1942 North Africa encounters French Resistance fighter Marianne Beausejour (Cotillard) on a deadly mission behind enemy lines. Reunited in London, their relationship is threatened by the extreme pressures of the war.',
    serie_id: all_series[9].id,
    image: File.open('app/assets/images/series/movies/allied.jpg'),
    video_url: 'Jlp94-C31cY"'
  }),
  # 17 Pirates
  Episode.create!({
    title: 'Trailer: Pirates of the Caribbean: Dead Men Tell No Tales',
    summary: 'Captain Jack Sparrow searches for the trident of Poseidon.',
    serie_id: all_series[10].id,
    image: File.open('app/assets/images/series/movies/pirates.jpg'),
    video_url: '6i77T6KzYxM'
  }),
  # 18 Middle School
  Episode.create!({
    title: 'Trailer: Middle School: The Worst Years of My Life',
    summary: 'A quiet teenage artist Rafe Katchadorian has a wild imagination and is sick of middle school and the rules that have been put before him. Rafe and his best friend Leo have come up with a plan; break every rule in the school hand book and as you expect trouble follows.',
    serie_id: all_series[11].id,
    image: File.open('app/assets/images/series/movies/middle-school.jpg'),
    video_url: 'k859-Vu-TLw'
  }),
  # 19 Fantastic Beasts
  Episode.create!({
    title: 'Trailer: Fantastic Beasts and Where to Find Them',
    summary: "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school.",
    serie_id: all_series[12].id,
    image: File.open('app/assets/images/series/movies/fantastic-beasts.jpg'),
    video_url: 'MtjfNzEVfAQ'
  }),
  # 20 Denial
  Episode.create!({
    title: 'Trailer: Denial',
    summary: 'Acclaimed writer and historian Deborah E. Lipstadt must battle for historical truth to prove the Holocaust actually occurred when David Irving, a renowned denier, sues her for libel.',
    serie_id: all_series[13].id,
    image: File.open('app/assets/images/series/movies/denial.jpg'),
    video_url: 'VzL0qrSDy_o'
  }),
  # 21 Nerve
  Episode.create!({
    title: 'Trailer: Nerve',
    summary: "A high school senior finds herself immersed in an online game of truth or dare, where her every move starts to become manipulated by an anonymous community of 'watchers.'",
    serie_id: all_series[14].id,
    image: File.open('app/assets/images/series/movies/nerve.jpg'),
    video_url: 'AX1BTiHzq-I'
  }),
  # 22 Lego Batman
  Episode.create!({
    title: 'Trailer: The LEGO Batman Movie',
    summary: 'A spin-off of The Lego Movie (2014) centering on the character of Batman.',
    serie_id: all_series[15].id,
    image: File.open('app/assets/images/series/movies/lego-batman.jpg'),
    video_url: 'h6DOpfJzmo0'
  }),
  # 23 Justice League
  Episode.create!({
    title: 'Trailer: Justice League',
    summary: "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.",
    serie_id: all_series[16].id,
    image: File.open('app/assets/images/series/movies/justice-league.jpg'),
    video_url: 'fIHH5-HVS9o'
  }),
  # 24 My Blind Brother
  Episode.create!({
    title: 'Trailer: My Blind Brother',
    summary: 'The rivalry between two brothers reaches a fever pitch during a charity swim competition.',
    serie_id: all_series[17].id,
    image: File.open('app/assets/images/series/movies/my-blind-brother.jpg'),
    video_url: '5jCQBCfJGhY'
  }),
  # 25 Conan 1
  Episode.create!({
    title: "Clueless Gamer: 'Gears of War 4' with Wiz Khalifa",
    summary: "CONAN Highlight: Conan is locked and loaded for combat with Wiz riding shotgun. Does the battlefield seem extra smoky to anyone else?",
    serie_id: all_series[18].id,
    image: File.open('app/assets/images/series/conan-obrien.jpg'),
    video_url: 'CgIgBHQIi_s',
    episode_number: 1
  }),
  # 26 Conan 2
  Episode.create!({
    title: "Ice Cube, Kevin Hart And Conan Help A Student Driver",
    summary: "CONAN Highlight: A CONAN staffer is learning the rules of the road, with a little help from Kevin Hart, Ice Cube, & Conan. Look out, fellow drivers!",
    serie_id: all_series[18].id,
    image: File.open('app/assets/images/series/conan-obrien.jpg'),
    video_url: '1Za8BtLgKv8',
    episode_number: 2
  }),
  # 27 Conan 3
  Episode.create!({
    title: "Dave Franco & Conan Join Tinder",
    summary: "CONAN Highlight: Conan & Dave are on a mission to meet beautiful women, with the help of the dating app Tinder and a sweet set of wheels.",
    serie_id: all_series[18].id,
    image: File.open('app/assets/images/series/conan-obrien.jpg'),
    video_url: 'YkiR1KjIw7k',
    episode_number: 3
  }),
  # 28 Jimmy Kimmel 1
  Episode.create!({
    title: 'Celebrities Read Mean Tweets #7',
    summary: "This is our 7th edition of Mean Tweets featuring Julia Roberts, Don Cheadle, Ashton Kutcher, Courteney Cox, Andy Garcia, Mindy Kaling, David Blaine, Don Rickles, Ethan Hawke, Matthew McConaughey, June Squibb, Jeremy Piven, Kit Harrington, Emma Stone, Gary Oldman and Sofia Vergara.",
    serie_id: all_series[19].id,
    image: File.open('app/assets/images/series/talk/jimmy-kimmel.jpeg'),
    video_url: 'imW392e6XR0',
    episode_number: 1
  }),
  # 29 Jimmy Kimmel 2
  Episode.create!({
    title: 'YouTube Challenge - I Told My Kids I Ate All Their Halloween Candy',
    summary: "Parents tell their children that they ate all of their halloween candy.",
    serie_id: all_series[19].id,
    image: File.open('app/assets/images/series/talk/jimmy-kimmel.jpeg'),
    video_url: '_YQpbzQ6gzs',
    episode_number: 2
  }),
  # 30 Jimmy Kimmel 3
  Episode.create!({
    title: 'Mean Tweets - President Obama Edition',
    summary: "From time to time, we give celebrities a chance to read some of the mean things people tweet about them. We extended that same offer to our Commander in Chief, who happily agreed. This is an all President Obama edition of #MeanTweets.",
    serie_id: all_series[19].id,
    image: File.open('app/assets/images/series/talk/jimmy-kimmel.jpeg'),
    video_url: 'RDocnbkHjhI',
    episode_number: 3
  }),
  # 31 Jimmy Fallon 1
  Episode.create!({
    title: "'Evolution of Hip-Hop Dancing' (w/ Jimmy Fallon & Will Smith)",
    summary: "Jimmy and Will Smith take us through the history of hip-hop dances.",
    serie_id: all_series[20].id,
    image: File.open('app/assets/images/series/talk/jimmy-fallon.jpeg'),
    video_url: 'ZTpn30Pms8I',
    episode_number: 1
  }),
  # 32 Jimmy Fallon 2
  Episode.create!({
    title: "Lip Sync Battle with Emma Stone",
    summary: "Jimmy and Emma Stone square off in a lip sync battle and Emma shows she's not afraid of lightning fast lyrics.",
    serie_id: all_series[20].id,
    image: File.open('app/assets/images/series/talk/jimmy-fallon.jpeg'),
    video_url: 'bLBSoC_2IY8',
    episode_number: 2
  }),
  # 33 Jimmy Fallon 3
  Episode.create!({
    title: 'Wheel of Musical Impressions with Ariana Grande',
    summary: "Jimmy challenges Ariana to a game of random musical impressions, such as Christina Aguilera singing 'The Wheels on the Bus.'",
    serie_id: all_series[20].id,
    image: File.open('app/assets/images/series/talk/jimmy-fallon.jpeg'),
    video_url: 'ss9ygQqqL2Q',
    episode_number: 3
  }),
  # 34 Stephen Colbert 1
  Episode.create!({
    title: "Jon Stewart Takes Over Colbert's Late Show Desk",
    summary: "Some stories, like the ouster of Fox News chairman Roger Ailes, are too big for one late night host to tackle alone.",
    serie_id: all_series[21].id,
    image: File.open('app/assets/images/series/talk/colbert.jpg'),
    video_url: 'mNiqpBNE9ik',
    episode_number: 1
  }),
  # 35 John Oliver 1
  Episode.create!({
    title: 'Police Accountability: Last Week Tonight with John Oliver (HBO)',
    summary: "John Oliver discusses the systems in place to investigate and hold police officers accountable for misconduct.",
    serie_id: all_series[22].id,
    image: File.open('app/assets/images/series/talk/john-oliver.jpg'),
    video_url: 'zaD84DTGULo',
    episode_number: 1
  }),
  # 36 Trevor Noah 1
  Episode.create!({
    title: 'The Daily Show - Vice Presidential Debate Wrap-Up',
    summary: "In the 2016 vice presidential debate, Mike Pence deflects questions about Donald Trump's scandals, and Tim Kaine fights back with pre-rehearsed zingers.",
    serie_id: all_series[23].id,
    image: File.open('app/assets/images/series/talk/trevor-noah.jpg'),
    video_url: 'HPtcDrbUa1A',
    episode_number: 1
  }),
  # 37 NBA HOF 1
  Episode.create!({
    title: 'Allen Iverson HOF Speech',
    summary: "Allen Iverson delivers his speech upon being enshrined to the Naismith Memorial Basketball Hall of Fame as part of the class of 2016.",
    serie_id: all_series[24].id,
    image: File.open('app/assets/images/episodes/nba/iverson.jpg'),
    video_url: 'x67RQKknl-g',
    episode_number: 1
  }),
  # 38 NBA HOF 2
  Episode.create!({
    title: 'Yao Ming HOF Speech',
    summary: "Yao Ming delivers his speech upon being enshrined to the Naismith Memorial Basketball Hall of Fame as part of the class of 2016.",
    serie_id: all_series[24].id,
    image: File.open('app/assets/images/episodes/nba/yao.jpg'),
    video_url: 'iHt5pCHgsdk',
    episode_number: 2
  }),
  # 39 NBA HOF 3
  Episode.create!({
    title: 'Shaquille O’Neal HOF Speech',
    summary: "Shaquille O’Neal delivers his speech upon being enshrined to the Naismith Memorial Basketball Hall of Fame as part of the class of 2016.",
    serie_id: all_series[24].id,
    image: File.open('app/assets/images/episodes/nba/shaq.jpg'),
    video_url: 'C-IiiFvfdVo',
    episode_number: 3
  }),
  # 40 NBA 2016 MVP
  Episode.create!({
    title: 'Stephen Curry 2016 MVP Season',
    summary: "Best plays of 2015/2016 MVP Season",
    serie_id: all_series[25].id,
    image: File.open('app/assets/images/series/nba/curry-mvp.jpg'),
    video_url: 'G8IeiioovoQ'
  }),
  # 41 NBA 2016 Season
  Episode.create!({
    title: 'Best Plays from NBA 2016 Season',
    summary: "Best 100 plays from the NBA 2016 season.",
    serie_id: all_series[26].id,
    image: File.open('app/assets/images/series/nba/nba-16.jpg'),
    video_url: 'f05koa6s4Jw'
  }),
  # 41 NBA 2016 Slam Dunk
  Episode.create!({
    title: 'NBA 2016 Slam Dunk Contest',
    summary: "Verizon Slam Dunk Contest Full Highlights - February 13, 2016",
    serie_id: all_series[27].id,
    image: File.open('app/assets/images/series/nba/nba-16-slam-dunk.jpg'),
    video_url: 'lGzXOXXF0H8'
  }),
  # 41 NBA 2016 All Star Game
  Episode.create!({
    title: 'NBA 2016 All Star Game',
    summary: "Best plays from the NBA 2016 All Star Game in Toronto, CA.",
    serie_id: all_series[28].id,
    image: File.open('app/assets/images/series/nba/nba-16-allstar.jpg'),
    video_url: 'MGHRpjq_m2E'
  }),
  Episode.create!({
    title: '2016 Season: Part One',
    summary: "'We'll fight y'all on Tiger Mountain!' More fun with NFL mouth shapes.",
    serie_id: all_series[29].id,
    image: File.open('app/assets/images/episodes/nfl/2016-badlipreading-pt1.jpg'),
    video_url: 'W-kGosnzvjU',
    episode_number: 1
  }),
  Episode.create!({
    title: '2015 Season',
    summary: "'NFL 2015' — A Bad Lip Reading of The NFL",
    serie_id: all_series[29].id,
    image: File.open('app/assets/images/episodes/nfl/2015-badlipreading.jpg'),
    video_url: 'OTRmyXX6ipU',
    episode_number: 2
  }),
  Episode.create!({
    title: 'Highlights: Super Bowl XLIX',
    summary: "Super Bowl XLIX: Patriots vs. Seahawks highlights",
    serie_id: all_series[30].id,
    image: File.open('app/assets/images/series/nfl/superbowl2015.jpg'),
    video_url: 'Cz8ENFKYXe0'
  }),
  Episode.create!({
    title: 'Highlights: Super Bowl XLVIII',
    summary: "Super Bowl XLVIII: Seahawks vs. Broncos highlights",
    serie_id: all_series[31].id,
    image: File.open('app/assets/images/series/nfl/superbowl2014.jpg'),
    video_url: 'N-byJvHAXQA'
  }),
  Episode.create!({
    title: 'Highlights: Super Bowl XLVII',
    summary: "Super Bowl XLVII: Ravens vs. 49ers highlights",
    serie_id: all_series[32].id,
    image: File.open('app/assets/images/series/nfl/superbowl2013.jpg'),
    video_url: 'BKNj4XHGDv0'
  }),
  Episode.create!({
    title: 'Highlights: Super Bowl XLVI',
    summary: "Super Bowl XLVI: Giants vs. Patriots highlights",
    serie_id: all_series[33].id,
    image: File.open('app/assets/images/series/nfl/superbowl2012.jpg'),
    video_url: 'VQ5wDbaVJ3A'
  }),
  Episode.create!({
    title: "Men's 100m Final",
    summary: "Men's 100m Final | Rio 2016 Replay",
    serie_id: all_series[34].id,
    image: File.open('app/assets/images/episodes/olympics/mens100m.jpg'),
    video_url: '4gUW1JikaxQ',
    episode_number: 1
  }),
  Episode.create!({
    title: "Men's 4x100m Medley Final",
    summary: "Rio Replay: Men's 4x100m Medley Relay Final",
    serie_id: all_series[34].id,
    image: File.open('app/assets/images/episodes/olympics/mens4x100m.jpg'),
    video_url: 'UmIYanq5gH8',
    episode_number: 2
  }),
  Episode.create!({
    title: "Women's 800m Freestyle Final",
    summary: "Rio Replay: Women's 800m Freestyle Final",
    serie_id: all_series[34].id,
    image: File.open('app/assets/images/episodes/olympics/womens800m.jpg'),
    video_url: 'GAGXNs0MXzI',
    episode_number: 3
  }),
  Episode.create!({
    title: "Women's Gymnastics All-Around Individual Final",
    summary: "Rio Replay: Women's Individual All-Around Final",
    serie_id: all_series[34].id,
    image: File.open('app/assets/images/episodes/olympics/womensgym.jpg'),
    video_url: '1OmSm1S1z60',
    episode_number: 4
  }),
  Episode.create!({
    title: 'Donald Trump vs. Hillary Clinton Town Hall Debate',
    summary: 'Donald Trump (Alec Baldwin) and Hillary Clinton (Kate McKinnon) take questions from undecided voters (Leslie Jones, Beck Bennett, Michael Che, Bobby Moynihan, Kyle Mooney) in the second presidential debate.',
    serie_id: all_series[35].id,
    image: File.open('app/assets/images/episodes/snl/trumphillary.jpg'),
    video_url: 'qVMW_1aZXRk',
    episode_number: 1
  }),
  Episode.create!({
    title: 'Star Wars Undercover Boss: Starkiller Base',
    summary: 'Kylo Ren (Adam Driver) goes undercover as Matt, a radar technician, at Starkiller Base.',
    serie_id: all_series[35].id,
    image: File.open('app/assets/images/episodes/snl/starwars.jpg'),
    video_url: 'FaOSCASqLsE',
    episode_number: 2
  }),
  Episode.create!({
    title: 'Celebrity Jeopardy - SNL 40th Anniversary Special',
    summary: 'Alex Trebek (Will Ferrell) tries his best to keep contestants Sean Connery (Darrell Hammond), Justin Bieber (Kate McKinnon), Tony Bennett (Alec Baldwin), Burt Reynolds (Norm Macdonald), Christoph Waltz (Taran Killam), Matthew McConaughey (Jim Carrey) and Bill Cosby (Kenan Thompson) in line.',
    serie_id: all_series[35].id,
    image: File.open('app/assets/images/episodes/snl/jeopardy.jpg'),
    video_url: 'ImaYMoTi2g8',
    episode_number: 3
  }),
  Episode.create!({
    title: 'Tidal',
    summary: 'When Tidal experiences technical difficulty, Chloe the intern (Ariana Grande) steps in and performs hit songs from Britney Spears, Shakira, Rihanna and more.',
    serie_id: all_series[35].id,
    image: File.open('app/assets/images/episodes/snl/tidal.jpg'),
    video_url: 'j7uBph38kXo',
    episode_number: 4
  }),

  Episode.create!({
    title: 'Music Video: Kanye - Famous',
    summary: "Music video for Kanye West's Famous",
    serie_id: all_series[36].id,
    image: File.open('app/assets/images/series/music/kanyewest1.jpg'),
    video_url: 'p7FCgw_GlWc'
  }),
  Episode.create!({
    title: 'Music Video: Glass Animals - Pools',
    summary: "Music video for  Glass Animals' Pools",
    serie_id: all_series[37].id,
    image: File.open('app/assets/images/series/music/glassanimals1.jpg'),
    video_url: 'HQYC2EfzZZw'
  }),
  Episode.create!({
    title: 'Music Video: James Blake - Limit To Your Love',
    summary: "Music video for James Blake's Limit To Your Love",
    serie_id: all_series[38].id,
    image: File.open('app/assets/images/series/music/jamesblake1.jpg'),
    video_url: 'oOT2-OTebx0'
  }),
  Episode.create!({
    title: 'Music Video: J. Cole - Love Yourz',
    summary: "Music video for J. Cole's Love Yourz",
    serie_id: all_series[39].id,
    image: File.open('app/assets/images/series/music/jcole1.jpg'),
    video_url: 'ZPCAvzIFY-s'
  }),
  Episode.create!({
    title: 'Music Video: Frank Ocean - Forrest Gump',
    summary: "Frank Ocean performs 'Forrest Gump' off his critically acclaimed album Channel ORANGE at the Grammys.",
    serie_id: all_series[40].id,
    image: File.open('app/assets/images/series/music/frankocean1.jpg'),
    video_url: 'iHyo82Zqx6U'
  }),
  Episode.create!({
    title: 'Music Video: Beyoncé - Hold Up',
    summary: "Music video for Beyoncé's Hold Up",
    serie_id: all_series[41].id,
    image: File.open('app/assets/images/series/music/beyonce1.jpg'),
    video_url: 'PeonBmeFR8o'
  }),
  Episode.create!({
    title: 'Music Video: Rhye - The Fall',
    summary: "Music video for Rhye's The Fall",
    serie_id: all_series[42].id,
    image: File.open('app/assets/images/series/music/rhye1.jpg'),
    video_url: 'F6yfFWvoygY'
  }),
  Episode.create!({
    title: 'Music Video: Dr. Dog - That Old Black Hole',
    summary: "Music video for Dr. Dog's That Old Black Hole",
    serie_id: all_series[43].id,
    image: File.open('app/assets/images/series/music/drdog1.jpg'),
    video_url: 'Ojf0waAxpL0'
  }),

  Episode.create!({
    title: 'Vice Autobiographies: Venus X',
    summary: "Venus X Wants to Party the Pain Away",
    serie_id: all_series[44].id,
    image: File.open('app/assets/images/series/doc/venusx.jpeg'),
    video_url: 'yIlYZRse-Ik',
    episode_number: 1
  }),
  Episode.create!({
    title: 'Vice Autobiographies: D.R.A.M.',
    summary: "D.R.A.M. Reflects on Life Before and After 'Cha Cha'",
    serie_id: all_series[44].id,
    image: File.open('app/assets/images/series/doc/dram.jpg'),
    video_url: 'o8wHc8cYnic',
    episode_number: 2
  }),
  Episode.create!({
    title: 'Vice Autobiographies: Tiga',
    summary: "How Tiga Ignited Montreal's Dance Music Movement",
    serie_id: all_series[44].id,
    image: File.open('app/assets/images/series/doc/tiga.jpg'),
    video_url: 'IjTBNMlJamE',
    episode_number: 3
  }),
  Episode.create!({
    title: 'Vice Autobiographies: RJ Mitte',
    summary: "RJ Mitte of 'Breaking Bad' on Living with Cerebral Palsy",
    serie_id: all_series[44].id,
    image: File.open('app/assets/images/series/doc/rjmitte.jpg'),
    video_url: 'Cc-cbcJVw00',
    episode_number: 4
  }),
  Episode.create!({
    title: 'A Conclusive List of the Top Five Scariest Horror Comics',
    summary: "Art editor Nick Gazin shares the best terror comics.",
    serie_id: all_series[45].id,
    image: File.open('app/assets/images/series/doc/comics.jpg'),
    video_url: 'n5KFdwuQbm8',
    episode_number: 1
  }),
  Episode.create!({
    title: 'High Society: UK Weed Laws',
    summary: "How Weed Laws Are Failing the UK: High Society",
    serie_id: all_series[46].id,
    image: File.open('app/assets/images/series/doc/highsociety.jpg'),
    video_url: 'bdkrZF8pQu4',
    episode_number: 1
  }),
  Episode.create!({
    title: 'Hunting for Hallucinogenic Honey in 360°',
    summary: "The Nepalese Honey That Makes People Hallucinate",
    serie_id: all_series[47].id,
    image: File.open('app/assets/images/series/doc/hallucinate.jpg'),
    video_url: 'AqmxzAazddw',
    episode_number: 1
  }),
  Episode.create!({
    title: 'Exorcist in South Africa',
    summary: "The Exorcist Trying to Heal South Africa’s Satanic Murderer",
    serie_id: all_series[48].id,
    image: File.open('app/assets/images/series/doc/exorcist.jpg'),
    video_url: 'nTHKCo-Oj1k',
    episode_number: 1
  })
]

#users

reviews = [];

review_bodies = [
  "Wow, what an old video.",
   "I remember when this was aired!",
   "Ugh.. this is a horrible video. So old and grainy",
   "Is this what TV was like back then?",
   "So interesting. I'm glad TV got better.",
   "So nostalgic! I want to watch more!",
   "Post more! This was great.",
   "Haha",
   "I'm only offended to be called a male if it's said in a condescending manner.",
   "Female shouldn't be considered bad. Im happy to say I'm a female, happy to say I'm a girl, happy to say I'm a woman.",
   "I'm an Arab and I love this. I remember having it on VHS my father got me (and he's Arab too).",
   "This must have been Donald Trump's favorite when he was a kid.",
   "made me nostalgic",
   "i like spinach",
   "haha i loved deez as kid and still do",
   "this is 'real' television",
   "good old times",
   "What channel did this come out on?",
   "stressbuster",
   "im 14 but i loved old cartoons like scooby doo popeye and old school mickey mouse",
   "the best of the best,,, makes me feel like a kid again... just love it....",
   "watching these good ol' classics..",
   "Absolutely loving this!!",
   "don't think it hasn't been a taste of heaven,  cuz it hasn't",
   "Truly funny but my fav will always be Backyard Oproar. :)",
   "Awesome clip",
   "Funniest clip",
   "This stuff cracks me up",
   "this is so lame.",
   "I miss Tang.",
   "So that's where that's a spicy meatball came from for The Mask movie with Jim Carrey. It was from that commercial from the 70s.",
   "Gosh I miss teaberry gum.",
   "Once the nukes hit America. These commercials should be playing in every radio and telelvison",
   "George is gunna need a bigger boat!",
   "Americans used to be so white back then...",
   "Thank you so much for these snippets! I remember so many of them. ",
   "Most of these clichés are still used today!",
   "Many memories with these classic commercials.",
   "bullies said how would you like a nice hiwaiian punch before they hit you.",
   "Every past time was better than present!!! My 41 years of life I cry my beautiful childhood in the 80s",
   "i aint hip to the cartoons of this day and age",
   "where was danger mouse , marine boy , battle for the planets , hong kong phooey , a lot was missed out of this list",
   "That Tom and Jerry intro wasn't from 1975, it was later.",
   "now those are cartoons from back in the day",
   "Ducktales will go down in history as having the catchiest intro tune.",
   "Who else is freaked out by Ronald McDonald",
   "I wish people payed me cheeseburgers for get my picture took",
   "Who is watching this in 2016",
   "Back when Mickey D's tasted good, esp the fries.",
   "Chad brought me here",
   "Sepia-toned nightmares.",
   "reply when your watching in 2017",
   "You'll need the Colgate after all that Coca Cola.",
   "Kids, people were happy in the 50s.  It was nothing like you have been led to believe.",
   "Even with its many problems, it was still an improvement over the 1930s and 1940s (and let's not get started on the 1920s and 1910s, both of which were still in living memory at the time).",
   "Seems like an alternate universe where everyone was so white squeaky clean and everything was so generic and conventional; but it all came to a swift end and people shocked into reality right after the death of Kennedy and the arrival of The Beatles.",
   "Ugh!! I was born in the wrong decade! :/ I should've been raised in the fifties",
   "As a big Coca-Cola fan I love the old ads!",
   "I wish I was born in the 50s. That's my favorite part of my grandparents. There house is all 50s stuff but with more modern walls and stuff.",
   "Look at these cars! Living back in those times must have been awsome...",
   "damn all these people were young and beautiful,  now theyre probably super old or dead 😢 this is gonna happen to us.",
   "I am so fucking embarrassed, those were great times but these adverts were beyond STRANGE!",
   "oh for pete's sake, we didn't live in fear!!!!!  jeeez!!!!    and today we live in total fear of ISIS! yeah right.  so what's the big difference in fear factor?",
   "In 2015, these commercials would have a black, an Asian, a homosexual, a handicap person, a Muslim, and a transgender person, as to not be called racist and prejudice for not using them.",
   "I love these old commercials. I didn't mind watching them but I hate todays commercials. They are lame, tasteless, loud and they insult my intelligence and so do the new TV show and most movies. I don't have a TV anymore.",
   "Commercials in the past were so warm and cozy, unlike commercials nowadays that are  loud and annoying as hell!",
   "Thank God people have changed socially. I would go crazy in freaking Stepford land everyone with their hairdos and fake ass smiles and \"Gee-Golly\" attitudes.",
   "Only a Miliniot would come up with this, DAMN Milinials!!!",
   "Commercials from the 60s and 70s were so sleazy. They tried so hard to convey a message to gullible people.",
   "I can't believe I remember some of these...",
   "LSMFT",
   "Wow great memories.  : D",
   "i don't trust these, judging these were from a time where people thought lobotomies were working medical prodecures",
   "Take it from me, Tang is gross!  I tried it as an adult and said to myself, \"Only a kid could drink this!  It's disgusting!\"",
   "YESSS",
   "commercials were so much more straight forward, they practically said \"BUY THIS THING\"",
   "*why am i here?",
   "this makes me have a fallout feeling xD",
   "Some of those toys were not cheap! That last one was $19.95 in 1965. That's $152 in 2016 dollars! No wonder I never had any of these unless my mom found them at a garage sale.",
   "I wish I lived in this time period so badly  .... (T^T)",
   "Wow I miss those crappy toys that came in cereal boxes",
   "Dope to the upmost!!!",
   "A toy horse that any dead beat dad can put together.",
   "These two decades had some really cool toys.",
   "Triggered",
   "Thank you for uploading.",
   "I was born in 195O and remember many of these! Thanks for sharing!",
   "I was born in 1964...",
   "Cartoons today and toys are so sanitized. I feel sorry for kids. Saturday morning cartoons currently are so boring.",
   "Great memories! Thank you for posting this gem!",
   "Well that was depressing..",
   "Love your videos....great job, thanks",
   "Thanks for all your hard work.  Brings back a lot of memories.",
   "My keyboard has changed and no matter how many times I correct my typing mistakes they still text out wrong. Sorry about that.",
   "Wow....I have never felt such a fondness for my youth as I have seeing these old ads from my childhood.  Magic, pure and simple.",
   "Sigh, what a great time to be a kid..:-) And proud to be a Baby Boomer..:-)",
   "Great video!  Thanks for putting this together!",
   "remember when we were yo-yo crazy???",
   "I am so jealous the toys back then we're so great!!! Today we are stuck with overpriced crap made in China!!",
   "I was born in 1959 and Americans sure are into teaching children about killing at a very early age don't ya think?",
   "ahh nutty no iq republicunts are everywhere,,cant even watch old tv commercials,",
   "COLOR?!?!?!?!? IT CAN'T BE!!!!!",
   "Thank you so much for letting us see the commercials.",
   "But also for letting us see them without fake, unfunny voice-overs.",
   "These sre the real deal.",
   "Thank you for posting these gems.",
   "A little girl strolling her Chatty Kathy in the park - ALL ALONE?  Never see that again.",
   "Vietnam. I don't like those dolls. I was born in 1999",
   "\" We'll Get'm to buy!\"",
   "Yes, our parents were the best ..... the best",
   "Outstanding! Thanks for the memories",
   "I remember these, I remember these!!!",
   "Awesome collection warts and all !!"
];

200.times do
  serie_id = all_series[rand(48)].id
  user_id = all_users[rand(20)].id
  rating = rand(1..5)
  body = review_bodies.sample

  review = Review.new({
    serie_id: serie_id,
    user_id: user_id,
    rating: rating,
    body: body
  })

  reviews.push(review) if review.save
end
