import React, { Component } from 'react'
import ShowCinemaDetail from './showCinemaDetail'
import PosterBookingTicket from './posterBookingTicket'
import WrapperBookingTicketInfor from './wrapperBookingTicketInfor'
export default class ContenBookingScreen extends Component {
    onChangePage() {
        this.props.changePageChild(true)
    }
 
    render() {
        const { changePage } = this.props
        const { listRoom } = this.props
        return (
            <div className='contentBookingScreen'>
                <div className='row'>
                    <div className='col-4'>
                        <PosterBookingTicket listRoom={listRoom} />
                        <div className='overLay'>
                            <WrapperBookingTicketInfor element={listRoom.thongTinPhim} />
                        </div>
                    </div>
                    <div className='col-7'>
                        <button className='btn btn-group-toggle' onClick={() => { this.onChangePage() }}>ĐẶT VÉ</button>
                        <ShowCinemaDetail element={listRoom.thongTinPhim} changePage={changePage} element1={listRoom.danhSachGhe} />
                    </div>
                </div>
            </div>
        )
    }

}
