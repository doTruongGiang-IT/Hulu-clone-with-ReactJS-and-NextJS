import * as types from '../types';

const initialState = {};

const detailReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_MOVIE_DETAIL:
            state = action.payload;
            return {...state};
        default:
            return {...state};
    }
};

export default detailReducer;
