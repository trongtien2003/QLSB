import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./layout/LayoutAdmin";
import DashBoard from "./DashBoard";
import NotFound from "../pages/NotFound";
import AllUser from "./user/AllUser";
import AddUser from "./user/AddUser";
import EditUser from "./user/EditUser";
import AllFlight from "./flight/AllFlight";
import AddFlight from "./flight/AddFlight";
import AllAirline from "./airlines/AllAirline";
import AddAirline from "./airlines/AddAirline";
import EditAirline from "./airlines/EditAirline";
import AllProvince from "./province/AllProvince";
import AddProvince from "./province/AddProvince";
import EditProvince from "./province/EditProvince";
import EditFlight from "./flight/EditFlight";
import AllBooking from "./booking/AllBooking";
import AllCategory from "./category/AllCategory";
import AddCategory from "./category/AddCategory";
import EditCategory from "./category/EditCategory";
import AllPosts from "./posts/AllPosts";
import AddPost from "./posts/AddPost";
import EditPost from "./posts/EditPost";

function AdminRoute() {
    return (
        <Routes>
            <Route path="/" element={<LayoutAdmin />}>
                <Route index element={<DashBoard />} />
                <Route path="user" element={<AllUser />} />
                <Route path="user/add" element={<AddUser />} />
                <Route path="user/edit/:id" element={<EditUser />} />
                <Route path="flight" element={<AllFlight />} />
                <Route path="flight/add" element={<AddFlight />} />
                <Route path="flight/edit/:id" element={<EditFlight />} />
                <Route path="airline" element={<AllAirline />} />
                <Route path="airline/add" element={<AddAirline />} />
                <Route path="airline/edit/:id" element={<EditAirline />} />
                <Route path="province" element={<AllProvince />} />
                <Route path="province/add" element={<AddProvince />} />
                <Route path="province/edit/:id" element={<EditProvince />} />
                <Route path="booking" element={<AllBooking />} />
                <Route path="category" element={<AllCategory />} />
                <Route path="category/add" element={<AddCategory />} />
                <Route path="category/edit/:id" element={<EditCategory />} />
                <Route path="post" element={<AllPosts />} />
                <Route path="post/add" element={<AddPost />} />
                <Route path="post/edit/:id" element={<EditPost />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AdminRoute;
