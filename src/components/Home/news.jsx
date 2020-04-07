import React, { Component } from 'react'
export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0,
            comment: 0,
            color: ''
        }

    }
    increaseLike = () => {
        if (this.state.like < 1) {
            this.setState({
                like: this.state.like + 1
            })
        }
    }
    increaseComment = () => {
        if (this.state.comment < 1) {
            this.setState({
                comment: this.state.comment + 1
            })
        }
    }
    render() {
        return (
            <div className='container' id='News'>
                <div>
                    <nav>
                        <div className="nav nav-tabs newsSection" id="nav-tab" role="tablist">

                            <a className=" showingNew nav-item nav-link active" id="nav-home-tab"
                                data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
                                Điện ảnh 24H
                            </a>
                            <a className=" showingNew nav-item nav-link" id="nav-profile-tab"
                                data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">
                                Review
                            </a>
                            <a className=" showingNew nav-item nav-link" id="nav-contact-tab"
                                data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">
                                Khuyến mãi
                            </a>

                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='container-fluid '>
                                <div className='top-wrapper-content mb-4'>
                                    <div className='image-wrapper'>
                                        <img className='poster'
                                            src='./images/vandiesel.jpg' alt="sss" />
                                        <a id='movie-title'
                                            href='https://tix.vn/goc-dien-anh/7856-lam-anh-hung-trong-vu-tru-fast-chua-du-vin-diesel-quyet-hoa-than-thanh-nguoi-hung-nano-trong-bloodshot'>
                                            Làm 'anh hùng' trong Vũ trụ Fast chưa đủ, Vin Diesel quyết hóa thân thành người hùng nano trong Bloodshots
                                             </a>
                                        <p>Valiant comic chính thức lên màn ảnh với sự xuất hiện của Bloodshot.</p>
                                        <div className='like-and-comment  '>
                                            <button className="fa fa-thumbs-up btn btn-outline-danger" onClick={() => { this.increaseLike() }} >
                                                {this.state.like}
                                            </button>
                                            <button className="fa fa-comment btn btn-outline-danger" onClick={() => { this.increaseComment() }}>
                                                {this.state.comment}
                                            </button>
                                        </div>
                                    </div>
                                    <div className='image-wrapper'>
                                        <img className='poster' src="./images/valentine.jpg" alt="sss" />
                                        <a id='movie-title'
                                            href='https://tix.vn/goc-dien-anh/7854-truoc-them-valentine-tiec-trang-mau-tung-trailer-cuc-hai-huoc-va-day-kich-thich'>
                                            Trước thềm Valentine, Tiệc Trăng Máu tung trailer cực hài hước và đầy kích thích
                                            </a>
                                        <p>Sau khi xem trailer này, hội có gấu liệu có rùng mình?</p>
                                        <div className='like-and-comment  '>
                                            <button className="fa fa-thumbs-up btn btn-outline-danger"
                                                onClick={() => { this.increaseLike() }} >
                                                {this.state.like}
                                            </button>
                                            <button className="fa fa-comment btn btn-outline-danger"
                                                onClick={() => { this.increaseComment() }}>
                                                {this.state.comment}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='bottom-wrapper-content'>
                                    <div className='row'>

                                        <div className="col-4">
                                            <img className='small-poster' src='./images/can-phong-cam-do-poster.jpg' alt="Harley-Quinn" />
                                            <a id='movie-title'
                                                href='https://tix.vn/goc-dien-anh/7853-can-phong-cam-do-su-that-ngu-tri-trong-con-nguoi-u-am-den-co-nao'>
                                                Căn Phòng Cám Dỗ - Sự thật ngự trị trong con người u ám đến cỡ nào
                                                 </a>
                                            <p>
                                                Một tác phẩm tâm lý, kinh dị nhưng lại rất đời thực bởi chúng ta sẽ thấy chính bản thân mình thông qua ...
                                                </p>
                                            <div className='like-and-comment  '>
                                                <button className="fa fa-thumbs-up btn btn-outline-danger"
                                                    onClick={() => { this.increaseLike() }} >
                                                    {this.state.like}
                                                </button>
                                                <button className="fa fa-comment btn btn-outline-danger"
                                                    onClick={() => { this.increaseComment() }}>
                                                    {this.state.comment}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <img className='small-poster' src='./images/trailer-minion-poster.jpg' alt="Harley-Quinn" />
                                            <a id='movie-title'
                                                href='https://tix.vn/goc-dien-anh/7851-lo-dien-trailer-minions-2-gi-dau-ai-cung-de-thuong-het-phan-thien-ha'>
                                                Lộ diện trailer Minion 2, gì đâu ai cũng dễ thương hết phần thiên hạ
                                                </a>
                                            <p>Cậu bạn Minion mới đã xuất hiện. Dễ thương hơn và cũng ngáo ngơ hơn.</p>
                                            <div className='like-and-comment  '>
                                                <button className="fa fa-thumbs-up btn btn-outline-danger"
                                                    onClick={() => { this.increaseLike() }} >
                                                    {this.state.like}
                                                </button>
                                                <button className="fa fa-comment btn btn-outline-danger"
                                                    onClick={() => { this.increaseComment() }}>
                                                    {this.state.comment}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img className='mini-poster' src='./images/Harley-Quinn-poster.png' alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7850-dau-la-cac-nam-than-hollywood-da-tung-sanh-doi-voi-nang-harley-quinn-xinh-dep-dien-loan">
                                                        Đâu là các nam thần Hollywood đã từng sánh đôi với nàng...
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img className='mini-poster' src='./images/cac-nu-nhan-poster.png' alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7849-nam-2020-khi-cac-nu-nhan-truyen-tranh-chiem-song-man-bac">
                                                        Năm 2020, khi các nữ truyện tranh chiếm sóng màn ảnh...
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img className='mini-poster' src='./images/fast-and-furios-poster.jpg' alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7848-lo-dien-phan-dien-moi-cua-series-fast-and-furious-nguoi-dac-biet-da-tro-lai">
                                                        Lộ diện phản diện mới của series Fast and Furios, 'người đặc bi...
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img
                                                        className='mini-poster'
                                                        src='./images/lien-minh-thu-cung-poster.jpg'
                                                        alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7846-lien-minh-thu-cung-lua-chon-hoan-hao-cho-gia-dinh-vao-dip-tet">
                                                        Liên Minh Thú Cưng - Lựa chọn hoàn hảo cho gia đình vào dịp...
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className='container-fluid '>
                                <div className='top-wrapper-content mb-4'>
                                    <div className='image-wrapper'>
                                        <img className='poster'
                                            src='./images/thang-nam-hanh-phuc-poster.jpg' alt="sss" />
                                        <a id='movie-title'
                                            href='https://tix.vn/goc-dien-anh/7856-lam-anh-hung-trong-vu-tru-fast-chua-du-vin-diesel-quyet-hoa-than-thanh-nguoi-hung-nano-trong-bloodshot'>
                                            [Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ chưa bao giờ là việc dễ dàng
                                             </a>
                                        <p>Bộ phim mới nhất đến từ Thái Lan không có nhiều tình tiết giải trí mà là hành trình đau đớn của sự trưởng thành và buông bỏ.</p>
                                        <div className='like-and-comment  '>
                                            <button className="fa fa-thumbs-up btn btn-outline-danger" onClick={() => { this.increaseLike() }} >
                                                {this.state.like}
                                            </button>
                                            <button className="fa fa-comment btn btn-outline-danger" onClick={() => { this.increaseComment() }}>
                                                {this.state.comment}
                                            </button>
                                        </div>
                                    </div>
                                    <div className='image-wrapper'>
                                        <img className='poster' src="./images/sac-dep-doi-tra-poster.jpg" alt="sss" />
                                        <a id='movie-title'
                                            href='https://tix.vn/goc-dien-anh/7854-truoc-them-valentine-tiec-trang-mau-tung-trailer-cuc-hai-huoc-va-day-kich-thich'>
                                            [Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện đời mình qua phim ảnh
                                            </a>
                                        <p>​Sắc Đẹp Dối Trá dường như là lời tự sự của Hương Giang khi có cô có quá nhiều điểm tương đồng với nhân vật chính.</p>
                                        <div className='like-and-comment  '>
                                            <button className="fa fa-thumbs-up btn btn-outline-danger"
                                                onClick={() => { this.increaseLike() }} >
                                                {this.state.like}
                                            </button>
                                            <button className="fa fa-comment btn btn-outline-danger"
                                                onClick={() => { this.increaseComment() }}>
                                                {this.state.comment}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='bottom-wrapper-content'>
                                    <div className='row'>

                                        <div className="col-4">
                                            <img className='small-poster' src='./images/review-birds-of-prey.jpg' alt="Harley-Quinn" />
                                            <a id='movie-title'
                                                href='https://tix.vn/goc-dien-anh/7853-can-phong-cam-do-su-that-ngu-tri-trong-con-nguoi-u-am-den-co-nao'>
                                                [Review] Birds of Prey - Màn lột xác hoành tráng của Harley Quinn và DC
                                                 </a>
                                            <p>
                                                Bộ phim siêu anh hùng mới nhất của DC tuy không quá xuất sắc nhưng là những gì hãng cần trong đường đua với đối thủ Marvel.
                                            </p>
                                            <div className='like-and-comment  '>
                                                <button className="fa fa-thumbs-up btn btn-outline-danger"
                                                    onClick={() => { this.increaseLike() }} >
                                                    {this.state.like}
                                                </button>
                                                <button className="fa fa-comment btn btn-outline-danger"
                                                    onClick={() => { this.increaseComment() }}>
                                                    {this.state.comment}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <img className='small-poster' src='./images/review-bi-mat-cua-gio.jpg' alt="Harley-Quinn" />
                                            <a id='movie-title'
                                                href='https://tix.vn/goc-dien-anh/7851-lo-dien-trailer-minions-2-gi-dau-ai-cung-de-thuong-het-phan-thien-ha'>
                                                [Review] Bí Mật Của Gió - Câu chuyện “tình người duyên ma” đầy nước mắt
                                                </a>
                                            <p>Sau 5 năm, đạo diễn Nguyễn Phan Quang Bình đã trở lại với một câu chuyện tình đẹp nhưng nhiều day dứt và tràn đầy ý nghĩa.</p>
                                            <div className='like-and-comment  '>
                                                <button className="fa fa-thumbs-up btn btn-outline-danger"
                                                    onClick={() => { this.increaseLike() }} >
                                                    {this.state.like}
                                                </button>
                                                <button className="fa fa-comment btn btn-outline-danger"
                                                    onClick={() => { this.increaseComment() }}>
                                                    {this.state.comment}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img className='mini-poster' src='./images/gai-gia-lam-chieu-review.jpg' alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7850-dau-la-cac-nam-than-hollywood-da-tung-sanh-doi-voi-nang-harley-quinn-xinh-dep-dien-loan">
                                                        [Review] Gái Già Lắm Chiêu 3 - Cuộc chiến mẹ chồng
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img className='mini-poster' src='./images/30-chua-phai-tet-review.jpg' alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7849-nam-2020-khi-cac-nu-nhan-truyen-tranh-chiem-song-man-bac">
                                                        [Review] 30 Chưa Phải Tết - Phim vòng lặp thời gian thương hiệu Việt
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img className='mini-poster' src='./images/doi-mat-am-duong-review.jpg' alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7848-lo-dien-phan-dien-moi-cua-series-fast-and-furious-nguoi-dac-biet-da-tro-lai">
                                                        [Review] Đôi Mắt Âm Dương - Món lạ đầu năm vừa hài vừa sợ của điện
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img
                                                        className='mini-poster'
                                                        src='./images/bad-boys-review.jpg'
                                                        alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7846-lien-minh-thu-cung-lua-chon-hoan-hao-cho-gia-dinh-vao-dip-tet">
                                                        [Review] Bad Boys For Life - Khi gừng càng già càng… nhây
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className='container-fluid '>
                                <div className='top-wrapper-content mb-4'>
                                    <div className='image-wrapper'>
                                        <img className='poster'
                                            src='./images/khuyen-mai-zalo.jpg' alt="sss" />
                                        <a id='movie-title'
                                            href='https://tix.vn/goc-dien-anh/7856-lam-anh-hung-trong-vu-tru-fast-chua-du-vin-diesel-quyet-hoa-than-thanh-nguoi-hung-nano-trong-bloodshot'>
                                            Vui Tết cùng ZaloPay - CGV Mua 1 Tặng 1
                                             </a>
                                        <p>Ưu đãi mua 1 tặng 1 vé xem phim tại CGV cho khách hàng mới khi thanh toán bằng ZaloPay.</p>
                                        <div className='like-and-comment  '>
                                            <button className="fa fa-thumbs-up btn btn-outline-danger" onClick={() => { this.increaseLike() }} >
                                                {this.state.like}
                                            </button>
                                            <button className="fa fa-comment btn btn-outline-danger" onClick={() => { this.increaseComment() }}>
                                                {this.state.comment}
                                            </button>
                                        </div>
                                    </div>
                                    <div className='image-wrapper'>
                                        <img className='poster' src="./images/khuyen-mai-hoan-tien.png" alt="sss" />
                                        <a id='movie-title'
                                            href='https://tix.vn/goc-dien-anh/7854-truoc-them-valentine-tiec-trang-mau-tung-trailer-cuc-hai-huoc-va-day-kich-thich'>
                                            Trước thềm Valentine, Tiệc Trăng Máu tung trailer cực hài hước và đầy kích thích
                                            </a>
                                        <p>Sau khi xem trailer này, hội có gấu liệu có rùng mình?</p>
                                        <div className='like-and-comment  '>
                                            <button className="fa fa-thumbs-up btn btn-outline-danger"
                                                onClick={() => { this.increaseLike() }} >
                                                {this.state.like}
                                            </button>
                                            <button className="fa fa-comment btn btn-outline-danger"
                                                onClick={() => { this.increaseComment() }}>
                                                {this.state.comment}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='bottom-wrapper-content'>
                                    <div className='row'>

                                        <div className="col-4">
                                            <img className='small-poster' src='./images/khuyen-mai-valentine.png' alt="Harley-Quinn" />
                                            <a id='movie-title'
                                                href='https://tix.vn/goc-dien-anh/7853-can-phong-cam-do-su-that-ngu-tri-trong-con-nguoi-u-am-den-co-nao'>
                                                Chào bạn mới - BHD Star Mua 2 Tính Tiền 1
                                                 </a>
                                            <p>
                                                Ưu đãi cực chất: Mua 2 vé BHD Star chỉ cần trả tiền 1 vé khi thanh toán qua ZaloPay.
                                                </p>
                                            <div className='like-and-comment  '>
                                                <button className="fa fa-thumbs-up btn btn-outline-danger"
                                                    onClick={() => { this.increaseLike() }} >
                                                    {this.state.like}
                                                </button>
                                                <button className="fa fa-comment btn btn-outline-danger"
                                                    onClick={() => { this.increaseComment() }}>
                                                    {this.state.comment}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <img className='small-poster' src='./images/khuyen-mai-79k.png' alt="Harley-Quinn" />
                                            <a id='movie-title'
                                                href='https://tix.vn/goc-dien-anh/7851-lo-dien-trailer-minions-2-gi-dau-ai-cung-de-thuong-het-phan-thien-ha'>
                                                CGV – 79.000Đ/vé cuối tuần khi thanh toán bằng ZaloPay!
                                                </a>
                                            <p>Chào năm mới với ưu đãi cực phê, đặt vé CGV trên TIX để được tiếp sức với giá chỉ 79k/vé.</p>
                                            <div className='like-and-comment  '>
                                                <button className="fa fa-thumbs-up btn btn-outline-danger"
                                                    onClick={() => { this.increaseLike() }} >
                                                    {this.state.like}
                                                </button>
                                                <button className="fa fa-comment btn btn-outline-danger"
                                                    onClick={() => { this.increaseComment() }}>
                                                    {this.state.comment}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img className='mini-poster' src='./images/khuyen-mai-11k.jpg' alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7850-dau-la-cac-nam-than-hollywood-da-tung-sanh-doi-voi-nang-harley-quinn-xinh-dep-dien-loan">
                                                        [123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img className='mini-poster' src='./images/khuyen-mai-nhap-ma.jpg' alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7849-nam-2020-khi-cac-nu-nhan-truyen-tranh-chiem-song-man-bac">
                                                        [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img className='mini-poster' src='./images/khuyen-mai-20-10.jpg' alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7848-lo-dien-phan-dien-moi-cua-series-fast-and-furious-nguoi-dac-biet-da-tro-lai">
                                                        [Mega GS] Một đoá hoa thay ngàn lời yêu
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="row pb-3">
                                                <div className="col-2">
                                                    <img
                                                        className='mini-poster'
                                                        src='./images/khuyen-mai-20k.jpg'
                                                        alt='Harley-Quinn-poster' />
                                                </div>
                                                <div className="col-10">
                                                    <a
                                                        id='movie-title'
                                                        href="https://tix.vn/goc-dien-anh/7846-lien-minh-thu-cung-lua-chon-hoan-hao-cho-gia-dinh-vao-dip-tet">
                                                       [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-outline-danger mt-5 text-center'>XEM THÊM</button>
                    </div>
                </div>
            </div>

        )
    }
}
