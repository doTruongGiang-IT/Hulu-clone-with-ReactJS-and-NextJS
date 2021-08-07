import * as types from '../types';

const initialState = {
    list: {},
    details: {},
    images: {}
};

const creditsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_CASTS:
            state.list = action.payload;
            return {...state};
        case types.GET_CREDIT_DETAILS:
            state.details = action.payload;
            return {...state};
        case types.GET_CREDIT_DETAILS_IMAGES:
            state.images = action.payload;
            return {...state};
        default:
            return {...state};
    }
};

export default creditsReducer;