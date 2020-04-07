import { FETCH_CREDENTIAL } from "../../constants/constants"

let initialUserReducers = {
    credentials: null,
    cr: null
}

const UserReducers = (state = initialUserReducers, action) => {
    switch (action.type) {
        case FETCH_CREDENTIAL: {
            state.credentials = action.payload;
            return { ...state }
        }
        case 'cr': {
            state.cr = action.payload
            return { ...state }
        }

        default: return { ...state }
    }


}
export default UserReducers