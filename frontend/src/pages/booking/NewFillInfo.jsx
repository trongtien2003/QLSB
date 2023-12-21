import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findOneFlight } from "../../api/flightService";
import { formatDate, formatter, getCurrentDate } from "../../module/functions";
import { createPassenger } from "../../api/passenger.service";
import { createBooking, sendMail } from "../../api/booking.service";

function NewFillInfo() {
    const navigate = useNavigate();
    const { id, returnId } = useParams();
    const [infoConfirm, setInfoConfirm] = useState({});
    const [returnFlg, setReturnFlg] = useState({});
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [amount, setAmount] = useState("");
    const [passengerInfo, setPassengerInfo] = useState({
        name: "",
        age: "",
        gender: "",
        email: "",
        seat: 1,
    });
    useEffect(() => {
        findOneFlight(id).then((res) => {
            if (res && res.data) setInfoConfirm(res.data);
        });
        findOneFlight(returnId).then((res) => {
            if (res && res.data) setReturnFlg(res.data);
        });
    }, [id, returnId]);
    useEffect(() => {
        if (infoConfirm && returnFlg) {
            setAmount(
                +returnFlg.price * +passengerInfo.seat +
                    +infoConfirm.price * +passengerInfo.seat
            );
        }
    }, [infoConfirm, returnFlg, passengerInfo]);

    const handleShow = () => {
        setShow(!show);
    };
    const handlePassengerInfo = (e) => {
        const { name, value } = e.target;
        setPassengerInfo({
            ...passengerInfo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        createPassenger(passengerInfo).then((res) => {
            if (res.data && res.data.statusCode === 0) {
                const { id } = infoConfirm;
                const { seat } = passengerInfo;
                const bookingData = {
                    bookingDate: getCurrentDate().getTime(),
                    flightNumber: id,
                    isRoundTrip: 1,
                    returnFlightNumber: returnFlg.id,
                    seat: seat,
                    passengerId: res.data.passenger.id,
                    amount: amount,
                };
                createBooking(bookingData)
                    .then((res) => {
                        if (res.data && res.data.statusCode === 0) {
                            const { id, passengerId } = res.data.booking;
                            return sendMail({ passengerId, id });
                        }
                    })
                    .then(() => {
                        setLoading(false);
                        navigate("/bookingSuccess");
                    });
            }
        });
    };

    return (
        <section className="container">
            <div className="w-50 mx-auto">
                <div className="py-6">
                    <h3 className="text-center text-uppercase py-3">
                        Xác nhận thông tin
                    </h3>
                    <form method="post" onSubmit={(e) => handleSubmit(e)}>
                        <div className="d-flex flex-column gap-3 border p-3 rounded-3 shadow">
                            <h5>Chuyến đi</h5>
                            <div>
                                <label className="form-label" htmlFor="number">
                                    Số hiệu chuyến bay
                                </label>
                                <input
                                    className="form-control"
                                    id="number"
                                    type="text"
                                    readOnly
                                    defaultValue={infoConfirm.id}
                                />
                            </div>
                            <div>
                                <label className="form-label" htmlFor="airline">
                                    Hãng hàng không
                                </label>
                                <input
                                    className="form-control"
                                    id="airline"
                                    type="text"
                                    readOnly
                                    defaultValue={
                                        infoConfirm.airlineData
                                            ? infoConfirm.airlineData.name
                                            : ""
                                    }
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label
                                        className="form-label"
                                        htmlFor="number"
                                    >
                                        Khởi hành từ
                                    </label>
                                    <input
                                        className="form-control"
                                        id="from"
                                        type="text"
                                        readOnly
                                        defaultValue={
                                            infoConfirm.sourceData &&
                                            infoConfirm.sourceData.name
                                        }
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label" htmlFor="to">
                                        Đến
                                    </label>
                                    <input
                                        className="form-control"
                                        id="to"
                                        type="text"
                                        readOnly
                                        defaultValue={
                                            infoConfirm.destinationData &&
                                            infoConfirm.destinationData.name
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="start-day"
                                >
                                    Ngày khởi hành
                                </label>
                                <input
                                    className="form-control"
                                    id="start-day"
                                    type="text"
                                    readOnly
                                    value={formatDate(infoConfirm.travelDate)}
                                />
                            </div>
                            <div>
                                <label className="form-label" htmlFor="amount">
                                    Thành tiền
                                </label>
                                <input
                                    className="form-control"
                                    id="amount"
                                    type="number"
                                    name="amount"
                                    required={true}
                                    readOnly
                                    value={(
                                        +infoConfirm.price * +passengerInfo.seat
                                    ).toString()}
                                />
                            </div>
                            <hr />
                            <h5>Chuyến về</h5>
                            <div>
                                <label className="form-label" htmlFor="number">
                                    Số hiệu chuyến bay
                                </label>
                                <input
                                    className="form-control"
                                    id="number"
                                    type="text"
                                    readOnly
                                    defaultValue={returnFlg.id}
                                />
                            </div>
                            <div>
                                <label className="form-label" htmlFor="airline">
                                    Hãng hàng không
                                </label>
                                <input
                                    className="form-control"
                                    id="airline"
                                    type="text"
                                    readOnly
                                    defaultValue={
                                        returnFlg.airlineData
                                            ? returnFlg.airlineData.name
                                            : ""
                                    }
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label
                                        className="form-label"
                                        htmlFor="number"
                                    >
                                        Khởi hành từ
                                    </label>
                                    <input
                                        className="form-control"
                                        id="from"
                                        type="text"
                                        readOnly
                                        defaultValue={
                                            returnFlg.sourceData &&
                                            returnFlg.sourceData.name
                                        }
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label" htmlFor="to">
                                        Đến
                                    </label>
                                    <input
                                        className="form-control"
                                        id="to"
                                        type="text"
                                        readOnly
                                        defaultValue={
                                            returnFlg.destinationData &&
                                            returnFlg.destinationData.name
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="start-day"
                                >
                                    Ngày khởi hành
                                </label>
                                <input
                                    className="form-control"
                                    id="start-day"
                                    type="text"
                                    readOnly
                                    value={formatDate(returnFlg.travelDate)}
                                />
                            </div>
                            <div>
                                <label className="form-label" htmlFor="amount">
                                    Thành tiền
                                </label>
                                <input
                                    className="form-control"
                                    id="amount"
                                    type="number"
                                    name="amount"
                                    required={true}
                                    readOnly
                                    value={(
                                        +returnFlg.price * +passengerInfo.seat
                                    ).toString()}
                                />
                            </div>
                            <hr />
                            <h5>Tổng thanh toán</h5>
                            <h5 className="text-center text-primary">
                                {formatter.format(amount)}
                            </h5>
                            <hr />
                            <h5>Thông tin hành khách</h5>
                            <div>
                                <label className="form-label" htmlFor="name">
                                    Họ và tên
                                </label>
                                <input
                                    className="form-control"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Nhập họ và tên"
                                    required={true}
                                    value={passengerInfo.name}
                                    onChange={(e) => handlePassengerInfo(e)}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <label
                                        className="form-label"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="form-control"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Nhập email"
                                        required={true}
                                        value={passengerInfo.email}
                                        onChange={(e) => handlePassengerInfo(e)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label
                                        className="form-label"
                                        htmlFor="seat"
                                    >
                                        Số hành khách
                                    </label>
                                    <input
                                        className="form-control"
                                        id="seat"
                                        type="number"
                                        name="seat"
                                        required={true}
                                        min={1}
                                        max={10}
                                        value={passengerInfo.seat}
                                        onChange={(e) => handlePassengerInfo(e)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label
                                        className="form-label"
                                        htmlFor="gender"
                                    >
                                        Giới tính
                                    </label>
                                    <select
                                        className="form-control"
                                        id="gender"
                                        name="gender"
                                        required
                                        value={passengerInfo.gender}
                                        onChange={(e) => handlePassengerInfo(e)}
                                    >
                                        <option value="">Chọn giới tính</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label" htmlFor="age">
                                        Tuổi
                                    </label>
                                    <input
                                        className="form-control"
                                        id="age"
                                        type="number"
                                        name="age"
                                        min={0}
                                        placeholder="Nhập số tuổi"
                                        required={true}
                                        value={passengerInfo.age}
                                        onChange={(e) => handlePassengerInfo(e)}
                                    />
                                </div>
                            </div>
                            {loading ? (
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    disabled
                                >
                                    <span
                                        className="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span className="visually-hidden">
                                        Vui lòng chờ...
                                    </span>
                                </button>
                            ) : (
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    onClick={handleShow}
                                >
                                    Xác nhận
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default NewFillInfo;
