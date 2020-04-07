import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavbarAdmin from '../Layouts/navbarAdmin'
const AdminLayout = props => {
    return (
        <Fragment>
            <NavbarAdmin />
            {props.children}
        </Fragment>
    )
}

export default function AdminTemplate({ Component, ...props }) {
    const credentails = JSON.parse(localStorage.getItem('credentials'))
    return (

        <Route
            {...props}
            render={propsComponent => {
                if (credentails === null) {
                    return <Redirect to='/admin' />
                }
                else if (credentails.maLoaiNguoiDung === 'QuanTri') {
                    return (
                        <AdminLayout>
                            <Component {...propsComponent} />
                        </AdminLayout>
                    )
                }
                else {
                    return <Redirect to='/admin' />
                }
            }}
        />
    )
}