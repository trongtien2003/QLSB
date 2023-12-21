import { useEffect, useState } from "react";
import { deleteProvince, findAllProvince } from "../../api/provinceService";
import { Link, useNavigate } from "react-router-dom";

function AllProvince() {
    const navigate = useNavigate();
    const [lstProvince, setLstProvince] = useState([]);
    useEffect(() => {
        findAllProvince().then((res) => {
            if (res.data) setLstProvince(res.data);
        });
    }, []);
    const handleDel = (id) => {
        const cf = confirm("Bạn có muốn xóa mục này không?");
        if (!cf) return;
        deleteProvince(id).then((res) => {
            if (res.data && res.data.statusCode === 0) {
                setLstProvince(lstProvince.filter((item) => item.id !== id));
            }
        });
    };
    return (
        <section className="pe-3">
            <div className="d-flex justify-content-between align-items-center py-3">
                <h3 className="text-uppercase m-0">Xem tất cả tỉnh thành</h3>
                <button
                    className="btn btn-success"
                    onClick={() => navigate("/admin/province/add")}
                >
                    Thêm tỉnh thành
                </button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Mã tỉnh thành</th>
                        <th>Tên</th>
                        <th>Tên sân bay</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {lstProvince && lstProvince.length > 0 ? (
                        lstProvince.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.airportName}</td>
                                    <td>
                                        <Link
                                            to={`edit/${item.id}`}
                                            className="text-primary"
                                        >
                                            Sửa
                                        </Link>
                                        <span
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleDel(item.id)}
                                            className="text-danger ms-3"
                                        >
                                            Xóa
                                        </span>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={5}>Không tìm thấy dữ liệu</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
}

export default AllProvince;
