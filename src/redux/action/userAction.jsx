import { userService } from './../../Services/index'
import { createAction } from '../../redux/action/index'
import { FETCH_CREDENTIAL } from '../constants/constants'
import Swal from 'sweetalert2'
export const login = (user) => {
    return (dispatch) => {
        userService.signIn(user)
            .then(res => {
                dispatch(createAction(FETCH_CREDENTIAL, res.data))
                localStorage.setItem('credentials', JSON.stringify(res.data))
        
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Login Successful. Welcome ${res.data.hoTen}`,
                    showConfirmButton: true,
                    timer: 5000,
                });
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    text: `${err.response.data}`,
                })
                console.log(err.response.data)
            }
            )
    }
}

export const adminSignInAction = (user, history) => {
    console.log(history)
    return (dispatch) => {
        userService.signIn(user)
            .then(res => {
                if (res.data.maLoaiNguoiDung === 'QuanTri') {
                    dispatch(createAction(FETCH_CREDENTIAL, res.data))
                    localStorage.setItem('credentials', JSON.stringify(res.data))
                    history.push('/dashboard')
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        text: 'Bạn là khách hàng ko có quyền truy cập!',
                      })
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
export const signUpAction = (user) => {
    return (dispatch) => {
        userService.signUp(user)
            .then(res => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Signin success. Welcome ${res.data.hoTen}`,
                    showConfirmButton: true,
                    timer: 5000,
                })
                console.log(res)

            })
            .catch(err => {
                console.log(err.response.data);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.response.data}`,
                    footer: '<a href>Why do I have this issue?</a>'
                })

            })
    }
}
export const bookingTicket = (objChair) => {
    return (dispatch) => {
        userService.API_booking_ticket(objChair)
            .then(res => {
                console.log(res)
                
                Swal.fire({
                    icon: 'success',
                    title: `${res.data}`
                })
                window.location.reload()
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }
}

