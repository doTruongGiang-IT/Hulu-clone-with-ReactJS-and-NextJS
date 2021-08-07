const movieTypes = {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=20bf8893a893af992dc3d4e2d68b909e&language=en-US`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=20bf8893a893af992dc3d4e2d68b909e&language=en-US`,
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=20bf8893a893af992dc3d4e2d68b909e&with_genres=28`,
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=20bf8893a893af992dc3d4e2d68b909e&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=20bf8893a893af992dc3d4e2d68b909e&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=20bf8893a893af992dc3d4e2d68b909e&with_genres=10749`,
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=20bf8893a893af992dc3d4e2d68b909e&with_genres=9648`,
    },
    fetchSciFi: {
        title: "Sci-fi",
        url: `/discover/movie?api_key=20bf8893a893af992dc3d4e2d68b909e&with_genres=878`,
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=20bf8893a893af992dc3d4e2d68b909e&with_genres=37`,
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie?api_key=20bf8893a893af992dc3d4e2d68b909e&with_genres=16`,
    },
    fetchTV: {
        title: "TV movies",
        url: `/discover/movie?api_key=20bf8893a893af992dc3d4e2d68b909e&with_genres=10770`,
    },
};

export default movieTypes;