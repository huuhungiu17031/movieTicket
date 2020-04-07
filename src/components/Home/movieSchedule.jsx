import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import BookingScreen from '../../Screen/bookingScreen/bookingScreen'
class MovieSchedule extends Component {
    renderMovieCard(tenPhim) {
        const { name } = this.props
        let poster = '';
        name.map((imageMovie, index) => {
            if (tenPhim === imageMovie.tenPhim) {
                return poster = imageMovie.hinhAnh
            }
            return null
        })
        return poster
    }

    renderDate() {
        const { date } = this.props
      
        return date.map((time, index) => {
            if (index < 6) {
                return <NavLink to={`BookingScreen/${time.maLichChieu}`} className='btn btn-outline-secondary m-1' key={index}>
                    {new Date(time.ngayChieuGioChieu).toLocaleTimeString()}
                </NavLink>
            }
            return null
        })
    }

    render() {
        const { item } = this.props
        return (
            <div className='movieDetailCard btn btn-light w-100' >
                <div className='wrapDetailInforMovie'>
                    <div>
                        <img className='m-1' src={this.renderMovieCard(item)} width={250} height={170} alt={item} />
                    </div>
                    <div className="duration">
                        <h3 className='text-capitalize text-center'>{item}</h3>
                        <p>106 phút</p>
                    </div>
                </div>
                <div className='renderDate'>
                    {this.renderDate()}
                </div>
            </div>
        )
    }
}

export default connect()(MovieSchedule)