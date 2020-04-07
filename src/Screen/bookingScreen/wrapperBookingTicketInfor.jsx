import React, { Component } from 'react'

export default class WrapperBookingTicketInfor extends Component {
    render() {
        const {element}=this.props
        return (
            <div className='wrapperBookingTicketInfor'>
                <h4>{element.ngayChieu}</h4>
                <h4 className='text-capitalize'><span className='groupId'>C13</span> {element.tenPhim}</h4>
                <h6>120 phút-8.7 IMDb-2D/Digital</h6>
            </div>
        )
    }
}
