import { GET_LIST_CINEMA, GET_LOGO_CINEMA, GET_LIST_ROOM, TOTAL_PAYMENT } from "../../constants/constants"

let initialStateOfCinema = {
    cinemas: [],
    cinemasLogo: [],
    listRoom: null,
    payment: {}
}
const CinemaReducers = (state = initialStateOfCinema, action) => {
    switch (action.type) {
        case GET_LIST_CINEMA: {
            state.cinemas = action.payload
            return { ...state }
        }
        case GET_LOGO_CINEMA: {
            state.cinemasLogo = action.payload
            return { ...state }
        }
        case GET_LIST_ROOM: {
            state.listRoom = action.payload
            return { ...state }
        }
        case TOTAL_PAYMENT: {
            state.payment =  action.payload
            return { ...state }
        }
        default: return state
    }
}
export default CinemaReducers