import { useEffect, useState } from "react";
import { formatDate, formatHour, formatter } from "../../module/functions";
import { findByEmail } from "../../api/trackingService";

function Tracking() {
    useEffect(() => {
        document.title = "Tra cứu";
    }, []);
    const [seatId, setSeatId] = useState("");
    const [response, setResponse] = useState(null);
    const handleFlChange = (e) => {
        setSeatId(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        findByEmail(seatId).then((res) => {
            if (res && res.data) setResponse(res.data);
            else setResponse(null);
        });
    };
    return (
        <section className="container py-3">
            <form
                style={{ width: 400 }}
                className="mx-auto"
                onSubmit={(e) => handleSubmit(e)}
            >
                <label htmlFor="seatId" className="form-label">
                    Mã đặt chỗ
                </label>
                <div className="d-flex gap-3">
                    <input
                        type="search"
                        className="form-control"
                        name="seatId"
                        id="seatId"
                        aria-describedby="helpId"
                        placeholder="Nhập mã đặt chỗ"
                        onChange={(e) => handleFlChange(e)}
                        required
                    />
                    <div>
                        <button type="submit" className="btn btn-primary">
                            Tìm
                        </button>
                    </div>
                </div>

                <small id="helpId" className="form-text text-muted">
                    Mã đặt chỗ được gửi về email của bạn
                </small>
            </form>
            {response ? (
                <>
                    {response.isRoundTrip === 0 ? (
                        <table
                            style={{ maxWidth: 700, margin: "0 auto" }}
                            className="table"
                        >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nội dung</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mã số chuyến bay</td>
                                    <td>{response.flightNumber}</td>
                                </tr>
                                <tr>
                                    <td>Hãng hàng không</td>
                                    <td>
                                        {response.flightData.airlineData
                                            ? response.flightData.airlineData
                                                  .name
                                            : ""}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Khởi hành từ</td>
                                    <td>
                                        {response.flightData.sourceData.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Đến</td>
                                    <td>
                                        {
                                            response.flightData.destinationData
                                                .name
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ngày khởi hành</td>
                                    <td>
                                        {formatDate(
                                            response.flightData.travelDate
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Giờ cất cánh</td>
                                    <td>
                                        {formatHour(
                                            response.flightData.departureTime
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Giờ hạ cánh</td>
                                    <td>
                                        {formatHour(
                                            response.flightData.arrivalTime
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tổng thanh toán</td>
                                    <td>{formatter.format(response.amount)}</td>
                                </tr>
                                <tr>
                                    <td>Họ tên</td>
                                    <td>{response.passengerData.name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{response.passengerData.email}</td>
                                </tr>
                                <tr>
                                    <td>Số người</td>
                                    <td>{response.seat}</td>
                                </tr>
                                <tr>
                                    <td>Ngày đặt</td>
                                    <td>{formatDate(response.bookingDate)}</td>
                                </tr>
                                <tr>
                                    <td>Trạng thái</td>
                                    <td>
                                        {response.payStatus == 0 ? (
                                            <span className="text-warning">
                                                Chưa thanh toán
                                            </span>
                                        ) : (
                                            <span className="text-success">
                                                Đã thanh toán
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ) : (
                        <>
                            <div className="row">
                                <div className="col-md-6">
                                    <table
                                        style={{
                                            maxWidth: 700,
                                            margin: "0 auto",
                                        }}
                                        className="table table-bordered"
                                    >
                                        <thead>
                                            <tr>
                                                <th>Chuyến đi</th>
                                                <th>Nội dung</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mã số chuyến bay</td>
                                                <td>{response.flightNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Hãng hàng không</td>
                                                <td>
                                                    {response.flightData
                                                        .airlineData
                                                        ? response.flightData
                                                              .airlineData.name
                                                        : ""}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Khởi hành từ</td>
                                                <td>
                                                    {
                                                        response.flightData
                                                            .sourceData.name
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Đến</td>
                                                <td>
                                                    {
                                                        response.flightData
                                                            .destinationData
                                                            .name
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ngày khởi hành</td>
                                                <td>
                                                    {formatDate(
                                                        response.flightData
                                                            .travelDate
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Giờ cất cánh</td>
                                                <td>
                                                    {formatHour(
                                                        response.flightData
                                                            .departureTime
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Giờ hạ cánh</td>
                                                <td>
                                                    {formatHour(
                                                        response.flightData
                                                            .arrivalTime
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Giá</td>
                                                <td>
                                                    {formatter.format(
                                                        response.flightData
                                                            .price
                                                    )}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-6">
                                    <table
                                        style={{
                                            maxWidth: 700,
                                            margin: "0 auto",
                                        }}
                                        className="table table-bordered"
                                    >
                                        <thead>
                                            <tr>
                                                <th>Chuyến về</th>
                                                <th>Nội dung</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mã số chuyến bay</td>
                                                <td>
                                                    {
                                                        response.returnFlightNumber
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Hãng hàng không</td>
                                                <td>
                                                    {response.returnFlightData
                                                        .airlineData
                                                        ? response
                                                              .returnFlightData
                                                              .airlineData.name
                                                        : ""}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Khởi hành từ</td>
                                                <td>
                                                    {
                                                        response
                                                            .returnFlightData
                                                            .sourceData.name
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Đến</td>
                                                <td>
                                                    {
                                                        response
                                                            .returnFlightData
                                                            .destinationData
                                                            .name
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ngày khởi hành</td>
                                                <td>
                                                    {formatDate(
                                                        response
                                                            .returnFlightData
                                                            .travelDate
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Giờ cất cánh</td>
                                                <td>
                                                    {formatHour(
                                                        response
                                                            .returnFlightData
                                                            .departureTime
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Giờ hạ cánh</td>
                                                <td>
                                                    {formatHour(
                                                        response
                                                            .returnFlightData
                                                            .arrivalTime
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Giá</td>
                                                <td>
                                                    {formatter.format(
                                                        response
                                                            .returnFlightData
                                                            .price
                                                    )}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <hr />
                            <table className="table w-50 mx-auto">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Thông tin khách hàng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Họ tên</td>
                                        <td>{response.passengerData.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{response.passengerData.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Số người</td>
                                        <td>{response.seat}</td>
                                    </tr>
                                    <tr>
                                        <td>Ngày đặt</td>
                                        <td>
                                            {formatDate(response.bookingDate)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tổng thanh toán</td>
                                        <td>
                                            {formatter.format(response.amount)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Trạng thái</td>
                                        <td>
                                            {response.payStatus == 0 ? (
                                                <span className="text-warning">
                                                    Chưa thanh toán
                                                </span>
                                            ) : (
                                                <span className="text-success">
                                                    Đã thanh toán
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )}
                </>
            ) : (
                ""
            )}
        </section>
    );
}

export default Tracking;
