import Axios from "axios";
class AdminService {

    API_list_account(groupID) {
        return (
            Axios({
                method: "GET",
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}`
            })
        )
    }

    API_update_account(user) {
        let userLogin = JSON.parse(localStorage.getItem("credentials"))
        console.log(userLogin)
        return (
            Axios({
                method: "PUT",
                url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
                headers:
                {
                    "Authorization": "Bearer  " + userLogin.accessToken
                },
                data: user
            })
        )
    }


    API_remove_account(user) {
        let userLogin = JSON.parse(localStorage.getItem("credentials"))
        return (
            Axios({
                method: "DELETE",
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`,
                headers:
                {
                    "Authorization": "Bearer  " + userLogin.accessToken
                },
                data: user
            })
        )
    }

    API_add_new_account(user) {
        let userLogin = JSON.parse(localStorage.getItem("credentials"))
        return (
            Axios({
                method: "POST",
                url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
                headers:
                {
                    "Authorization": "Bearer  " + userLogin.accessToken
                },
                data: user
            })
        )
    }
    API_get_list_movie(page) {
        // let userLogin = JSON.parse(localStorage.getItem("credentials"))
        return (
            Axios({
                method: "GET",
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${page}`,

            })
        )
    }

    API_change_movie_infor(movie) {
        let userLogin = JSON.parse(localStorage.getItem("credentials"))
        return (
            console.log(movie),
            Axios({
                method: "POST",
                url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
                headers:
                {
                    "Authorization": "Bearer  " + userLogin.accessToken
                },
                data: movie
            })
        )
    }
    API_remove_movie(movie) {
        let userLogin = JSON.parse(localStorage.getItem("credentials"))
        //500 (Internal Server Error)
        return (
            Axios({
                method: "DELETE",
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${movie.maPhim}`,
                headers:
                {
                    "Authorization": "Bearer  " + userLogin.accessToken
                },
                data: movie
            })
        )
    }
    API_change_movie_image(movie) {
        // let userLogin = JSON.parse(localStorage.getItem('credentials'))
        var frm = new FormData();
        frm.append('File', File, );
        frm.append('tenphim', `${movie.tenPhim}`)
        frm.append('manhom', `${movie.maNhom}`)
        return (
            Axios({
                method: 'POST',
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim',
                data: frm
            })
        )
    }
}

export default AdminService
