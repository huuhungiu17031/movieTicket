import Axios from 'axios'
class UserService {
    signUp(data) {
        return Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data
        })
    }
    signIn(user) {
        return Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: user
        })
    }
    API_booking_ticket(objChair) {
        console.log(objChair)
        let userLogin = JSON.parse(localStorage.getItem('credentials'))
        return Axios({
            method: 'POST',
            headers:
            {
                "Authorization": "Bearer  " + userLogin.accessToken
            },
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
            data: objChair
        })
        
    }
    
}
export default UserService