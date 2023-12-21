import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findAllUser, removeUser } from "../../api/userService";

function AllUser() {
    const [lstUser, setLstUser] = useState([]);
    useEffect(() => {
        findAllUser().then((res) => {
            if (res && res.data) {
                setLstUser(res.data);
            }
        });
    }, []);
    const handleRemove = (item) => {
        const cf = confirm("Xác nhận xoá tài khoản " + item.fullname + "?");
        if (!cf) return;
        const { id, isAdmin } = item;
        if (isAdmin === 1) {
            alert("Không thể xoá tài khoản quản trị");
            return;
        }
        removeUser(id).then(() => {
            alert("Xoá thành công");
            setLstUser(lstUser.filter((row) => row.id !== id));
        });
    };

    return (
        <div>
            <h3 className="py-3 font-bold text-uppercase tracking-tight mb-2">
                tất cả người dùng
            </h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Tên người dùng</th>
                        <th>Email</th>
                        <th>User name</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {lstUser.length > 0 ? (
                        lstUser.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.fullname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        {item.isAdmin == 0
                                            ? "Người dùng"
                                            : "Quản trị"}
                                    </td>
                                    <td>
                                        <Link
                                            to={`edit/${item.id}`}
                                            className="text-primary"
                                        >
                                            Sửa
                                        </Link>
                                        <span
                                            style={{ cursor: "pointer" }}
                                            className="text-danger ms-3"
                                            onClick={() => handleRemove(item)}
                                        >
                                            Xóa
                                        </span>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={6}>Không có dữ liệu</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AllUser;
