import {combineReducers} from 'redux';
import movieReducer from './movieReducers';
import detailReducer from './detailReducers';
import creditsReducer from './creditsReducers';
import reviewsReducer from './reviewsReducers';
import mediaReducer from './mediaReducers';
import similarityReducer from './similaritiyReducers';
import recommendReducer from './recommendReducers';
import authReducer from './authReducers';

const appReducers = combineReducers({
    movieReducer,
    detailReducer,
    creditsReducer,
    reviewsReducer,
    mediaReducer,
    recommendReducer,
    similarityReducer,
    authReducer
});

export default appReducers;