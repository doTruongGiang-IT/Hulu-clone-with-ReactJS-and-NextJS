import * as types from '../types';

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_REVIEWS:
            state = action.payload;
            return {...state};
        default:
            return {...state};
    }
};

export default reviewsReducer;