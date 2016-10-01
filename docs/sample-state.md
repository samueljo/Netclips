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
      tags(genre): {
        1: {
          id: 1,
          name: "NBA"
        },
        2: {
          id: 2,
          name: "Cleveland Cavaliers"
        },
        3: {
          id: 3,
          name: "Golden State Warriors"
        }
      }
    }
  },
  games: {
    1: {
      id: 1,
      title: "Game 7",
      description: "Cleveland Cavaliers at Golden State Warriers June 19th, 2016",
      video_url: "...",
      series_id: "1"
    }
  }
  reviews: {
    1: {
      id: 1,
      
    }
  }

  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of notes
}
