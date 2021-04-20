import axios from 'axios';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    return <Route
        {...rest} render={()=> {
            if(localStorage.getItem('token')) {
                return <Component />
            } else {
                return <Redirect to='/login' />
            }
        }} />
}

export default PrivateRoute;