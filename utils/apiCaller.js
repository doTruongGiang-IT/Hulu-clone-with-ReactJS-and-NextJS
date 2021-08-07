import axios from "axios";

const MOVIES_URL = "https://api.themoviedb.org/3";
const MOVIE_DETAIL_URL = "https://api.themoviedb.org/3/movie/";
const AUTH_URL = "https://api.themoviedb.org/3/authentication/";
const CREDIT_URL = "https://api.themoviedb.org/3/person";

const callApi = {
    getMovieList: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${MOVIES_URL}${endpoint}`,
            data: body
        });
    },
    getMovieDetail: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${MOVIE_DETAIL_URL}${endpoint}`,
            data: body
        });
    },
    getCastMovie: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${MOVIE_DETAIL_URL}${endpoint}`,
            data: body
        });
    },
    getReviewList: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${MOVIE_DETAIL_URL}${endpoint}`,
            data: body
        });
    },
    getMedia: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${MOVIE_DETAIL_URL}${endpoint}`,
            data: body
        });
    },
    getSimilarities: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${MOVIE_DETAIL_URL}${endpoint}`,
            data: body
        });
    },
    getRecommendations: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${MOVIE_DETAIL_URL}${endpoint}`,
            data: body
        });
    },
    getToken: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${AUTH_URL}${endpoint}`,
            data: body
        });
    },
    getSessionID: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${AUTH_URL}${endpoint}`,
            data: body
        });
    },
    deleteSessionID: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${AUTH_URL}${endpoint}`,
            data: body
        });
    },
    getCreditDetails: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${CREDIT_URL}/${endpoint}`,
            data: body
        });
    },
    getCreditDetailsImages: (endpoint, method='GET', body) => {
        return axios({
            method,
            url: `${CREDIT_URL}/${endpoint}`,
            data: body
        });
    },
}; 

export default callApi;