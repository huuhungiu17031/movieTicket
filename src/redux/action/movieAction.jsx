//async action
import { movieService } from '../../Services';
import { GET_LIST_MOVIE, GET_DETAIL_MOVIE } from '../../redux/constants/constants';
import { createAction } from '../../redux/action';

export const getListMovie = () => {
    return (dispatch) => {
        movieService.getListMovie()
            .then((response) => {
                dispatch(
                    createAction(GET_LIST_MOVIE, response.data)
                )
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const getDetailMovie = (id) => {
    return (dispatch) => {
        movieService.getDetailMovie(id)
            .then(response => {
                dispatch(
                    createAction(GET_DETAIL_MOVIE, response.data));
            })
            .catch(err => {
                console.log(err);
            });
    }
}