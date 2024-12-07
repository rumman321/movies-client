import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
if(!user){
    return <Navigate to='/login'></Navigate>
}
 return children
};

export default PrivateRoute;