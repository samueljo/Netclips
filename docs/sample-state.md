```js
{
  currentUser: {
    id: 1,
    email: "app-academy@appacademy.com"
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
      rated: true,
      rating: 4,
      image_url: "...",
      genres: {
        1: {
          id: 1,
          name: "NBA"
        }
      },
      my_listed: false,
      reviewed: true,
    }
  },
  episodes: {
    1: {
      id: 1,
      title: "Game 7",
      description: "Cleveland Cavaliers at Golden State Warriors June 19th, 2016",
      video_url: "...",
      image_url: "...",
      series_id: "1",
      playing: true,
      current_episode: true
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
  search: [""],
  genre: [""]
}
```
