import React, { Component } from 'react'

// import { Player } from 'video-react';
// import MovieTrailer from './movieTrailer'
export default class MovieDetailsInfor extends Component {

    render() {
        const { moviesDetail } = this.props
        return (
            <div className='col-lg-4 col-sm-12' style={{ letterSpacing: '2px' }}>
                <p>{new Date(moviesDetail.ngayKhoiChieu).toLocaleDateString()}</p>
                <span> {moviesDetail.maNhom} </span>
                <span className='text-capitalize'> {moviesDetail.tenPhim}-{moviesDetail.biDanh} </span>
                <p>103 phút - 7.4 IMDb - 2D/Digital/3D/IMAX/4DX</p>
                <button className='btnBuyTicketDetail mx-1'>Mua vé</button>
            </div>
        )
    }
}
