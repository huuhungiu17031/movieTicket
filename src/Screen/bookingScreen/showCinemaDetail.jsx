import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
class ShowCinemaDetail extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            numberOfNormalChair: 0,
            numberOfVipChair: 0,
            total: 90000,
            changePage: true
        })
    }

    handleIncrement(type) {
        let { numberOfNormalChair, numberOfVipChair } = this.state
        switch (type) {
            case 'normalChair': {
                this.setState({ numberOfNormalChair: numberOfNormalChair + 1 })
                break
            }
            case 'vipChair': {
                this.setState({ numberOfVipChair: numberOfVipChair + 1 })
                break
            }
            default:{
                return {...this.state}
            }
        }
    }

    handleDecrement(type) {
        let { numberOfNormalChair, numberOfVipChair } = this.state
        switch (type) {
            case 'normalChair': {
                if (numberOfNormalChair > 0) {
                    return this.setState({ numberOfNormalChair: numberOfNormalChair - 1 })
                }
                break
            }
            case 'vipChair': {
                if (numberOfVipChair > 0) {
                    this.setState({ numberOfVipChair: numberOfVipChair - 1 })

                }
                break
            }
            default:
              return {...this.state}
        }
    }
    calculateTotalPrice(total, normalChair, vipChair) {
        if (normalChair + vipChair <= 8) {
            return total = normalChair * 90000 + vipChair * 108000
        }
        else {
            return <h1>Bạn chỉ được đặt tối đa 8 vé</h1>
        }
    }
 
    render() {
        const { element } = this.props
        let { calculateTotalPrice } = this
        let { total, numberOfNormalChair, numberOfVipChair } = this.state
        return (
            <div className='w-100 content_center m-0'>
                <div className='showCinemaDetail'>
                    <h3>{element.tenCumRap}</h3>
                    <p>{element.ngayChieu}-{element.gioChieu}-{element.tenRap}</p>
                </div>
                <div className='amountOfTicket'>
                    <div className='row'>
                        <div className='col-4'>
                            <p>Vé thường</p>
                        </div>
                        <div className='ticketPrice'>
                            <p>90,000đ</p>
                        </div>
                        <div>
                            <button className='btn btn-light' onClick={() => { this.handleDecrement('normalChair') }}>-</button>
                            {numberOfNormalChair}
                            <button className='btn btn-light' onClick={() => { this.handleIncrement('normalChair') }}>+</button>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-4'>
                            <p>Vé Vip</p>
                        </div>
                        <div className='ticketPrice'>
                            <p>108,000đ</p>
                        </div>
                        <div>
                            <button className='btn btn-light' onClick={() => { this.handleDecrement('vipChair') }}>-</button>
                            {numberOfVipChair}
                            <button className='btn btn-light' onClick={() => { this.handleIncrement('vipChair') }}>+</button>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div className='totalPriceOfticket '>
                    <h3 className='text-secondary'>{calculateTotalPrice(total, numberOfNormalChair, numberOfVipChair)}</h3>
                    <button className='btn btn-light'>
                        <NavLink className='neonButton' to='/'>
                            Trở về trang chủ
                        </NavLink>
                    </button>
                </div>
                <div className='mt-3'>
                    <p>Xin lưu ý bạn không thể hủy hoặc thay đổi xuất chiếu cho vé đã mua</p>
                    <h5>HOTLINE</h5> <h1>1900545436</h1>
                </div>
            </div>
        )
    }
}
export default connect()(ShowCinemaDetail)


