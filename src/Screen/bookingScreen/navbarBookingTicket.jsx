import React, { Component } from 'react'

export default class NavbarBookingTicket extends Component {
    render() {
        return (
            <div className='removeMarginBottomUl'>
            <ul >
                <div className='navbarBookingTicket'>
                    <li>
                        <div className='bookingState' >
                            <h2> 01 <span>   Chọn Loại Vé </span> </h2>
                        </div>
                    </li>
                    <li>
                        <div className='bookingState'>
                            <h2> 02 <span>  Chọn Ghế & Thanh Toán </span> </h2>
                        </div>
                    </li>
                    <li>
                        <div className='bookingState'>
                            <h2> 03 <span> Kết Quả Đặt Vé </span> </h2>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
        )
    }
}
