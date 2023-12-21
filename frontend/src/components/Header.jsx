import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleGuestLogin } from "../features/loginSlice";
import { saveGuest } from "../features/userSlice";

function Header() {
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.userAdmin.guest);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(handleGuestLogin(false));
        dispatch(saveGuest({}));
    };
    return (
        <header className="py-2 bg-light">
            <div className="row container mx-auto justify-content-center">
                <div className="col-md-3 text-center">
                    <Link to={"/"}>
                        <img
                            style={{ width: 120, height: 120 }}
                            src="/images/logo.jpg"
                            className="rounded-pill border border-2"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h2 className="text-uppercase text-center mb-2">
                        cảng hàng không quốc tế hữu nghị
                    </h2>
                    <nav>
                        <form className="d-flex gap-3">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Tìm kiếm"
                            />
                            <button className="btn btn-primary" type="submit">
                                Search
                            </button>
                        </form>
                    </nav>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <div className="dropdown">
                        <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {auth.guestLogin ? user.fullname : "Tài khoản"}
                        </button>
                        {auth.guestLogin ? (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={"/profile/" + user.id}
                                    >
                                        Trang cá nhân
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={handleLogout}
                                    >
                                        Đăng xuất
                                    </button>
                                </li>
                            </ul>
                        ) : (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/signin"
                                    >
                                        Đăng nhập
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/signup"
                                    >
                                        Đăng ký
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
