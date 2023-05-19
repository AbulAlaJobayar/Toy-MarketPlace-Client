import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation();
    if (loader) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children
    }
    return (
        <Navigate state={{ from: location }} to="/login" replace></Navigate>
    );
};

export default PrivateRoute;