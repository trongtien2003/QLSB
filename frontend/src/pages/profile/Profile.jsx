import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findOneUser } from "../../api/userService";

function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        document.title = "Trang cá nhân";
        findOneUser(id).then((res) => {
            setUser(res.data);
        });
    }, [id]);

    return (
        <section className="container py-3">
            <h1 className="text-center mb-3">Trang cá nhân</h1>
            <div className="w-50 mx-auto border rounded-3 shadow p-3">
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">
                        Họ tên
                    </label>
                    <input
                        type="text"
                        id="fullname"
                        className="form-control"
                        defaultValue={user.fullname}
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        defaultValue={user.phone}
                        readOnly
                    />
                </div>
                <Link to={"/profile/edit/" + id} className="btn btn-primary">
                    Sửa thông tin
                </Link>
            </div>
        </section>
    );
}

export default Profile;
