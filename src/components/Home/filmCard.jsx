import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class FilmCard extends Component {

    render() {
        let { movie } = this.props
        return (
            <NavLink to={`/MovieDetailScreen/${movie.maPhim}`}>
                <div className='wrapper mx-3'>

                    <div className='card text-left movieCard'>
                        <div className='rating'>
                            <div className='groupID'>{movie.maNhom}</div>
                            <div className='ratingPoint'>
                                <p>{movie.danhGia}</p>
                                <p>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </p>
                            </div>
                        </div>
                        <div className='overlayColor'>

                        </div>
                        <img className='card-img-top' width={310} height={200} src={movie.hinhAnh} alt={movie.moTa} />
                    </div>

                    <div className='card-body mt-2'>
                        <h5 className='card-title '><span className='text-capitalize'>{movie.tenPhim}-{movie.biDanh}</span>  <p className='pt-1'>106 phút</p></h5>

                        <div className='buyTicket text-center text-white'>
                            <h5>MUA VÉ</h5>
                        </div>
                    </div>

                </div>
            </NavLink>

        )
    }
}




