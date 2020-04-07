import React, { Component } from 'react'
import * as action from "./../../redux/action/cinemaAction";
import { connect } from 'react-redux'
// import { Link } from 'react-scroll';
import MovieSchedule from './movieSchedule';

class Schedule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            maHeThongRap: 'BHDStar',
            maNhom: 'GP10',
            movie: [],
        }
    }

    renderLogo = () => {
        const { cinemasLogo } = this.props;
        this.props.dispatch(action.getLogoCinema());
        return cinemasLogo.map((inforCinema) => {
            return <li className='logoCinema mt-2' key={inforCinema.maHeThongRap} >
                <button className='btn btn-light' onClick={() => { this.printCinemaId(inforCinema.maHeThongRap) }}>
                    <img src={inforCinema.logo} width={65} height={65} alt={inforCinema.tenHeThongRap} />
                </button>
            </li>
        })
    }
    printCinemaId = (id) => {
        this.props.dispatch(action.getListCinema(id, this.state.maNhom));
    }

    renderCinemaAddress() {
        const { cinemas } = this.props
        return cinemas.map((maHeThongRap) => {
            return maHeThongRap.lstCumRap.map((tenCumRap) => {
                return <button key={tenCumRap.tenCumRap} onClick={() => {
                    this.renderMovie(tenCumRap, this.setState({
                        movie: tenCumRap.danhSachPhim
                    }))
                }} className='btn btn-light mt-2' >
                    <div className='listCinema'>
                        <div>
                            <img src="./images/cgv-aeon-binh-tan.jpg" alt="sdfghjk" width={50} height={50} />
                        </div>
                        <div className='wrapper-infor'>
                        
                                <p className='cinemaName'>{tenCumRap.tenCumRap}</p>
                          
                  
                                <p className='address'>
                                    {tenCumRap.diaChi.lenght>10?tenCumRap.diaChi:tenCumRap.diaChi.substring(0,50)+'...'}
                                </p>
                                <p className='detailCinema'>
                                    [chi tiết]
                                </p>
                        
                        </div>
                    </div>
                </button>
            })

        })
    }

    renderMovie() { }

    renderMovieName() {
        const { movie } = this.state

        return movie.map((item) => {
            return (
                <MovieSchedule key={item.tenPhim} item={item.tenPhim} name={this.props.movieList} date={item.lstLichChieuTheoPhim} />
            )
        })
    }

    render() {
        return (
            <div id='Schedule'>
                <div className='scheduleTable'>
                    <div className='row'>
                        <div className="col-2">
                            <ul>
                                {this.renderLogo()}
                            </ul>
                        </div>
                        <div className='col-4 renderCinemaAddress'>
                            {this.renderCinemaAddress()}
                        </div>
                        <div className="col-6">
                            {this.renderMovieName()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.dispatch(action.getListCinema(this.state.maHeThongRap, this.state.maNhom));
    }
}

const mapStateToProps = (state) => ({
    cinemas: state.cinemaDatas.cinemas,
    cinemasLogo: state.cinemaDatas.cinemasLogo,
    movieList: state.filmDatas.films
})

export default connect(mapStateToProps)(Schedule)