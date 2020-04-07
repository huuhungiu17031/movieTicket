import React, { Component } from 'react'

export default class Rating extends Component {
    renderRating = (rating) => {
        const star = []
        for (var i = 0; i < rating; i++) {
            star.push(<i key={i} className='fa fa-star' style={{ color: 'red' }}></i>)
        }
        return star
    }
    render() {
        const {moviesDetail}=this.props
        return (
            <div className='col-lg-4 col-sm-12 text-center'>
                <div className='square-1'>
                    <span key={moviesDetail.danhGia}>{moviesDetail.danhGia}</span>
                </div>
                <div className='square-2 '>
                    <h5>{this.renderRating(moviesDetail.danhGia)}</h5>
                    <p>{moviesDetail.danhGia * 23} người đánh giá</p>
                </div>
            </div>
        )
    }
}

