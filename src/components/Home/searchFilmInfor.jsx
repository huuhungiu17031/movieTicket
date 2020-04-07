import React, { Component } from 'react'
import Slider from 'react-slick';
import { connect } from 'react-redux'
import FilmCard from './filmCard'
import { getListMovie } from '../../redux/action/movieAction';
class SearchFilmInfor extends Component {

    render() {
        const settings = {
            dots: true,
            accesibility:true,
            infinite:true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplaySpeed: 1900,
            autoplay: false,
            rows:2,
        };
        return (
            <div className='container ' id='SearchFilmInfor'>
                <section className='showMovieList'>
                    <ul className="nav nav-tabs newsSection" id="myTab" role="tablist">
                        <li className="nav-item showingNew ">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Phim đang chiếu</a>
                        </li>
                        <li className="nav-item showingNew ">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Phim sắp chiếu</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <Slider className='slick-slider slick-initialized' {...settings}>
                                {this.props.movieList.map((movie, index) => {
                                    return (
                                        <div key={index}>
                                            <FilmCard movie={movie} />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>

                        <div className="tab-pane " id="profile" role="tab" aria-labelledby="profile-tab">
                            <Slider className='slick-slider slick-initialized' {...settings}>
                                {this.props.movieList.map((movie, index) => {
                                    return (
                                        <div key={index}>
                                            <FilmCard movie={movie} />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    componentDidMount() {
        this.props.dispatch(getListMovie())
    }
}
const mapStateToProps = (state) => ({
    movieList: state.filmDatas.films,

})
export default connect(mapStateToProps)(SearchFilmInfor)