import { useEffect, useState } from "react";
import { deleteBooking, findAllBooking } from "../../api/booking.service";
import { formatDate, formatter } from "../../module/functions";

function AllBooking() {
    const [lstBooking, setLstBooking] = useState([]);
    useEffect(() => {
        findAllBooking().then((res) => {
            if (res && res.data) setLstBooking(res.data);
        });
    }, []);
    const handleDetele = (id) => {
        const ops = confirm("Xác nhận xóa?");
        if (ops) {
            deleteBooking(id)
                .then(() => {
                    setLstBooking(lstBooking.filter((item) => item.id !== id));
                })
                .catch((e) => {
                    alert(e.response.data.message);
                });
        }
    };
    return (
        <section className="container">
            <h3 className="text-uppercase py-3">Xem tất cả vé đã đặt</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Chuyến bay</th>
                        <th>Số hành khách</th>
                        <th>Thanh toán</th>
                        <th>Ngày đặt</th>
                        <th>Tổng tiền</th>
                        <th>Người đặt</th>
                        <th>Email</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {lstBooking && lstBooking.length > 0 ? (
                        lstBooking.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.flightNumber}</td>
                                    <td>{item.seat}</td>
                                    <td>
                                        {item.payStatus == 0 ? (
                                            <span className="text-warning">
                                                Chưa thanh toán
                                            </span>
                                        ) : (
                                            <span className="text-success">
                                                Đã thanh toán
                                            </span>
                                        )}
                                    </td>
                                    <td>{formatDate(item.bookingDate)}</td>
                                    <td>{formatter.format(item.amount)}</td>
                                    <td>{item.passengerData.name}</td>
                                    <td>{item.passengerData.email}</td>
                                    <td className="text-center">
                                        <span
                                            style={{ cursor: "pointer" }}
                                            className="text-danger"
                                            onClick={() =>
                                                handleDetele(item.id)
                                            }
                                        >
                                            Xóa
                                        </span>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={7} className="text-center">
                                Danh sách trống
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
}

export default AllBooking;
