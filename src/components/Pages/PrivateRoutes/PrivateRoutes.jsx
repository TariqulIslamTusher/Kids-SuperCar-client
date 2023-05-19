import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Loader/Loader';


const PrivateRoutes = ({children}) => {

    const {user, loader} = useContext(AuthContext)
    
    const location = useLocation()

    if(loader){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate to='/login' replace state={location}></Navigate>
    }

    return children
        
};

export default PrivateRoutes;