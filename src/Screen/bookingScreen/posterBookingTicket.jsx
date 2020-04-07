import React, { Component } from 'react'

export default class PosterBookingTicket extends Component {
    renderHtml() {
        const { listRoom } = this.props
        if (listRoom !== null) {
            return listRoom.thongTinPhim.hinhAnh
        }
    }
    setBackground = (hinhAnh) => {
        return ({
            backgroundPosition: 'center ',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '96vh',
            backgroundImage: `url(${hinhAnh})`,
        })
    }
    render() {
        return (
            <div className='posterBookingTicket'>
                <img className='left_bookingTicket'  style={this.setBackground(this.renderHtml())} />
            </div>
        )
    }
}
