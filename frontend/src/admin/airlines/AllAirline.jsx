import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteAirline, findAllAirline } from "../../api/airlineService";

function AllAirline() {
    const [lstAirline, setLstAirline] = useState([]);
    useEffect(() => {
        document.title = "Tất cả hãng hàng không";
        findAllAirline().then((res) => {
            if (res.data) setLstAirline(res.data);
        });
    }, []);
    const handleDel = (id) => {
        const cf = confirm("Bạn có muốn xóa mục này không?");
        if (!cf) return;
        deleteAirline(id)
            .then((res) => {
                if (res.data && res.data.statusCode === 0) {
                    setLstAirline(lstAirline.filter((item) => item.id !== id));
                }
            })
            .catch((e) => {
                alert(e.response.data.message);
            });
    };
    return (
        <div>
            <div className="py-3">
                <h3 className="text-uppercase m-0">
                    Xem tất cả hãng hàng không
                </h3>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tên hãng hàng không</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {lstAirline && lstAirline.length > 0 ? (
                        lstAirline.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
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
        </div>
    );
}

export default AllAirline;
