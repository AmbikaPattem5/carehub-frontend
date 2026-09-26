import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import ForgotPassword from "../Pages/ForgotPassword";
import Home from "../Pages/Home";
import Patients from "../Pages/Patients";
import Doctors from "../Pages/Doctors";
import Appointments from "../Pages/Appointments";
import Billing from "../Pages/Billing";
import Dashboard from "../Pages/Dashboard";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path='/' element={<Home />}>
                <Route index element={<Dashboard />} />
                <Route path='dashboard' element={<Navigate to="/" replace />} />
                <Route path="patients" element={<Patients />} />
                <Route path="doctors" element={<Doctors />} />
                <Route path="appointments" element={<Appointments />} />
                <Route path="billing" element={<Billing />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes