import * as types from '../types';

const initialState = {};

const recommendReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_RECOMMENDATIONS:
            state = action.payload;
            return {...state};
        default:
            return {...state};
    }
};

export default recommendReducer;