import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../api/loginService";
import { handleLogin } from "../../features/loginSlice";
import { saveUser } from "../../features/userSlice";

function SignIn() {
    useEffect(() => {
        document.title = "Đăng nhập";
    }, []);
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth.isLogin);
    useEffect(() => {
        if (auth) navigate("/admin");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        loginApi(loginInfo)
            .then((res) => {
                console.log(res);
                if (res.data && res.data.statusCode === 0) {
                    if (res.data.user.isAdmin === 1) {
                        dispatch(handleLogin(true));
                        dispatch(saveUser(res.data.user));
                    } else {
                        alert("Tài khoản là người dùng");
                    }
                }
            })
            .catch((e) => {
                alert(e.response.data.message);
            });
    };
    return (
        <section
            style={{ minHeight: "100vh" }}
            className="d-flex flex-column justify-content-center align-items-center h-100"
        >
            <h3 className="mb-3">Đăng nhập</h3>
            <form
                style={{ width: 400 }}
                className="mx-auto border rounded-3 shadow p-3"
                onSubmit={handleSubmit}
                method="post"
            >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={loginInfo.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        name="password"
                        value={loginInfo.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="submit"
                    value="Đăng nhập"
                    className="btn btn-primary w-100"
                />
            </form>
        </section>
    );
}

export default SignIn;
