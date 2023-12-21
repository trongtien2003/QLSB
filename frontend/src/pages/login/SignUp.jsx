import { useEffect, useState } from "react";
import { createNewUser } from "../../api/userService";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Đăng ký";
    }, []);
    const [registerInfo, setRegisterInfo] = useState({
        email: "",
        password: "",
        phone: "",
        username: "",
        fullname: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterInfo({
            ...registerInfo,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        createNewUser(registerInfo).then(() => {
            navigate("/signupSuccess");
        });
    };
    return (
        <section
            style={{ minHeight: "100vh" }}
            className="d-flex flex-column justify-content-center align-items-center h-100"
        >
            <h3 className="mb-3">Đăng ký</h3>
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
                        value={registerInfo.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        name="password"
                        value={registerInfo.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Tên đăng nhập
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={registerInfo.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">
                        Họ tên
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        name="fullname"
                        value={registerInfo.fullname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Điện thoại
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={registerInfo.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="submit"
                    value="Đăng ký"
                    className="btn btn-primary w-100"
                />
            </form>
        </section>
    );
}

export default SignUp;
