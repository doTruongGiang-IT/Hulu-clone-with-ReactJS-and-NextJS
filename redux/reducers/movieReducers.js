import * as types from '../types';

const initialState = [];

let findIndex = (arr, id) => {
    let result = -1;
    arr.forEach((arrItem, index) => {
        if(arrItem.id === id) {
            result = index;
        }
    });
    return result;
};

const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_MOVIES:
            state = action.payload.results;
            return [...state];
        default:
            return [...state];
    };
};

export default movieReducer;