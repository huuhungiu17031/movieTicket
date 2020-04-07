import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createAction } from '../redux/action'
import { FETCH_CREDENTIAL } from '../redux/constants/constants'
class NavbarAdmin extends Component {
    state = {
        credentail: localStorage.getItem('credentails')
    }
    clearCredential() {
        localStorage.removeItem('credentials')
        this.props.dispatch(createAction(FETCH_CREDENTIAL, null))
        localStorage.removeItem('movie')
        this.setState({
            credentail: localStorage.getItem('credentials')
        })
    }

    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        return (
            <div className='NavbarAdmin'>
                <div>
                    NAVBAR ADMIN
                </div>
                {credentials !== null ?
                    (
                        <>
                            <div>Welcome, <span className='text-uppercase'>{`${credentials.hoTen}`}</span>  </div>
                            <button className='btn btn-primary' onClick={() => {
                                this.clearCredential()
                            }}> LogOut</button>
                        </>
                    ) :
                    (
                        <>
                            <Redirect to='/' />
                        </>
                    )
                }

            </div>
        )
    }
}


export default connect()(NavbarAdmin)