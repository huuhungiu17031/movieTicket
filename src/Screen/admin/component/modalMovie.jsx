import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'
// import axios from 'axios'
// import ChangeImage from './changeImage'
import { changeMovieInfor } from '../../../redux/action/adminAction'
class ModalMovie extends Component {
    state = {
        selectedFile: null
    }
   
   
    render() {        
      
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Thay đổi thông tin phim</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={{
                                    maPhim:'',
                                    tenPhim: '',
                                    biDanh: '',
                                    trailer: '',
                                    hinhAnh: '',
                                    moTa: '',
                                    maNhom: 'GP10',
                                    ngayKhoiChieu: '',
                                    danhGia: ''
                                }}
                                onSubmit={movie => {
                                    this.props.dispatch(changeMovieInfor(movie))
                                }}
                            >
                                {({ handleSubmit, handleChange, initialValues, setFieldValue }) => (

                                    <Form  >
                                        <div className="form-group">
                                            <label>Mã phim</label>
                                            <Field
                                                type="number"
                                                className="form-control"
                                                name="maPhim"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Tên phim</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="tenPhim"
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>
                                       
                                        <div className="form-group">
                                            <label>Bí danh</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="biDanh"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Trailer</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="trailer"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Hình ảnh</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="hinhAnh"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Mô tả</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="moTa"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Mã nhóm</label>
                                            <Field
                                                as="select"
                                                type="text"
                                                className="form-control"
                                                name="maNhom"
                                                onChange={handleChange}
                                            >
                                                <option value="GP01">GP01</option>
                                                <option value="GP02">GP02</option>
                                                <option value="GP03">GP03</option>
                                                <option value="GP04">GP04</option>
                                                <option value="GP05">GP05</option>
                                                <option value="GP10">GP10</option>
                                            </Field>
                                        </div>
                                        <div className="form-group">
                                            <label>Ngày khởi chiếu</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="ngayKhoiChieu"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Đánh giá</label>
                                            <Field
                                                type='number'
                                                className="form-control"
                                                name="danhGia"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <button type="submit" onSubmit={handleSubmit} className="btn btn-success">
                                            Submit
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    cr:state.UserReducers.cr
})
export default connect(mapStateToProps)(ModalMovie)
