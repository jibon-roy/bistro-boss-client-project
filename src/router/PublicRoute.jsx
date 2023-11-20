
import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";


const PublicRoute = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useAuthContext();

    if (loading) {
        return <span className="loading loading-spinner loading-lg min-h-[80vh] block mx-auto"></span>
    }

    if (user) {
        return <Navigate to='/' state={location?.pathname} replace></Navigate>
    } else {
        return children;
    }

};

export default PublicRoute;