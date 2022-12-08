import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoyaltyPoints from "./pages/LoyaltyPoints";
import LocationManagement from "./pages/LocationManagement";
import BannerManagement from "./pages/BannerManagement";
import SMManagement from "./pages/SMManagement";
import SalesReport from "./pages/SalesReport";
import Settings from "./pages/Settings";
import BookingCalender from "./pages/BookingPages/BookingCalender";
import BookingDashboard from "./pages/BookingPages/BookingDashboard";
import BookingAppointments from "./pages/BookingPages/BookingAppointments";
import EmailNotification from "./pages/BookingPages/EmailNotification";
import EmployeeManagement from "./pages/BookingPages/EmployeeManagement";
import Payments from "./pages/BookingPages/Payments";
import ServicesManagement from "./pages/BookingPages/ServicesManagement";
import SMSNotification from "./pages/BookingPages/SMSNotification";
import UserManagement from "./pages/BookingPages/UserManagement";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";

function App() {
  // const { currentUserData } = useContext(AuthContext);

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUserData) {
  //     return <Navigate to="/" />;
  //   }
  //   return children;
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route
            index
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/BookingAppointments" element={<BookingAppointments />} />
        <Route path="/BookingCalender" element={<BookingCalender />} />
        <Route path="/BookingDashboard" element={<BookingDashboard />} />
        <Route path="/EmailNotification" element={<EmailNotification />} />
        <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/ServicesManagement" element={<ServicesManagement />} />
        <Route path="/SMSNotification" element={<SMSNotification />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/LoyaltyPoints" element={<LoyaltyPoints />} />
        <Route path="/LocationManagement" element={<LocationManagement />} />
        <Route path="/BannerManagement" element={<BannerManagement />} />
        <Route path="/SMManagement" element={<SMManagement />} />
        <Route path="/SalesReport" element={<SalesReport />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
