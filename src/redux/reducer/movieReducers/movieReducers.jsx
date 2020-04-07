import { GET_DETAIL_MOVIE, GET_LIST_MOVIE } from "../../constants/constants"

let initialStateOfFilms = {
    films: [],
}
const MovieReducers = (state = initialStateOfFilms, action) => {
    switch (action.type) {
        case GET_LIST_MOVIE: {
            state.films = action.payload
            return { ...state }
        }
        case GET_DETAIL_MOVIE: {
            state.movieDetail = action.payload
            return { ...state }
        }
        default: return { ...state }
    }

}
export default MovieReducers