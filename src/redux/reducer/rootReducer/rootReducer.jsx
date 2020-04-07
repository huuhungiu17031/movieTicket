import {combineReducers} from 'redux'
import MovieReducers from '../movieReducers/movieReducers'
import CinemaReducers from '../cinemaReducers/cinemaReducers'
import UserReducers from '../userReducers/userReducers'
import adminReducer from '../adminReducers/adminReducer'
export const rootReducers = combineReducers({
   filmDatas:MovieReducers,
   cinemaDatas:CinemaReducers,
   UserReducers,
   adminReducer
})