{
  session:
    {
      currentUser:
        {
          id: 1,
          username: "app-academy"
        }
    }

  errors: []

  series:
    {
      focusedGenreId: genreId,
      serieDisplay: serieObject with episodes & reviews,
      seriesIndex:
        {
          My List:
            {
              genreId: 0,
              series: [serie1, serie2, serie3]
            },
          Comedy:
            {
              genreId: 1,
              series: [serie4, serie5, serie6]
            },
          ...
        }
    }

  search:
    {
      series: [serie1, serie2]
    }


  episodes:
    {
      displayEpisodes: [episode1, episode2]
    }
}
