import { useEffect, useState } from "react";
import { findFlightByData } from "../../api/flightService";
import { findAllProvince } from "../../api/provinceService";
import {
    formatDate,
    formatHour,
    formatter,
    handleCalcTime,
} from "../../module/functions";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { IconArrowsExchange } from "@tabler/icons-react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

function Booking() {
    const [searchParams] = useSearchParams();
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const d = searchParams.get("d");
    const [lstProvince, setLstProvince] = useState([]);
    const [lstFlight, setLstFlight] = useState([]);
    const [isRound, setIsRound] = useState(false);
    const [isNext, setIsNext] = useState(false);
    useEffect(() => {
        document.title = "Đặt vé";
        findAllProvince().then((res) => {
            setLstProvince(res.data);
        });
        if (from && to && d) {
            const _date = new Date(d);
            _date.setHours(0, 0, 0, 0);
            const _data = {
                source: from,
                destination: to,
                travelDate: _date.getTime(),
            };
            findFlightByData(_data).then((res) => {
                setLstFlight(res.data);
            });
        }
    }, [d, from, to]);

    const [info, setInfo] = useState({
        source: "",
        destination: "",
        travelDate: "",
        returnDate: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const noHour = new Date(Date.parse(info.travelDate));
        noHour.setHours(0, 0, 0, 0);
        const _data = {
            ...info,
            travelDate: noHour.getTime(),
        };
        findFlightByData(_data).then((res) => {
            setLstFlight(res.data);
        });
    };
    const handleFetch = () => {
        const noHour = new Date(Date.parse(info.returnDate));
        noHour.setHours(0, 0, 0, 0);
        const _data = {
            ...info,
            travelDate: noHour.getTime(),
        };
        let data = { ..._data };
        data.source = _data.destination;
        data.destination = _data.source;
        findFlightByData(data).then((res) => {
            setLstFlight(res.data);
        });
    };
    const handleIsRound = (e) => {
        const { value } = e.target;
        if (value === "one-way") setIsRound(false);
        else setIsRound(true);
    };
    const [roundInfo, setRoundInfo] = useState({
        go: {},
        back: {},
    });
    const handleSelect = (item) => {
        if (Object.keys(roundInfo.go).length === 0) {
            setRoundInfo({ ...roundInfo, go: item });
        } else {
            setRoundInfo({ ...roundInfo, back: item });
        }
        setIsNext(true);
    };
    const navi = useNavigate();
    return (
        <section className="py-3 container">
            <h3 className="text-uppercase text-center text-secondary">
                đặt lịch bay
            </h3>
            <div className="d-flex gap-3 mb-3">
                <div className="form-check">
                    <input
                        type="radio"
                        name="type"
                        id="one-way"
                        className="form-check-input"
                        checked={!isRound}
                        value={"one-way"}
                        onChange={handleIsRound}
                    />
                    <label htmlFor="one-way" className="form-check-label">
                        Một chiều
                    </label>
                </div>
                <div className="form-check">
                    <input
                        type="radio"
                        name="type"
                        id="roundtrip"
                        className="form-check-input"
                        value={"round"}
                        checked={isRound}
                        onChange={handleIsRound}
                    />
                    <label htmlFor="roundtrip" className="form-check-label">
                        Khứ hồi
                    </label>
                </div>
            </div>
            {isRound === true ? (
                <>
                    <form
                        className="row border p-3 rounded-3"
                        method="post"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className="col-md-10 row">
                            <div className="col-md-3">
                                <label htmlFor="source" className="form-label">
                                    Khởi hành từ
                                </label>
                                <select
                                    name="source"
                                    id="source"
                                    className="form-select"
                                    value={info.source}
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
                                    <option value="">...</option>
                                    {lstProvince &&
                                        lstProvince.map((item) => {
                                            return (
                                                <option
                                                    key={item.id}
                                                    value={item.code}
                                                >
                                                    {item.name} - {item.code}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label
                                    htmlFor="destination"
                                    className="form-label"
                                >
                                    Đến
                                </label>
                                <select
                                    name="destination"
                                    id="destination"
                                    className="form-select"
                                    value={info.destination}
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
                                    <option value="">...</option>
                                    {lstProvince &&
                                        lstProvince.map((item) => {
                                            return (
                                                <option
                                                    key={item.id}
                                                    value={item.code}
                                                >
                                                    {item.name} - {item.code}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label
                                    htmlFor="travelDate"
                                    className="form-label"
                                >
                                    Ngày bay
                                </label>
                                <input
                                    type="date"
                                    name="travelDate"
                                    id="travelDate"
                                    value={info.travelDate}
                                    onChange={(e) => handleChange(e)}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-md-3">
                                <label
                                    htmlFor="returnDate"
                                    className="form-label"
                                >
                                    Ngày trở về
                                </label>
                                <input
                                    type="date"
                                    name="returnDate"
                                    id="returnDate"
                                    value={info.returnDate}
                                    onChange={(e) => handleChange(e)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-2 d-flex align-items-end">
                            <button type="submit" className="btn btn-primary">
                                Tìm chuyến bay
                            </button>
                        </div>
                    </form>
                    <div className="my-3 d-flex gap-3 align-items-center">
                        <div
                            className={
                                isNext === false
                                    ? "border border-primary rounded flex-grow-1 p-3"
                                    : "border rounded flex-grow-1 p-3"
                            }
                        >
                            <h5>Chuyến đi</h5>
                            {Object.keys(roundInfo.go).length !== 0 ? (
                                <ul>
                                    <li>Chuyến bay: {roundInfo.go.id}</li>
                                    <li>
                                        Hãng: {roundInfo.go.airlineData.name}
                                    </li>
                                    <li>
                                        {roundInfo.go.sourceData.name}{" "}
                                        <IconArrowNarrowRight />{" "}
                                        {roundInfo.go.destinationData.name}
                                    </li>
                                    <li>
                                        Ngày:{" "}
                                        {formatDate(roundInfo.go.travelDate)}
                                    </li>
                                    <li>
                                        Giờ bay:{" "}
                                        {formatHour(roundInfo.go.departureTime)}
                                    </li>
                                    <li>
                                        Giá:{" "}
                                        {formatter.format(roundInfo.go.price)}
                                    </li>
                                </ul>
                            ) : (
                                <p>Chưa có thông tin</p>
                            )}
                        </div>
                        <IconArrowsExchange />
                        <div
                            className={
                                isNext === true
                                    ? "border border-primary rounded flex-grow-1 p-3"
                                    : "border rounded flex-grow-1 p-3"
                            }
                        >
                            <h5>Chuyến về</h5>
                            {Object.keys(roundInfo.back).length !== 0 ? (
                                <ul>
                                    <li>Chuyến bay: {roundInfo.back.id}</li>
                                    <li>
                                        Hãng: {roundInfo.back.airlineData.name}
                                    </li>
                                    <li>
                                        {roundInfo.back.sourceData.name}{" "}
                                        <IconArrowNarrowRight />{" "}
                                        {roundInfo.back.destinationData.name}
                                    </li>
                                    <li>
                                        Ngày:{" "}
                                        {formatDate(roundInfo.back.travelDate)}
                                    </li>
                                    <li>
                                        Giờ bay:{" "}
                                        {formatHour(
                                            roundInfo.back.departureTime
                                        )}
                                    </li>
                                    <li>
                                        Giá:{" "}
                                        {formatter.format(roundInfo.back.price)}
                                    </li>
                                </ul>
                            ) : (
                                <p>Chưa có thông tin</p>
                            )}
                        </div>
                    </div>
                    {Object.keys(roundInfo.go).length !== 0 &&
                        Object.keys(roundInfo.back).length === 0 && (
                            <button
                                onClick={handleFetch}
                                className="btn btn-secondary"
                            >
                                Tiếp tục
                            </button>
                        )}
                    {Object.keys(roundInfo.back).length !== 0 && (
                        <button
                            onClick={() =>
                                navi(
                                    "/booking/newfillinfo/" +
                                        roundInfo.go.id +
                                        "/" +
                                        roundInfo.back.id
                                )
                            }
                            className="btn btn-success"
                        >
                            Xác nhận
                        </button>
                    )}
                    <table className="table table-bordered my-3 shadow">
                        <thead>
                            <tr>
                                <th>Mã</th>
                                <th>Hãng</th>
                                <th>Đi từ</th>
                                <th>Đến</th>
                                <th>Ngày bay</th>
                                <th>Giờ bay</th>
                                <th>Giờ hạ cánh</th>
                                <th>Thời gian bay</th>
                                <th>Giá vé</th>
                                <th>Số ghế</th>
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
                                            <td>
                                                {formatDate(item.travelDate)}
                                            </td>
                                            <td>
                                                {formatHour(item.departureTime)}
                                            </td>
                                            <td>
                                                {formatHour(item.arrivalTime)}
                                            </td>
                                            <td>{res}</td>
                                            <td>
                                                {formatter.format(item.price)}
                                            </td>
                                            <td>{item.availableSeat}</td>
                                            <td>
                                                {item.availableSeat > 0 ? (
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={() =>
                                                            handleSelect(item)
                                                        }
                                                    >
                                                        Chọn vé
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="btn btn-primary"
                                                        disabled
                                                    >
                                                        Hết vé
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td className="text-center" colSpan={11}>
                                        Không có thông tin
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            ) : (
                <>
                    <form
                        className="row border p-3 rounded-3"
                        method="post"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className="col-md-10 row">
                            <div className="col-md-4">
                                <label htmlFor="source" className="form-label">
                                    Khởi hành từ
                                </label>
                                <select
                                    name="source"
                                    id="source"
                                    className="form-select"
                                    value={info.source}
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
                                    <option value="">...</option>
                                    {lstProvince &&
                                        lstProvince.map((item) => {
                                            return (
                                                <option
                                                    key={item.id}
                                                    value={item.code}
                                                >
                                                    {item.name} - {item.code}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label
                                    htmlFor="destination"
                                    className="form-label"
                                >
                                    Đến
                                </label>
                                <select
                                    name="destination"
                                    id="destination"
                                    className="form-select"
                                    value={info.destination}
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
                                    <option value="">...</option>
                                    {lstProvince &&
                                        lstProvince.map((item) => {
                                            return (
                                                <option
                                                    key={item.id}
                                                    value={item.code}
                                                >
                                                    {item.name} - {item.code}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label
                                    htmlFor="travelDate"
                                    className="form-label"
                                >
                                    Ngày bay
                                </label>
                                <input
                                    type="date"
                                    name="travelDate"
                                    id="travelDate"
                                    value={info.travelDate}
                                    onChange={(e) => handleChange(e)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-2 d-flex align-items-end">
                            <button type="submit" className="btn btn-primary">
                                Tìm chuyến bay
                            </button>
                        </div>
                    </form>
                    <table className="table table-bordered my-3 shadow">
                        <thead>
                            <tr>
                                <th>Mã</th>
                                <th>Hãng</th>
                                <th>Đi từ</th>
                                <th>Đến</th>
                                <th>Ngày bay</th>
                                <th>Giờ bay</th>
                                <th>Giờ hạ cánh</th>
                                <th>Thời gian bay</th>
                                <th>Giá vé</th>
                                <th>Số ghế</th>
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
                                            <td>
                                                {formatDate(item.travelDate)}
                                            </td>
                                            <td>
                                                {formatHour(item.departureTime)}
                                            </td>
                                            <td>
                                                {formatHour(item.arrivalTime)}
                                            </td>
                                            <td>{res}</td>
                                            <td>
                                                {formatter.format(item.price)}
                                            </td>
                                            <td>{item.availableSeat}</td>
                                            <td>
                                                {item.availableSeat > 0 ? (
                                                    <Link
                                                        to={`/booking/fillinfo/${item.id}`}
                                                        className="btn btn-success"
                                                    >
                                                        Chọn vé
                                                    </Link>
                                                ) : (
                                                    <button
                                                        className="btn btn-primary"
                                                        disabled
                                                    >
                                                        Hết vé
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td className="text-center" colSpan={11}>
                                        Không có thông tin
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            )}
        </section>
    );
}

export default Booking;
