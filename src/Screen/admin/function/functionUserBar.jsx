import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import { addNewAccount } from '../../../redux/action/adminAction'
class FunctionUserBar extends Component {
    render() {
        const { action } = this.props
        console.log(action)

        return (
            <div className="addUserBar-Wrapper">
                <div className='ListAccount'></div>
                <div className='SearchBar'>
                    <div className='SearchBar-wrapper'>
                        <button type="button" className='btn btn-danger' data-toggle="modal" data-target="#myModal1"><i className="fa fa-plus"></i></button>
                        <div id="myModal1" className="modal fade" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                        <h4 className="modal-title">Thêm tài khoản</h4>
                                    </div>
                                    <div className="modal-body">

                                        <Formik
                                            initialValues={{
                                                taiKhoan: '',
                                                matKhau: '',
                                                email: '',
                                                soDt: '',
                                                maNhom: 'GP01',
                                                maLoaiNguoiDung: 'KhachHang',
                                                hoTen: '',
                                            }}
                                            onSubmit={(values) => {
                                                this.props.dispatch(addNewAccount(values))
                                            }}
                                        >
                                            {({ handleSubmit, handleChange }) => (
                                                <Form >
                                                    <div className="form-group">
                                                        <label>Tài khoản</label>
                                                        <Field
                                                            type="text"
                                                            className="form-control"
                                                            name="taiKhoan"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Mật khẩu</label>
                                                        <Field
                                                            type="password"
                                                            className="form-control"
                                                            name="matKhau"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <Field
                                                            type="text"
                                                            className="form-control"
                                                            name="email"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Số điện thoại</label>
                                                        <Field
                                                            type="text"
                                                            className="form-control"
                                                            name="soDt"
                                                            onChange={handleChange}

                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Mã nhóm</label>
                                                        <Field
                                                            as="select"
                                                            className="form-control"
                                                            name="maNhom"
                                                            onChange={handleChange}
                                                        >
                                                            <option value="GP01">GP01</option>
                                                            <option value="GP02">GP02</option>
                                                            <option value="GP03">GP03</option>
                                                            <option value="GP04">GP04</option>
                                                            <option value="GP05">GP05</option>
                                                        </Field>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Mã loại người dùng</label>
                                                        <Field
                                                            as="select"
                                                            className="form-control"
                                                            name="maLoaiNguoiDung"
                                                            onChange={handleChange}

                                                        >
                                                            <option value="KhachHang">KhachHang</option>
                                                            <option value="QuanTri">QuanTri</option>
                                                        </Field>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Họ tên</label>
                                                        <Field
                                                            type="text"
                                                            className="form-control"
                                                            name="hoTen"
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
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input placeholder='Search' type="text" />
                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(FunctionUserBar)