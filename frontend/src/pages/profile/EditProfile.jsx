import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findOneUser, updateUser } from "../../api/userService";
import { useDispatch } from "react-redux";
import { saveGuest } from "../../features/userSlice";

function EditProfile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        phone: "",
        fullname: "",
    });
    useEffect(() => {
        document.title = "Sửa thông tin cá nhân";
        findOneUser(id).then((res) => {
            setUser(res.data);
        });
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const _data = {
            phone: user.phone,
            fullname: user.fullname,
        };
        updateUser(id, _data).then(() => {
            alert("Cập nhật thành công");
            findOneUser(id).then((res) => {
                dispatch(saveGuest(res.data));
            });
            navigate("/profile/" + id);
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    return (
        <section className="container py-3">
            <h1 className="text-center mb-3">Sửa thông tin</h1>
            <form
                method="post"
                onSubmit={handleSubmit}
                className="w-50 mx-auto border rounded-3 shadow p-3"
            >
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">
                        Họ tên
                    </label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        className="form-control"
                        value={user.fullname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        defaultValue={user.email}
                        name="email"
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        User name
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        defaultValue={user.username}
                        name="username"
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className="form-control"
                        onChange={handleChange}
                        value={user.phone}
                        name="phone"
                    />
                </div>
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Lưu thông tin"
                />
            </form>
        </section>
    );
}

export default EditProfile;
