import React, { Component } from 'react';
import './App.css';
import 'sweetalert2/src/sweetalert2.scss'
import { connect } from 'react-redux';
import { routesHome, routesAdmin } from './routes'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './Screen/pageNotFound/pageNotFound'
import AdminScreen from './Screen/admin/adminScreen';
import HomeTemplate from './template/homeTemplate';
import AdminTemplate from './template/adminTemplate';
import { createAction } from './redux/action';
import { FETCH_CREDENTIAL } from './redux/constants/constants';
const showMenuHome = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (

        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      )
    })
  }
}


const showMenuAdmin = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <AdminTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      )
    })
  }
}

class App extends Component {
  checkTheCredentialsInLocal = () => {
    const credentials = localStorage.getItem('credentials');
    if (credentials) {
      this.props.dispatch(createAction(FETCH_CREDENTIAL, JSON.parse(credentials)))
    }
  }

  componentDidMount() {
    this.checkTheCredentialsInLocal()
  }
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            {showMenuHome(routesHome)}
            {showMenuAdmin(routesAdmin)}
            <Route path='/admin' component={AdminScreen} />
            <Route path='' component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }

}



const mapStateToProps = state => {
  return {
    credentials: state.UserReducers.credentials
  }
}

export default connect(mapStateToProps)(App);
