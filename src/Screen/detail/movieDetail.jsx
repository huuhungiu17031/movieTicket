import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDetailMovie } from '../../redux/action/movieAction';
import Rating from './rating';
import MovieDetailsInfor from './movieDetailsInfor';
import PosterAndTrailer from './posterAndTrailer';
import TabShowMovieDetail from './tabShowMovieDetail';
import TabRatingAndComment from './tabRatingAndComment';
import CreateMovieTabDetail from './createMovieTabDetail';
import TabShowMovieTrailer from './tabShowMovieTrailer';

class MovieDetailScreen extends Component {
 
    setBackground = (hinhAnh) => {
        return ({
            backgroundPosition: 'center ',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '1000px',
            backgroundImage: `url(${hinhAnh})`,
            filter: 'blur(15px)',
        })
    }

    render() {
        let { moviesDetail } = this.props;
        if (moviesDetail === undefined) {
            return <img src=".././images/loading.gif" style={{ width: '100vw', height: '100vh' }} alt="loadingIcon" />
        }
        else {
            return (
                <div className='movieDetailScreen wrapper' >
                    <div className='overlayPoster' style={this.setBackground(moviesDetail.hinhAnh)}></div>
                    <div className='movieElements container '>
                        <div className='movieProperties row text-white'>
                            <PosterAndTrailer moviesDetail={moviesDetail} />
                            <MovieDetailsInfor moviesDetail={moviesDetail} />
                            <Rating moviesDetail={moviesDetail} />
                        </div>
                        <div className='table'>
                            <div className='w-100'>
                                <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">

                                    <li className="nav-item">
                                        <a className="nav-link active"
                                            id="pills-home-tab"
                                            data-toggle="pill"
                                            href="#pills-home"
                                            role="tab" aria-controls="pills-home"
                                            aria-selected="true">
                                            Lịch chiếu
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link"
                                            id="pills-profile-tab"
                                            data-toggle="pill"
                                            href="#pills-profile"
                                            role="tab" aria-controls="pills-profile"
                                            aria-selected="false">
                                            Thông tin
                                                </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link"
                                            id="pills-contact-tab"
                                            data-toggle="pill"
                                            href="#pills-contact"
                                            role="tab" aria-controls="pills-contact"
                                            aria-selected="false">
                                            Đánh giá
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link"
                                            id="pills-trailer-tab"
                                            data-toggle="pill"
                                            href="#pills-trailer"
                                            role="tab" aria-controls="pills-trailer" aria-selected="false">
                                            Xem trailer
                                        </a>
                                    </li>

                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <CreateMovieTabDetail moviesDetail={moviesDetail.lichChieu} movieDetailImage={moviesDetail.hinhAnh} movieDetailName={moviesDetail.tenPhim} />
                                    <TabShowMovieDetail moviesDetail={moviesDetail} />
                                    <TabRatingAndComment moviesDetail={moviesDetail.danhGia} />
                                    <TabShowMovieTrailer movieDetail={moviesDetail.trailer} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            )
        }



    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.dispatch(getDetailMovie(id))
    }

}
const mapStateToProps = (state) => ({
    moviesDetail: state.filmDatas.movieDetail
})
export default connect(mapStateToProps)(MovieDetailScreen)