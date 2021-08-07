import * as types from '../types';

const initialState = {};

const similarityReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_SIMILARITIES:
            state = action.payload;
            return {...state};
        default:
            return {...state};
    };
};

export default similarityReducer;