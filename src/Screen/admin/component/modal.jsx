import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import { updateUserInfor } from '../../../redux/action/adminAction'
class Modal extends Component {


  render() {
    const { cr } = this.props
    console.log(cr)
    const initialValue = {
      taiKhoan:'',
      matKhau: '',
      email: '',
      soDt: '',
      maNhom: 'GP01',
      maLoaiNguoiDung: 'KhachHang',
      hoTen: '',
    }

    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">×</button>
              <h4 className="modal-title">Sửa tài khoản</h4>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={
                  initialValue
                }
                onSubmit={user => {
                  this.props.dispatch(updateUserInfor(user))
                }}
              >
                {({ handleSubmit, handleChange, handleReset, initialValues }) => (

                  <Form cr={this.props.cr} >
                    <div className="form-group">
                      <label>Tai khoan</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="taiKhoan"
                        onChange={handleChange}
                        value={initialValues.taiKhoan=cr.taiKhoan}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mật khẩu</label>
                      <Field
                        type="password"
                        className="form-control"
                        name="matKhau"
                        placeholder={cr.matKhau}
                        onChange={
                          handleChange
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        placeholder={initialValues.email=cr.email}
                      />
                    </div>
                    <div className="form-group">
                      <label>Số điện thoại</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="soDt"
                        placeholder={initialValue.soDt=cr.soDt}
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
                        placeholder={initialValues=cr.hoTen}
                      />
                    </div>
                    <button type="submit" onReset={handleReset} onSubmit={handleSubmit} className="btn btn-success">
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
    )
  }
}
const mapStateToProps = (state) => ({
  cr: state.UserReducers.cr ||{
    taiKhoan:''
  }
})


export default connect(mapStateToProps)(Modal)