import HomeScreen from './Screen/Home';
import MovieDetailScreen from './Screen/detail/movieDetail';
import SignUpScreen from './Screen/signUp';
import SignInScreen from './Screen/signIn/index'
import BookingScreen from './Screen/bookingScreen/bookingScreen'
import DashBoard from './Screen/admin/dashBoard';

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

]
export { routesHome, routesAdmin }