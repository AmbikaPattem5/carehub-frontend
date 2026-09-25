import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Dashboard from "../Pages/Dashboard";
import ForgotPassword from "../Pages/ForgotPassword";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
    )
}

export default AppRoutes