{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createReview: {errors: ["body can't be blank"]},
  },
  series: {
    1: {
      id: 1,
      name: "2016 NBA Finals",
      description: "Cleveland Cavaliers vs Golden State Warriors 2016 NBA Finals",
      cast: ["Cleveland Cavaliers", "Golden State Warriors"],
      year: "2016",
      rating: 4,
      current_episode_id: 1,
      image_url: "...",
      tags(genre): {
        1: {
          id: 1,
          name: "NBA"
        }
      },
      my_listed: false,
      reviewed: false
    }
  },
  episodes: {
    1: {
      id: 1,
      title: "Game 7",
      description: "Cleveland Cavaliers at Golden State Warriors June 19th, 2016",
      video_url: "...",
      series_id: "1",
      playing: false
    }
  },
  reviews: {
    1: {
      id: 1,
      series_id: 1,
      user_id: 1,
    }
  },
  my-list: [1] (array of series_ids),
}
