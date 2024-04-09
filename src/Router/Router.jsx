import { useContext } from "react";
import { AuthContext } from "../Layout/Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Router = ({ children }) => {
    const { user , loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to='/Login' replace></Navigate> ;
};

export default Router;