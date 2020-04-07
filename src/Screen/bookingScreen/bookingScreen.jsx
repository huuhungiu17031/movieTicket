import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListRoom } from '../../redux/action/cinemaAction'
import NavbarBookingTicket from './navbarBookingTicket'
import ContenBookingScreen from './contenBookingScreen'
import ChoosePositionAndPayment from './choosePositionAndPayment';
// import { TOTAL_PAYMENT } from '../../redux/constants/constants'
// import { createAction } from '../../redux/action'

class BookingScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            changePage: false
        }
    }
    handleOnClick(newState) {
        console.log(this.state.changePage)
        this.setState({ changePage: newState })
    }
 
    render() {
        // console.log(this.props.payment)
        const { changePage } = this.state
        const { listRoom } = this.props
        if (listRoom === null) {
            return <img src=".././images/loading.gif" style={{ width: '100vw', height: '100vh' }} alt="loadingIcon" />
        } else {
            return (
                <div className='bookingTicket_Wrapper wrapper'>
                    <NavbarBookingTicket />
                
                    {changePage ?
                        <ChoosePositionAndPayment
                            danhSachGhe={listRoom.danhSachGhe}
                            listRoom={listRoom.thongTinPhim} /> :
                        <ContenBookingScreen
                            changePageChild={this.handleOnClick.bind(this)}
                            listRoom={listRoom} />}
                </div>
            )
        }
    }
    componentDidMount() {
        var groupId = this.props.match.params.groupId
        this.props.dispatch(getListRoom(groupId))
    }
}

const mapStateToProps = (state) => ({
    listRoom: state.cinemaDatas.listRoom
})
export default connect(mapStateToProps)(BookingScreen)
