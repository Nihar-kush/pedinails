import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
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

function App() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ user, redirectPath = "/" }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
  };
  
  const SuperAdminRoute = ({ user, redirectPath = "/" }) => {
    if (user?.role === "superadmin") {
      return <Outlet />;
    }
    return <Navigate to={redirectPath} replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route element={<SuperAdminRoute user={currentUser} />}>
          <Route path="/LocationManagement" element={<LocationManagement />} />
        </Route>
        <Route element={<ProtectedRoute user={currentUser} />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route
            path="/BookingAppointments"
            element={<BookingAppointments />}
          />
          <Route path="/BookingCalender" element={<BookingCalender />} />
          <Route path="/BookingDashboard" element={<BookingDashboard />} />
          <Route path="/EmailNotification" element={<EmailNotification />} />
          <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
          <Route path="/Payments" element={<Payments />} />
          <Route path="/ServicesManagement" element={<ServicesManagement />} />
          <Route path="/SMSNotification" element={<SMSNotification />} />
          <Route path="/UserManagement" element={<UserManagement />} />
          <Route path="/LoyaltyPoints" element={<LoyaltyPoints />} />
          <Route path="/BannerManagement" element={<BannerManagement />} />
          <Route path="/SMManagement" element={<SMManagement />} />
          <Route path="/SalesReport" element={<SalesReport />} />
          <Route path="/Settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
