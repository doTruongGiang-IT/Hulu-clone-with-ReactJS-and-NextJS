import * as types from '../types';
import callApi from '../../utils/apiCaller';
import movieTypes from '../../utils/request';

export const getMovies = (movies) => {
    return {
        type: types.GET_MOVIES,
        payload: movies
    };
};

export const getMoviesRequest = (genre) => {
    return (dispatch) => {
        return callApi.getMovieList(movieTypes[genre].url, "GET", null)
                    .then(res => {
                        dispatch(getMovies(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    }
};

export const getMovieDetail = (movie) => {
    return {
        type: types.GET_MOVIE_DETAIL,
        payload: movie
    };
};

export const getMovieDetailRequest = (id) => {
    return (dispatch) => {
        return callApi.getMovieDetail(`${id}?api_key=20bf8893a893af992dc3d4e2d68b909e&language=en-US`, "GET", null)
                    .then(res => {
                        dispatch(getMovieDetail(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    }
};

export const getCast = (casts) => {
    return {
        type: types.GET_CASTS,
        payload: casts
    }
};

export const getCastsRequest = (id) => {
    return (dispatch) => {
        return callApi.getCastMovie(`${id}/credits?api_key=20bf8893a893af992dc3d4e2d68b909e&language=en-US`, "GET", null)
                    .then(res => {
                        dispatch(getCast(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};

export const getReviews = (reviews) => {
    return {
        type: types.GET_REVIEWS,
        payload: reviews
    }
};

export const getReviewsRequest = (id) => {
    return (dispatch) => {
        return callApi.getReviewList(`${id}/reviews?api_key=20bf8893a893af992dc3d4e2d68b909e&language=en-US`, "GET", null)
                    .then(res => {
                        dispatch(getReviews(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};

export const getMedia = (media) => {
    return {
        type: types.GET_MEDIA,
        payload: media
    }
};

export const getMediaRequest = (id) => {
    return (dispatch) => {
        return callApi.getMedia(`${id}/videos?api_key=20bf8893a893af992dc3d4e2d68b909e&language=en-US`, "GET", null)
                    .then(res => {
                        dispatch(getMedia(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};

export const getSimilarities = (similarities) => {
    return {
        type: types.GET_SIMILARITIES,
        payload: similarities
    }
};

export const getSimilaritiesRequest = (id) => {
    return (dispatch) => {
        return callApi.getSimilarities(`${id}/similar?api_key=20bf8893a893af992dc3d4e2d68b909e&language=en-US`, "GET", null)
                    .then(res => {
                        dispatch(getSimilarities(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};

export const getRecommendations = (recommends) => {
    return {
        type: types.GET_RECOMMENDATIONS,
        payload: recommends
    }
};

export const getRecommendationsRequest = (id) => {
    return (dispatch) => {
        return callApi.getRecommendations(`${id}/recommendations?api_key=20bf8893a893af992dc3d4e2d68b909e&language=en-US`, "GET", null)
                    .then(res => {
                        dispatch(getRecommendations(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};

export const getToken = (token) => {
    return {
        type: types.GET_TOKEN,
        payload: token
    }
};

export const getTokenRequest = () => {
    return (dispatch) => {
        return callApi.getToken(`token/new?api_key=20bf8893a893af992dc3d4e2d68b909e`, "GET", null)
                    .then(res => {
                        dispatch(getToken(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};

export const deleteToken = () => {
    return {
        type: types.DELETE_TOKEN,
        payload: null
    }
};

export const getCreditDetails = (details) => {
    return {
        type: types.GET_CREDIT_DETAILS,
        payload: details
    }
};

export const getCreditDetailsRequest = (id) => {
    return (dispatch) => {
        return callApi.getCreditDetails(`${id}?api_key=20bf8893a893af992dc3d4e2d68b909e&language=en-US`, "GET", null)
                    .then(res => {
                        dispatch(getCreditDetails(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};

export const getCreditDetailsImages = (images) => {
    return {
        type: types.GET_CREDIT_DETAILS_IMAGES,
        payload: images
    }
};

export const getCreditDetailsImagesRequest = (id) => {
    return (dispatch) => {
        return callApi.getCreditDetailsImages(`${id}/images?api_key=20bf8893a893af992dc3d4e2d68b909e&language=en-US`, "GET", null)
                    .then(res => {
                        dispatch(getCreditDetailsImages(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};