import React, { Component } from 'react'

export default class TabShowMovieDetail extends Component {
    render() {
        const { moviesDetail } = this.props
        return (
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row text-white">
                    <div className="col-2">
                        <ul>
                            <li>Ngày phát hành</li>
                            <li>Đạo diễn</li>
                            <li>Diễn viên</li>
                            <li>Thể loại</li>
                            <li>Định dạng</li>
                            <li>Quốc Gia SX</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul>
                            <li className='decreaseFontWeight'>{new Date(moviesDetail.ngayKhoiChieu).toLocaleDateString()}</li>
                            <li className='decreaseFontWeight'>Dave Wilson</li>
                            <li className='decreaseFontWeight'>Toby Kebbell, Eiza González, Vin Diesel</li>
                            <li className='decreaseFontWeight'>hành động</li>
                            <li className='decreaseFontWeight'>2D/Digital</li>
                            <li className='decreaseFontWeight'>Mỹ</li>
                        </ul>
                    </div>
                    <div className="col-8">
                        <ul>
                            <li>Nội dung</li>
                            <li className='decreaseFontWeight'>{moviesDetail.moTa}</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
