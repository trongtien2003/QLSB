import { useEffect, useState } from "react";
import {
    deleteFlight,
    findAllFlight,
    findFlightByDate,
} from "../../api/flightService";
import { Link } from "react-router-dom";
import {
    formatDate,
    formatHour,
    formatter,
    handleCalcTime,
} from "../../module/functions";

function AllFlight() {
    const [day, setDay] = useState("");
    const handleChange = (e) => {
        const date = new Date(e.target.value);
        date.setHours(0, 0, 0, 0);
        setDay(date.getTime());
    };
    const handleFilter = () => {
        findFlightByDate(day).then((res) => {
            if (res && res.data) {
                setLstFlight(res.data);
            }
        });
    };
    const [lstFlight, setLstFlight] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        findAllFlight().then((res) => {
            if (res && res.data) {
                setLstFlight(res.data);
            }
        });
    };

    const handleDelete = (id) => {
        const xn = confirm("Xác nhận xóa chuyến bay số " + id + "?");
        if (xn) {
            fetchDelete(id);
        }
    };

    const fetchDelete = (id) => {
        deleteFlight(id)
            .then((res) => {
                if (res && res.data && res.data.statusCode === 0) {
                    console.log(res);
                    setLstFlight(lstFlight.filter((item) => item.id !== id));
                }
            })
            .catch((e) => {
                const m =
                    "Không thể xóa chuyến bay này, " + e.response.data.message;
                alert(m);
            });
    };

    return (
        <div className="bg-gray-100 -m-3 p-3">
            <h3 className="text-uppercase mb-3">Xem tất cả chuyến bay</h3>
            <div className="mb-3 row align-items-end">
                <div className="col-md-3">
                    <label className="form-label" htmlFor="filter">
                        Lọc theo ngày
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="filter"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary" onClick={handleFilter}>
                        Tìm
                    </button>
                    <button
                        className="btn btn-light ms-2"
                        onClick={() => fetchData()}
                    >
                        Xóa bộ lọc
                    </button>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Số hiệu</th>
                            <th>Hãng</th>
                            <th>Đi từ</th>
                            <th>Đến</th>
                            <th>Ngày bay</th>
                            <th>Giờ bay</th>
                            <th>Giờ hạ cánh</th>
                            <th>Thời gian bay</th>
                            <th>Giá vé</th>
                            <th>Số ghế trống</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lstFlight && lstFlight.length > 0 ? (
                            lstFlight.map((item) => {
                                const { arrivalTime, departureTime } = item;
                                const res = handleCalcTime(
                                    departureTime,
                                    arrivalTime
                                );
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.airlineData.name}</td>
                                        <td>{item.sourceData.name}</td>
                                        <td>{item.destinationData.name}</td>
                                        <td>{formatDate(item.travelDate)}</td>
                                        <td>
                                            {formatHour(item.departureTime)}
                                        </td>
                                        <td>{formatHour(item.arrivalTime)}</td>
                                        <td>{res}</td>
                                        <td>{formatter.format(item.price)}</td>
                                        <td>{item.availableSeat}</td>
                                        <td>
                                            <Link
                                                to={
                                                    "/admin/flight/edit/" +
                                                    item.id
                                                }
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
                                                Xóa
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={11}>Không tìm thấy dữ liệu</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AllFlight;
