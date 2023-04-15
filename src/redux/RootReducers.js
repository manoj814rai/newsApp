import {combineReducers} from "redux";
import newsReducer from './slices/NewsSlices';

export const rootReducers = combineReducers({
    newsReducer: newsReducer,
});