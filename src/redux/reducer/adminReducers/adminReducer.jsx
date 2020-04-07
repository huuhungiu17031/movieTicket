import { API_LIST_ACCOUNT, EDIT_USER, REMOVE_ACCOUNT, ADD_USER_ACCOUNT, GET_LIST_MOVIE } from "../../constants/constants"

let initialsAdminState = {
    listAccounts: [],
    userEdit: [],
    listMovie: [],
}

let JSON_ACCOUNT = JSON.parse(localStorage.getItem('listAccounts'))
console.log(JSON_ACCOUNT)

let adminReducers = (state = initialsAdminState, action) => {
    let JSON_ACCOUNT = JSON.parse(localStorage.getItem('listAccounts'))
    switch (action.type) {
        case API_LIST_ACCOUNT: {
            state.listAccounts = action.payload;
            return { ...state }
        }
        case EDIT_USER: {
            state.userEdit = action.payload
            return { ...state }
        }
        case REMOVE_ACCOUNT: {
            JSON_ACCOUNT = [...JSON_ACCOUNT, action.payload1]
            state.listAccounts = [...JSON_ACCOUNT]
            return { ...state }
        }
        case ADD_USER_ACCOUNT: {
            console.log(action.payload)
            JSON_ACCOUNT[0] = [...JSON_ACCOUNT, action.payload]
            console.log(JSON_ACCOUNT[0])
            state.listAccounts = [...JSON_ACCOUNT]
            return { ...state }
        }
        case GET_LIST_MOVIE: {
            const updateListMovie = [...action.payload]
            state.listMovie = updateListMovie
            return { ...state }
        }
        default: return { ...state }
    }
}
export default adminReducers