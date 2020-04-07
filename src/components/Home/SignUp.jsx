import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { signUpAction } from './../../redux/action/userAction'
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';
const signUpUserSchema = yup.object().shape({
    taiKhoan: yup.string().required(' !Hãy nhập tài khoản '),
    matKhau: yup.string().required('Nhập mật khẩu'),
    email: yup.string().required('!Chọn một địa chỉ Gmail'),
    soDt: yup.string().required('! Nhập số điện thoại'),
    maNhom: yup.string().required(' !Hãy nhập họ và tên '),
    maLoaiNguoiDung: yup.string().required(' !Hãy chọn mã loại người dùng '),
    hoTen: yup.string().required(' !Hãy nhập họ và tên '),
})

class SignUp extends Component {
    returnHomePage(){
        return <Redirect to='/'/>
    }
    render() {
        return (
            <div className='text-white' id='SignUpScreen'>
                <div className='row'>
                    <div className='col-6'>
                        <h4 className='display-4 text-white'>
                            Đăng kí tài khoản 
                        </h4>
                    </div>
                    <div className='col-6'>
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
                            validationSchema={signUpUserSchema}
                            onSubmit={values => {
                                this.props.dispatch(signUpAction(values))
                                
                            }
                       
                        }
                        >
                            {({ handleBlur, handleChange, handleSubmit }) => (
                                <Form>
                                    <div className='form-group'>
                                        <label className='label'>Họ và tên </label>
                                        <Field placeholder='Họ và tên'

                                            className='form-control'
                                            type='text'
                                            name='hoTen'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <ErrorMessage name='hoTen'>
                                            {
                                                (msg) => <div className='alert alert-dark showErrorMessage'>{msg}</div>
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <div className='form-group'>
                                        <label className='label'>Tài khoản</label>
                                        <Field type="text" className='form-control' name='taiKhoan' onChange={handleChange} />
                                        <ErrorMessage name='taiKhoan'>
                                            {
                                                (msg) => <div className='alert alert-dark showErrorMessage'>{msg}</div>
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <div className='form-group'>
                                        <label className='label'>Mật khẩu</label>
                                        <Field type="password" className='form-control' name='matKhau' onChange={handleChange} />
                                        <ErrorMessage name='matKhau'>
                                            {
                                                (msg) => <div className='alert alert-dark showErrorMessage'>{msg}</div>
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <div className='form-group'>
                                        <label className='label'>Email</label>
                                        <Field placeholder='Tên người dùng@gmail.com' type="text" className='form-control' name='email' onChange={handleChange} />
                                        <ErrorMessage name='email'>
                                            {
                                                (msg) => <div className='alert alert-dark showErrorMessage'>{msg}</div>
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <div className='form-group'>
                                        <label className='label'>Số điện thoại</label>
                                        <Field className='form-control' name='soDt' onChange={handleChange} />
                                        <ErrorMessage name='soDt'>
                                            {
                                                (msg) => <div className='alert alert-dark showErrorMessage'>{msg}</div>
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <div className='form-group'>
                                        <label className='label'>Mã nhóm</label>
                                        <Field component='select' className='form-control' name='maNhom' onChange={handleChange}  >
                                            <option >GP01</option>
                                            <option >GP02</option>
                                            <option >GP03</option>
                                            <option >GP04</option>
                                            <option >GP05</option>
                                        </Field>
                                        <ErrorMessage name='maNhom'>
                                            {
                                                (msg) => <div className='alert alert-dark showErrorMessage'>{msg}</div>
                                            }

                                        </ErrorMessage>
                                    </div>
                                    <div className='form-group'>
                                        <label className='label'>Mã loại người dùng</label>
                                        <Field component='select' className='form-control' name='maLoaiNguoiDung' onChange={handleChange} >
                                            <option >KhachHang</option>
                                            <option >QuanTri</option>
                                        </Field>
                                        <ErrorMessage name='maLoaiNguoiDung'>
                                            {
                                                (msg) => <div className='alert alert-dark showErrorMessage'>{msg}</div>
                                            }

                                        </ErrorMessage>
                                    </div>
                                    <div className='form-group'>
                                        <button type='submit' onSubmit={handleSubmit}  className='btn btn-danger'>
                                            SUBMIT
                                     </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(SignUp)