import Axios from 'axios'
class CinemaService {
    getListCinema() {
        return (
            Axios({
                method: 'GET',
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01'
            })
        )
    }
    API_get_list_room(id) {
        return (
            Axios({
                method: 'GET',
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
            })
        )
    }
}
export default CinemaService;