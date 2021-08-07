import * as types from '../types';

const initialState = {};

const mediaReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_MEDIA:
            state = action.payload;
            return {...state};
        default:
            return {...state};
    }
};

export default mediaReducer;