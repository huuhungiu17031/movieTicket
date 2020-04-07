import $ from 'jquery';
import * as yup from 'yup';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { adminSignInAction } from './../../redux/action/userAction'
import {NavLink} from 'react-router-dom'
const signUpAdminSchema = yup.object().shape({
    taiKhoan: yup.string().required('Hãy đăng nhập tài khoản'),
    matKhau: yup.string().required('Hãy đăng nhập mật khẩu'),
})

class AdminScreen extends Component {
    componentDidMount = () => {
        $('.text-box input').on('focus', function () {
            $(this).addClass('focus')
        })
        $('.text-box input').on('blur', function () {
            if ($(this).val() === '')
                $(this).removeClass('focus');
        })
    }
    // cancelButton=(history)=>{
    //     console.log(history)
    // }
    render() {
        return (
            // <button onClick={()=>{this.cancelButton(this.props.history)}}> <h1>dsa</h1> </button>,
            <Formik initialValues={{
                taiKhoan: '',
                matKhau: ''
            }}
                validationSchema={signUpAdminSchema}
                onSubmit={values => { this.props.dispatch(adminSignInAction(values, this.props.history)) }}
            >
                {({ handleSubmit, handleChange, handleBlur }) => (
                    <div className='formBody' id='SignInScreen'>
                        <Form className='login-form'>
                            <h3 className='text-center font-weight-bold'>ADMIN LOGIN</h3>
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
                        </Form>
                    </div>
                )}</Formik>
              
        )
    }
}
export default connect()(AdminScreen)