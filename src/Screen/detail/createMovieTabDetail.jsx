import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
class CreateMovieTabDetail extends Component {
    state = {
        date: []
    }

    renderLogoAndCinema(moviesDetail) {
        console.log(moviesDetail)
        return moviesDetail.map((item) => {
            return (
                <div className='w-100 btn btn-light' >
                    <button className='buttonControlLogo' key={item.maLichChieu}>
                        <div><img width={50} height={50} src="../images/cgv-aeon-binh-tan.jpg" alt="dsa" /></div>
                        <div>{item.thongTinRap.tenCumRap}</div>
                    </button>
                </div>
            )
        })
    }

    renderScrollMenu(moviesDetail) {
        return moviesDetail.map((date) => {
            return <button className='dateAndTime' onClick={() => { this.setState({ date: date.ngayChieuGioChieu }) }}>
                <div>
                    {new Date(date.ngayChieuGioChieu).toDateString()}
                </div>

            </button>
        })
    }
    renderMovieNav(moviesDetail) {
        const { movieDetailImage } = this.props
        const { movieDetailName }=this.props
        return <div className='movieDetailCard btn btn-light w-100' >
            <div className='wrapDetailInforMovie'>
                <img className='m-1' src={movieDetailImage} width={200} height={200} alt={moviesDetail.tenPhim} />
                <div className="duration">
                    <h2 className='text-capitalize'>{movieDetailName}</h2>
                    <p>106 phút</p>
                </div>
            </div>
            <div className='renderDate'>
                {this.renderDate()}
            </div>
        </div>
    }
    renderDate() {
        const { moviesDetail } = this.props
        return moviesDetail.map((time, index) => {
            if (index < 6) {
                return <NavLink to={`/BookingScreen/${time.maLichChieu}`} className='btn btn-outline-secondary m-1' key={index}>
                    {new Date(time.ngayChieuGioChieu).toLocaleTimeString().substring(0, 5)}-14:10
                </NavLink>
            }
            return null
        })
    }

    render() {
        const { moviesDetail } = this.props


        return (
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className='wrapperMovieTabDetail'>
                    <div className='wrapperMovieTabDetail_left'>
                        {this.renderLogoAndCinema(moviesDetail)}
                    </div>
                    <div className='wrapperMovieTabDetail_right'>
                        <div className='scrollmenu'>
                            {this.renderScrollMenu(moviesDetail)}
                        </div>
                        <div className='wrapperMovieTabDetail_bottom'>
                            {this.renderMovieNav(moviesDetail)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(CreateMovieTabDetail)