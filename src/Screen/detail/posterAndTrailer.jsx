import React, { Component } from 'react'

export default class PosterAndTrailer extends Component {
    render() {
        const { moviesDetail } = this.props
        return (
            <div className='col-lg-4 col-sm-12'>
                <div className='moviePoster_element'>
                    <img className='moviePoster'
                        src={moviesDetail.hinhAnh}
                        alt={moviesDetail.tenPhim}
                        width={250} height={300}
                    />
                   
                </div>
            </div>
        )
    }
}
