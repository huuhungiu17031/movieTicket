import React, { Component } from 'react'
import * as yup from 'yup';
import $ from 'jquery';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom'
import { login } from './../../redux/action/userAction'
import { Form, Formik, Field, ErrorMessage } from 'formik'

const signUpSchema = yup.object().shape({
    taiKhoan: yup.string().required('Hãy đăng nhập tài khoản'),
    matKhau: yup.string().required('Hãy đăng nhâp mật khẩu')
})
class SignInScreen extends Component {

    componentDidMount = () => {
        $('.text-box input').on('focus', function () {
            $(this).addClass('focus')
        })
        $('.text-box input').on('blur', function () {
            if ($(this).val() === '')
                $(this).removeClass('focus');
        })
    }

    render() {
        return (
            <div>

                <Formik initialValues={{
                    taiKhoan: '',
                    matKhau: ''
                }}
                    validationSchema={signUpSchema}
                    onSubmit={values => {
                        this.props.dispatch(login(values))
                    }}
                >
                    {({ handleSubmit, handleChange, handleBlur }) => (
                        <div className='formBody' id='SignInScreen'>
                            <Form className='login-form'>
                                <h3 className='text-center font-weight-bold'>Đăng nhập</h3>
                                <div className="text-box">
                                    <Field type="text" name='taiKhoan' onChange={handleChange} onBlur={handleBlur} />
                                    <span data-placeholder='Tài khoản'></span>
                                    <ErrorMessage name='taiKhoan'>
                                        {
                                            (msg) => <div className='mt-3'>{msg}</div>
                                        }
                                    </ErrorMessage>
                                </div>

                                <div className="text-box">
                                    <Field type="password" name='matKhau' onChange={handleChange} onBlur={handleBlur} />
                                    <span data-placeholder='Mật khẩu'></span>
                                    <ErrorMessage name='matKhau'>
                                        {
                                            (msg) => <div className='mt-3'>{msg}</div>
                                        }
                                    </ErrorMessage>
                                </div>

                                <input type="submit" className='login-button' value='Login' onSubmit={handleSubmit} />
                                <NavLink className='login-button' to='/'> Trở về trang chủ </NavLink>
                                <div className='bottom-text'>
                                    Không có tài khoản? <NavLink className='neonButton' to='/SignUpScreen'>Đăng kí</NavLink>
                                </div>
                            </Form>
                        </div>
                    )}</Formik>


            </div>

        )
    }


}


export default connect()(SignInScreen)