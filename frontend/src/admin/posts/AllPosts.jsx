import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { deletePost, findAllPost } from "../../api/postService";

function AllPosts() {
    const navigate = useNavigate();
    const [lstPost, setLstPost] = useState([]);
    useEffect(() => {
        findAllPost().then((res) => {
            setLstPost(res.data);
        });
    }, []);
    const handleDelete = (id) => {
        deletePost(id).then(() => {
            setLstPost(lstPost.filter((item) => item.id !== id));
            alert("Xoá thành công");
        });
    };
    return (
        <section className="container">
            <div className="d-flex justify-content-between align-items-center py-3">
                <h3 className="text-uppercase m-0">Xem tất cả bài viết</h3>
                <button
                    className="btn btn-success"
                    onClick={() => navigate("/admin/post/add")}
                >
                    Thêm mới
                </button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="text-capitalize">id</th>
                        <th className="text-capitalize">tiêu đề bài viết</th>
                        <th className="text-capitalize">danh mục bài viết</th>
                        <th className="text-capitalize">hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {lstPost.length > 0 ? (
                        lstPost.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.categoryData.name}</td>
                                    <td>
                                        <Link
                                            to={`/admin/post/edit/${item.id}`}
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

export default AllPosts;
