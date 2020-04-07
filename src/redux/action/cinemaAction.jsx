// import { cinemaService } from './../../Services'
import Axios from "axios";
import { createAction } from '../../redux/action';
import { GET_LIST_CINEMA, GET_LOGO_CINEMA, GET_LIST_ROOM } from '../../redux/constants/constants';
import { cinemaService } from "../../Services";

export const getListCinema = (maHeThongRap, maNhom) => {
    return dispatch => {
        Axios({
            method: "GET",
            url:
                `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`
        })
            .then(res => {
                dispatch(createAction(GET_LIST_CINEMA, res.data));
            })
            .catch(err => {
                console.log(err);
            });
    };
};
export const getLogoCinema = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap'
        })
            .then(res => {
                dispatch(createAction(GET_LOGO_CINEMA, res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getListRoom = (id) => {
    return dispatch => {
        cinemaService.API_get_list_room(id)
            .then(res => {
                dispatch(createAction(GET_LIST_ROOM, res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}


