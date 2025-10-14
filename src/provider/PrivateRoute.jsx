import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';
import Loading from './Loading';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    const location=useLocation();


    if(loading) {
        <Loading></Loading>
    }
    else if(!user) {
       return <Navigate state={{from : location.pathname}} to="/login"></Navigate>
    }

    return children;
    // if(loading) {
    //     return <Loading></Loading>
    // }

    // if(user && user?.email) {
    //     return children;
    // }

    // return (
    //     <div>
    //         <Navigate state={location.pathname} to="/login"></Navigate>
    //     </div>
    // );
};

export default PrivateRoute;