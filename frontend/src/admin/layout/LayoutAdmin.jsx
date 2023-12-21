import { Link, Outlet, useNavigate } from "react-router-dom";
import { MenuAdmin } from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { saveUser } from "../../features/userSlice";
import { handleLogin } from "../../features/loginSlice";

function LayoutAdmin() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.isLogin);
    const admin = useSelector((state) => state.userAdmin.userData);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(auth);
        if (!auth) navigate("/login");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);
    const handleLogout = () => {
        dispatch(handleLogin(false));
        dispatch(saveUser({}));
    };

    return (
        <>
            <div className="row">
                <div className="col-md-2 p-3 gap-2 border-end min-vh-100 d-flex flex-column">
                    <h5 className="text-uppercase text-start ps-4 py-1">
                        <Link to={"/admin"}>Quản trị</Link>
                    </h5>
                    {MenuAdmin.map((item, index) => {
                        if (item.child) {
                            return (
                                <div key={index} className="btn-group dropend">
                                    <button
                                        type="button"
                                        className="btn btn-light border text-start ps-4 text-capitalize dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {item.name}
                                    </button>
                                    <ul className="dropdown-menu">
                                        {item.child.map((child, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link
                                                        className="dropdown-item text-capitalize"
                                                        to={`/admin/${child.link}`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        } else {
                            return (
                                <Link
                                    key={index}
                                    className="btn btn-light border text-capitalize ps-4 text-start"
                                    to={`/admin/${item.link}`}
                                >
                                    {item.name}
                                </Link>
                            );
                        }
                    })}
                </div>
                <div className="col-md-10">
                    <div className="p-3 text-end border-bottom">
                        <div className="dropdown">
                            <button
                                className="btn btn-light dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {admin.fullname}
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={handleLogout}
                                    >
                                        Đăng xuất
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default LayoutAdmin;
