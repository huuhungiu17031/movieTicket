import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteMovie } from '../../../redux/action/adminAction'
// import ChangeImage from './changeImage'
// import ModalMovie from './modalMovie'
class MovieBodyBarAdmin extends Component {
    handleDelete(movie) {
        console.log('a')
        this.props.dispatch(deleteMovie(movie))
    }
    handlePrintInfor(movie) {
        console.log(movie)
        localStorage.setItem('movie', JSON.stringify(movie))
        
    }
    renderHTML = () => {
        const { listMovie } = this.props;
        console.log(listMovie)
        return listMovie.map((movie) => {
            return (
                <tr id='adjustTheHeight' key={movie.maPhim}>
                    <td>
                        <button
                            onClick={() => { this.handlePrintInfor(movie) }}
                            className='btn btn-primary'
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            >
                            <i className="fa fa-check"></i>

                        </button>
                        <button
                            className='btn btn-primary'
                            onClick={() => { this.handleDelete(movie) }}>
                            <i className="fa fa-eraser"></i>
                        </button>
                    </td>
                    <td>
                        {movie.maPhim}
                    </td>
                    <td className='text-capitalize'>
                        {movie.tenPhim}
                    </td>
                    <td>
                        {movie.biDanh}
                    </td>
                    <td>
                        {movie.trailer}
                    </td>
                    <td>
                        <img width={100} height={100} src={movie.hinhAnh} alt={movie.moTa} />
                    </td>
                    <td>
                        {movie.moTa.length < 50 ? movie.moTa : movie.moTa.substring(0, 100) + '...'}
                    </td>
                    <td>
                        {movie.maNhom}
                    </td>
                    <td>
                        <div>
                            {new Date(movie.ngayKhoiChieu).toLocaleDateString()}
                        </div>
                        <div>
                            {new Date(movie.ngayKhoiChieu).toLocaleTimeString()}
                        </div>
                    </td>
                    <td>
                        {movie.danhGia}
                    </td>

                </tr>
            )
        })
    }
    render() {
        return (
            <tbody>
                {this.renderHTML()}
            </tbody>
        )
    }
}
export default connect()(MovieBodyBarAdmin)