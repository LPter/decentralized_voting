import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthProvider";

const RequireAuth = () => {
    const { auth } = useContext(AuthContext);
    return (
        auth.length === 4 ? (
            <Navigate to="/login" replace />
            ) : (
            <Outlet />
        )
    );
};

export default RequireAuth;