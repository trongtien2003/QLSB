import { useState } from "react";
import { createNewUser } from "../../api/userService";
import { useNavigate } from "react-router-dom";

function AddUser() {
    const navigate = useNavigate();
    const initState = {
        email: "",
        username: "",
        fullname: "",
        password: "",
        phone: "",
        isAdmin: 0,
    };
    const [userInfo, setUserInfo] = useState(initState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };
    const validate = () => {
        const key = Object.keys(initState);
        key.pop();
        for (let index = 0; index < key.length; index++) {
            const element = key[index];
            if (!userInfo[element]) {
                alert("Thiếu thông tin: " + element);
                return false;
            }
        }
        return true;
    };
    const handleSubmit = () => {
        if (!validate()) return;
        createNewUser(userInfo).then((res) => {
            if (res && res.data) {
                alert("Thêm thành công");
                navigate("/admin/user");
            }
        });
    };
    return (
        <div className="pe-3">
            <div className="d-flex py-3 align-items-center justify-content-between">
                <h3 className="text-uppercase m-0">Thêm người dùng</h3>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Lưu thông tin
                </button>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Nhập email"
                        required={true}
                        value={userInfo.email}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="username">
                        User name
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="username"
                        name="username"
                        required={true}
                        value={userInfo.username}
                        placeholder="Tên đăng nhập"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="fullname">
                        Họ tên
                    </label>
                    <input
                        className="form-control"
                        id="fullname"
                        name="fullname"
                        value={userInfo.fullname}
                        type="text"
                        required={true}
                        placeholder="Họ và tên"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="password">
                        Mật khẩu
                    </label>
                    <input
                        className="form-control"
                        id="password"
                        name="password"
                        value={userInfo.password}
                        type="password"
                        required={true}
                        placeholder="Mật khẩu"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="isAdmin">
                        Quyền
                    </label>
                    <select
                        className="form-select"
                        id="isAdmin"
                        name="isAdmin"
                        defaultValue={0}
                        value={userInfo.is}
                        required={true}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value={0}>Khách hàng</option>
                        <option value={1}>Admin</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="phone">
                        Số điện thoại
                    </label>
                    <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={userInfo.phone}
                        type="tel"
                        required={true}
                        placeholder="Số điện thoại"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddUser;
