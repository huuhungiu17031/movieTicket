import React, { Component } from 'react'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FETCH_CREDENTIAL } from '../redux/constants/constants';
import { createAction } from '../redux/action';
import Swal from 'sweetalert2'
class Navbar extends Component {

    deleteCredential = (history) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log out'
        })
            .then((result) => {
                if (result.value) {
                    localStorage.removeItem('credentials')
                    this.props.dispatch(createAction(FETCH_CREDENTIAL, null));
                    Swal.fire(
                        'Logout successfully'
                    )
                }
            })
    }
    componentDidMount() {
        console.log(window.URL)
    }
    render() {
        const { credentials } = this.props;
        return (
            <div className='navbarComponent' id='navbarComponent'>
                <nav className='navbar navbar-expand-lg navbar-light '>
                    <Link
                        activeClass='active'
                        to='Carousel'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='nav-item active'>
                        <h3 className='styleLogo'>
                            CIN<span>E</span>MA
                        </h3>
                    </Link>

                    <button className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarText'
                        aria-controls='navbarText'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>

                    <div className='collapse navbar-collapse' id='navbarText'>
                        <ul className='navbar-nav mr-auto '>
                            <Link
                                activeClass='active'
                                to='SearchFilmInfor'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='nav-item active'>
                                <NavLink
                                    className='nav-link neonButton'
                                    exact to='/'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Lịch chiếu
                                </NavLink>
                            </Link>
                            <Link
                                activeClass='active'
                                to='Schedule'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='nav-item neonButton'>
                                <NavLink className='nav-link' to='/'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Cụm rạp
                                </NavLink>
                            </Link>
                            <Link
                                activeClass='active'
                                to='News'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='nav-item neonButton'>
                                <NavLink className='nav-link' to='/'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Tin tức
                                </NavLink>
                            </Link>
                            <Link
                                activeClass='active'
                                to='Application'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='nav-item neonButton'>
                                <NavLink className='nav-link' to='/'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Ứng dụng
                                </NavLink>
                            </Link>
                        </ul>

                        <div className='navbar-text'>
                            {credentials !== null ?
                                (
                                    <>
                                        <button className='btn '>
                                            <NavLink className='neonButton' to='#'>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Hi {credentials.hoTen}
                                            </NavLink>
                                        </button>
                                        <button className='btn '
                                            onClick={() => { this.deleteCredential(this.props.history) }}>
                                            <NavLink className='neonButton' to='#' >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Đăng xuất
                                            </NavLink>
                                        </button>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <button className='btn '>
                                            <NavLink className='neonButton' to='/SignInScreen'>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Đăng nhập
                                            </NavLink>
                                        </button>
                                        <button className='btn '>
                                            <NavLink className='neonButton' to='/SignUpScreen'>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Đăng kí
                                            </NavLink>
                                        </button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        credentials: state.UserReducers.credentials
    }
}

export default connect(mapStateToProps)(Navbar)











