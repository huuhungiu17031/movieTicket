import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer '>
                <div className='container'>
                    <div className='row '>
                        <div className="col-4">
                            <p className='title'>TIX</p>
                            <div className="row">
                                <div className="col-6 policy">
                                    <ul>
                                        <li><a href="/">FAQ</a></li>
                                        <li><a href="/">Brand Guidelines</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 policy">
                                    <ul>
                                        <li><a href="/">Thỏa thuận sử dụng</a></li>
                                        <li><a href="/">Quy chế hoạt động</a></li>
                                        <li><a href="/">Chính sách bảo mật</a></li>
                                        <li><a href="/">Quyền lợi thành viên</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <p className='title'>ĐỐI TÁC </p>
                            <div className="row partners">
                                <a href="/"><img className='mini-icon' src='./images/icon/CGV.png' alt="CGV" /> </a>
                                <a href="/"><img className='mini-icon' src='./images/icon/bhd.png' alt="bhd" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/galaxycine.png' alt="galaxycine" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/cinestar.png' alt="cinestar" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/lotte.png' alt="lotte" /></a>
                            </div>
                            <div className="row partners">
                                <a href="/"><img className='mini-icon' src='./images/icon/megags.png' alt="megags" /> </a>
                                <a href="/"><img className='mini-icon' src='./images/icon/beta.jpg' alt="beta" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/dongdacinema.png' alt="dongdacinema" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/TOUCH.png' alt="TOUCH" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/cinemax.jpg' alt="cinemax" /></a>
                            </div>
                            <div className="row partners">
                                <a href="/"><img className='mini-icon' src='./images/icon/starlight.png' alt="starlight" /> </a>
                                <a href="/"><img className='mini-icon' src='./images/icon/dcine.png' alt="dcine" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/zalopay.png' alt="zalopay" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/payoo.jpg' alt="payoo" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/vcb.png' alt="vcb" /></a>
                            </div>
                            <div className="row partners">
                                <a href="/"><img className='mini-icon' src='./images/icon/agribank.png' alt="agribank" /> </a>
                                <a href="/"><img className='mini-icon' src='./images/icon/viettinbank.png' alt="viettinbank" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/IVB.png' alt="IVB" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/123go.png' alt="123go" /></a>
                                <a href="/"><img className='mini-icon' src='./images/icon/laban.png' alt="laban" /></a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <p className='title '> MOBILE APP </p>
                                    <div className="row">
                                        <div className="col-6">
                                            <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"><img className='mini-logo-footer' src="./images/logo/apple.png" alt="apple" /></a>
                                        </div>
                                        <div className="col-6">
                                            <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"><img className='mini-logo-footer' src="./images/logo/android.png" alt="android" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <p className='title '>SOCIAL</p>
                                    <div className="row">
                                        <div className="col-6">
                                            <a href="https://www.facebook.com/tix.vn/"><img className='mini-logo-footer' src="./images/logo/facebook.png" alt="facebook" /></a>
                                        </div>
                                        <div className="col-6">
                                            <a href="https://zalo.me/tixdatve"><img className='mini-logo-footer' src="./images/logo/zalo.png" alt="zalo" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='horizontal-line' />
                    <div className='row'>
                        <div className="col-1">
                            <img className='zion-logo' src="./images/logo/zion.jpg" alt="zion" />
                        </div>
                        <div className="col-9 text-white info-footer">
                            <h6>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h6>
                            <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                            <p>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                        </div>
                        <div className="col-2">
                            <img className='right-logo' src="./images/logo/bocongthuong.png" alt="bo-cong-thuong" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
