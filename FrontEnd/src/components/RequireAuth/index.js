import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Home from "../../screens/home";

const RequireAuth = () => {
    const {auth} = useAuth();
    const location = useLocation();

    return(
        auth?.email
        ? <Home/>
        : <Navigate to='/login' state={{ from: location}} replace/>
    )
}

export default RequireAuth