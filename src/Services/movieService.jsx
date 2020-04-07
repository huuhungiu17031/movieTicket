import Axios from 'axios';
class MovieService{
    getListMovie(){
        return (
            Axios({
                method: 'GET',
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10'
            })
        )
    }
    getDetailMovie(id){
        return(
            Axios({
                method: 'GET',
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
            })
        )
    }
}
export default MovieService