import React, { Component } from 'react'
import Countdown from 'react-countdown';
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { bookingTicket } from '../../redux/action/userAction';
class ChoosePositionAndPayment extends Component {

    state = {
        arrayTicket: [],
        arrayChair: this.props.danhSachGhe
    }
    
    handleBooking(item) {
        const { listRoom } = this.props;
        let JSON_ACCOUNT = JSON.parse(localStorage.getItem('credentials'))
        const objectChair = {
            data: {
                maLichChieu: listRoom.maLichChieu,
                danhSachVe: [
                    {
                        maGhe: item.maGhe,
                        giaVe: item.giaVe
                    }
                ],
                taiKhoanNguoiDung: JSON_ACCOUNT.taiKhoan
            },
            tenGhe: item.tenGhe
        }
        this.handleListTicket(objectChair)
    }

    handleListTicket(objectChair) {
        this.setState({
            arrayTicket: [...this.state.arrayTicket, objectChair]
        })
    }

    componentWillUpdate(nextProps, nextState) {
        this.state.arrayTicket = nextState.arrayTicket
    }
    renderPositionDiagram() {
        return this.state.arrayChair.map((item) => {
            if (item.taiKhoanNguoiDat === null) {
                if (item.loaiGhe === 'Thuong') {
                    return <button
                        key={item.tenGhe}
                        onClick={() => { this.handleBooking(item) }}
                        className='btn btn-dark decorateChair '>
                        {item.tenGhe}
                    </button>
                }
                else {
                    return <button
                        key={item.tenGhe}
                        onClick={() => { this.handleBooking(item) }}
                        className='btn btn-danger decorateChair'>
                        {item.tenGhe}
                    </button>
                }
            }
            else {
                if (item.loaiGhe === 'Thuong') {
                    return <button
                        disabled
                        key={item.tenGhe}
                        onClick={() => { this.handleBooking(item) }}
                        className='btn btn-dark decorateChair '>
                        {item.tenGhe}
                    </button>
                }
                else {
                    return <button
                        disabled
                        key={item.tenGhe}
                        onClick={() => { this.handleBooking(item) }}
                        className='btn btn-danger decorateChair'>
                        {item.tenGhe}
                    </button>
                }
            }
        })
    }

    renderChairNumber() {
        let { arrayTicket } = this.state
        return arrayTicket.map((element) => {
            return (
                <button className='btn btn-danger m-1'
                    onClick={() => { this.removeChairFromArr(element) }} >
                    {element.tenGhe}
                </button>
            )
        })
    }
    removeChairFromArr(element) {
        let updateArrayTicket = [...this.state.arrayTicket]
        let result = updateArrayTicket.filter(obj => obj.tenGhe !== element.tenGhe);
        this.setState({
            arrayTicket: [...result]
        })
    }


    confirmBooking() {
        let { arrayTicket } = this.state
        arrayTicket.map((i) => {
            return this.props.dispatch(bookingTicket(i.data))
        })
    }

    render() {
        let JSON_ACCOUNT = JSON.parse(localStorage.getItem('credentials'))
        if (JSON_ACCOUNT === null) {
            return (
                <div className='NotSignInWrapper'>
                    <div className='NotSignIn'>
                        <p>Bạn chưa đăng nhập tài khoản</p>
                        <NavLink to='/SignInScreen'>
                            <h1>Đăng nhập tài khoản</h1>
                        </NavLink>
                        <p>Chưa có tài khoản?</p>
                        <NavLink to='/SignUpScreen'>
                            <h1> Đăng kí tại đây</h1>
                        </NavLink>
                    </div>
                </div>

            )
        }
        else {
            const { listRoom } = this.props
            const Completionist = () => {
                return (
                    Swal.fire({
                        icon: 'error',
                        title: 'Hết thời gian đặt',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>',
                    }),

                    <button className='btn '>
                        <NavLink className='neonButton' to='/'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          Trở về trang chủ
                        </NavLink>
                    </button>
                )
            }

            const renderer = ({ hours, minutes, seconds, completed }) => {
                if (completed) {
                    return <Completionist />;
                } else {
                    return <h1 className='timeControl'>{hours}:{minutes}:{seconds}</h1>;
                }
            };
            return (
                <div className='ChoosePositionAndPayment'>
                    <div className='leftScreenChooseAndPay'>
                        <div className='countDownAndDetailCinema'>
                            <div className='wrapDetailCinema'>
                                <h5>{listRoom.tenCumRap}</h5>
                                <p>{listRoom.ngayChieu}-{listRoom.gioChieu}-{listRoom.tenRap}</p>
                            </div>
                            <div className='wrapDetailCinama'>
                                <h5>Thời gian giữ ghế</h5>
                                <Countdown
                                    date={Date.now() + 300000}
                                    renderer={renderer}
                                />
                            </div>
                        </div>
                        <div className='positionDiagram'>
                            <div className='cinemaScreen'>
                            </div>
                            <div className='text-center mb-5'>Màn hình</div>
                            {this.renderPositionDiagram()}
                        </div>

                    </div>
                    <div className='rightScreenChooseAndPay'>
                        <div>
                            <h5 className='text-capitalize'> <span className='MaRap'> P </span>{listRoom.tenPhim}</h5>
                            <h5>{listRoom.tenCumRap}</h5>
                            <h5>{listRoom.ngayChieu}-{listRoom.gioChieu}-{listRoom.tenRap}</h5>
                        </div>
                        <div className='positionID'>
                            <h6>Ghế</h6> {this.renderChairNumber()}
                            <h6>E-mail: {JSON_ACCOUNT.email}</h6>
                            <h6>Phone: {JSON_ACCOUNT.soDT}</h6>
                            <h6>Hình thức thanh toán</h6>
                        </div>
                        <div>
                            <i class="fa fa-exclamation"></i> <p></p>
                            <h6>Mã vé sẽ được gửi qua tin nhắn <span className='text-warning'>Zalo</span>(tin nhắn Zalo) và <span className='text-warning'>Email</span>) đã nhập</h6>
                        </div>
                        <button onClick={() => { this.confirmBooking() }} className='btn btn-danger'>Đặt vé</button>
                    </div>
                </div>

            )
        }
    }
}
export default connect()(ChoosePositionAndPayment)