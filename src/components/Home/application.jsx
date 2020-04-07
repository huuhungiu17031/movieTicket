import React, { Component } from 'react'
import Slider from 'react-slick';

export default class Application extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            autoplaySpeed:1900,
            autoplay:true,
            
        };
        return (
            <div className='background-Image ' id='Application'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 text-white content-wrapper'>
                            <div className='content-app'>
                                <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                                <h5>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</h5>
                                <button className='btn '><h4>App miễn phí - Tải về ngay!</h4></button>
                                <h5>TIX có hai phiên bản <span >iOS</span> & <span>Android</span></h5>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='mobile-app'>

                                <div className="app-image-content">
                                    <img src='./images/slides/mobile-icon.png' alt="mobile-icon" />
                                </div>
                                
                                <div className="slide-content">
                                    <Slider className='slick-slider slick-initialized' {...settings}>
                                        <div className='slide-element'>
                                            <img src="./images/slides/slide2.jpg" alt=""/>
                                        </div>
                                        <div className='slide-element'>
                                            <img src="./images/slides/slide10.jpg" alt=""/>
                                        </div>
                                        <div className='slide-element'>
                                            <img src="./images/slides/slide11.jpg" alt=""/>
                                        </div>
                                        <div className='slide-element'>
                                            <img src="./images/slides/slide12.jpg" alt=""/>
                                        </div>
                                        <div className='slide-element'>
                                            <img src="./images/slides/slide13.jpg" alt=""/>
                                        </div>
                                        <div className='slide-element'>
                                            <img src="./images/slides/slide14.jpg" alt=""/>
                                        </div>
                                        <div className='slide-element'>
                                            <img src="./images/slides/slide15.jpg" alt=""/>
                                        </div>
                                        <div className='slide-element'>
                                            <img src="./images/slides/slide16.jpg" alt=""/>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
