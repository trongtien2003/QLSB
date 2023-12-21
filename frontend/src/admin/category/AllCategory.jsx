import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { findAllCategory, removeCategory } from "../../api/categoryService";

function AllCategory() {
    const navigate = useNavigate();
    const [lstCategory, setLstCategory] = useState([]);
    useEffect(() => {
        findAllCategory().then((res) => {
            setLstCategory(res.data);
        });
    }, []);
    const handleDelete = (id) => {
        removeCategory(id).then(() => {
            setLstCategory(lstCategory.filter((item) => item.id !== id));
            alert("Xoá thành công");
        });
    };
    return (
        <section className="container">
            <div className="d-flex justify-content-between align-items-center py-3">
                <h3 className="text-uppercase m-0">Xem tất cả danh mục</h3>
                <button
                    className="btn btn-success"
                    onClick={() => navigate("/admin/category/add")}
                >
                    Thêm mới
                </button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="text-capitalize">id</th>
                        <th className="text-capitalize">tên danh mục</th>
                        <th className="text-capitalize">slug</th>
                        <th className="text-capitalize">hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {lstCategory.length > 0 ? (
                        lstCategory.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.slug}</td>
                                    <td>
                                        <Link
                                            to={`/admin/category/edit/${item.id}`}
                                            className="text-primary"
                                        >
                                            Sửa
                                        </Link>
                                        <span
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
                                            className="text-danger ms-3"
                                        >
                                            Xoá
                                        </span>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={3}>Không có dữ liệu</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
}

export default AllCategory;
