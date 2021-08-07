import * as types from '../types';

const initialState = "";

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_TOKEN:
            state = action.payload.request_token;
            localStorage.setItem("token", JSON.stringify(action.payload.request_token));
            return state;
        case types.DELETE_TOKEN:
            localStorage.removeItem("token");
            return null;
        default:
            return state;
    };
};

export default authReducer;