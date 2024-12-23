import React, { useContext } from 'react';
import AuthContext from '../Context/Authcontext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loader}=useContext(AuthContext)
    const location =useLocation()
    console.log(location);
    if (loader) {
        return <div className='flex items-center justify-center my-32'>
            <span className="loading w-10 h-10 loading-spinner text-neutral"></span>
        </div>
    }
    if (user && user?.email ) {
     return children
   } return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoute;