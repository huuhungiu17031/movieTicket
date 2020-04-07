import { adminServices } from '../../Services';
import { createAction, createAction2 } from '.';
import Swal from 'sweetalert2';
import { API_LIST_ACCOUNT, EDIT_USER, REMOVE_ACCOUNT, ADD_USER_ACCOUNT, GET_LIST_MOVIE } from '../constants/constants';

export const editUser = (user) => {
    return {
        type: EDIT_USER,
        payload: user
    }
}
export const fetchCredential = (user) => {
    return {
        type: 'cr',
        payload: user
    }
}
export const changeFilmPoster = (fd) => {
    return (dispatch) => {
        console.log('2')
        adminServices.API_change_movie_image(fd)
            .then(
                res => { console.log(res) }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
    }
}
// export const editMovieInfor
export const deleteMovie = (movie) => {
    return (dispatch) => {
        adminServices.API_remove_movie(movie)
            .then(
                res => {
                    if (res) {
                        Swal.fire(
                            'Xóa thành công',
                        )
                    }
                }
            )
            .catch(
                err => {
                    Swal.fire({
                        icon: 'error',
                        text: `${err.response.data}`,
                    })
                }
            )
    }
}

export const getListAccount = (groupID) => {
    return (dispatch) => {
        adminServices.API_list_account(groupID)
            .then(
                res => {
                    localStorage.setItem('listAccounts', JSON.stringify(res.data))
                    dispatch(createAction(API_LIST_ACCOUNT, res.data))
                }
            )
            .catch(
                err => {
                    console.log(err.response)
                })
    }
}

export const updateUserInfor = user => {
    return (dispatch) => {
        adminServices.API_update_account(user)
            .then(res => {
                dispatch(createAction(EDIT_USER, user))
                Swal.fire(
                    'Sửa thành công',
                    window.location.reload()
                )
            })
            .catch(err => {
                console.log(err.response.data)
                Swal.fire({
                    icon: 'error',
                    text: `${err.response.data}`,
                })
            })
    }
}

export const removeAccount = (user, index) => {
    return (dispatch) => {
        adminServices.API_remove_account(user)
            .then(res => {
                dispatch(createAction2(REMOVE_ACCOUNT, user, index))
                if (res) {
                    Swal.fire(
                        'Xóa thành công',
                    )
                }
            })
            .catch(err => {
                // console.log(err.response.data)
                Swal.fire({
                    icon: 'error',
                    text: `${err.response.data}`,
                })
            })
    }
}


export const addNewAccount = (user) => {
    return (dispatch) => {
        adminServices.API_add_new_account(user)
            .then(res => {
                dispatch(createAction(ADD_USER_ACCOUNT, user))
                if (res) {
                    Swal.fire({
                        timer: 1500,
                        title: 'Thêm tài khoản thành công',
                    }
                    )
                    window.location.reload()
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    text: `${err.response.data}`,
                })
            })
    }
}


export const getListMovie = (page) => {
    return (dispatch) => {
        adminServices.API_get_list_movie(page)
            .then(res => {
                dispatch(createAction(GET_LIST_MOVIE, res.data))
            })
            .catch(err => { console.log(err) })
    }
}

export const changeMovieInfor = (movie) => {
    localStorage.setItem('movie', JSON.stringify(movie))
    return (dispatch) => {
        adminServices.API_change_movie_infor(movie)
            .then(res => {
                Swal.fire(
                    'Sửa thành công',
                    window.location.reload()
                )
                dispatch(adminServices.changeFilmPoster(movie))
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    text: `${err.response.data}`,
                })
                console.log(err.response.data)
            })
    }
}


