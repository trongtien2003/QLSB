import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePages } from "./pages/home/HomePages";
import { LayoutSite } from "./pages/layout/LayoutSite";
import NotFound from "./pages/NotFound";
import Booking from "./pages/booking/Booking";
import Tracking from "./pages/tracking/Tracking";
import FillInfo from "./pages/booking/FillInfo";
import BookingSuccess from "./pages/booking/BookingSuccess";
import AdminRoute from "./admin/AdminRoute";
import Pay from "./pages/Pay";
import Post from "./pages/post/Post";
import SignIn from "./pages/login/SignIn";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import SignUp from "./pages/login/SignUp";
import SignUpSuccess from "./pages/login/SignUpSuccess";
import Login from "./admin/login/Login";
import About from "./pages/post/About";
import ListNew from "./pages/post/ListNew";
import NewFillInfo from "./pages/booking/NewFillInfo";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutSite />}>
                    <Route index element={<HomePages />} />
                    <Route path="booking" element={<Booking />} />
                    <Route path="booking/fillinfo/:id" element={<FillInfo />} />
                    <Route
                        path="booking/newfillinfo/:id/:returnId"
                        element={<NewFillInfo />}
                    />
                    <Route path="tracking" element={<Tracking />} />
                    <Route path="bookingSuccess" element={<BookingSuccess />} />
                    <Route path="post/:id" element={<Post />} />
                    <Route path="pay" element={<Pay />} />
                    <Route path="profile/:id" element={<Profile />} />
                    <Route path="profile/edit/:id" element={<EditProfile />} />
                    <Route path="signupSuccess" element={<SignUpSuccess />} />
                    <Route path="about" element={<About />} />
                    <Route path="news" element={<ListNew />} />
                </Route>
                <Route path="/admin/*" element={<AdminRoute />} />
                <Route path="*" element={<NotFound />} />
                <Route path="login" element={<Login />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
            </Routes>
        </>
    );
}

export default App;
