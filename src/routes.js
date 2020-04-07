import HomeScreen from './Screen/Home';
import MovieDetailScreen from './Screen/detail/movieDetail';
import SignUpScreen from './Screen/signUp';
import SignInScreen from './Screen/signIn/index'
import BookingScreen from './Screen/bookingScreen/bookingScreen'
import DashBoard from './Screen/admin/dashBoard';
// import AdminScreen from './Screen/admin/adminScreen'
// import PageNotFound from './Screen/pageNotFound/pageNotFound'
// import React from 'react'
const routesHome = [{
        path: '/',
        exact: true,
        component: HomeScreen
    },
    {
        path: '/MovieDetailScreen/:id',
        exact: false,
        component: MovieDetailScreen
    },
    {
        path: '/SignUpScreen',
        exact: false,
        component: SignUpScreen
    },
    {
        path: '/SignInScreen',
        exact: false,
        component: SignInScreen
    },
    {
        path: '/BookingScreen/:groupId',
        exact: false,
        component: BookingScreen
    }
]

const routesAdmin = [{
        path: '/dashboard',
        exact: false,
        component: DashBoard
    },
    // {
    //     path:'/admin',
    //     exact: false,
    //     component: AdminScreen
    // }
]
export { routesHome, routesAdmin }