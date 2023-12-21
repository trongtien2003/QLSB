import { useEffect, useState } from "react";
import { findOneFlight, updateFlight } from "../../api/flightService";
import { findAllProvince } from "../../api/provinceService";
import { findAllAirline } from "../../api/airlineService";
import { useNavigate, useParams } from "react-router-dom";
import { formatDateYmd } from "../../module/functions";

function EditFlight() {
    const { id } = useParams();
    const getToday = () => {
        let d = new Date(),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
    };
    const navigate = useNavigate();
    const [flightInfo, setFlightInfo] = useState({
        arrivalTime: "",
        departureTime: "",
        availableSeat: "20",
        destination: "",
        source: "",
        travelDate: new Date().getTime(),
        price: "500000",
        airlineId: "",
    });

    const [lstProvince, setLstProvince] = useState([]);
    const [lstAirlines, setLstAirlines] = useState([]);
    const [dateState, setDateState] = useState();
    useEffect(() => {
        findOneFlight(id).then((res) => {
            if (res && res.data) {
                const { travelDate } = res.data;
                setDateState(formatDateYmd(travelDate));
                setFlightInfo(res.data);
            }
        });
        findAllProvince().then((res) => {
            setLstProvince(res.data);
        });
        findAllProvince().then((res) => {
            setLstProvince(res.data);
        });
        findAllAirline().then((res) => {
            if (res.data) setLstAirlines(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const date = new Date(e.target.value);
        date.setHours(0, 0, 0, 0);
        setDateState(formatDateYmd(date));
    };
    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setFlightInfo({
            ...flightInfo,
            [name]: value,
        });
    };
    const validate = () => {
        const key = Object.keys(flightInfo);
        for (let index = 0; index < key.length; index++) {
            const element = key[index];
            if (!flightInfo[element]) {
                alert("Thiếu thông tin: " + element);
                return false;
            }
        }
        return true;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        const _data = {
            ...flightInfo,
            travelDate: dateState,
        };
        updateFlight(id, _data).then((res) => {
            if (res && res.data && res.data.statusCode === 0) {
                alert("Sửa thành công");
                navigate("/admin/flight");
            }
        });
    };
    return (
        <form className="pe-2" onSubmit={handleSubmit} method="post">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h3 className="py-2 text-uppercase m-0">Thêm mới chuyến bay</h3>
                <button className="btn btn-primary" type="submit">
                    Lưu thông tin
                </button>
            </div>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="travelDate" className="form-label">
                        Chọn ngày khởi hành
                    </label>
                    <input
                        className="form-control"
                        type="date"
                        min={getToday()}
                        value={dateState}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="source" className="form-label">
                        Chọn điểm khởi hành
                    </label>
                    <select
                        id="source"
                        className="form-select"
                        name="source"
                        value={flightInfo.source}
                        required={true}
                        onChange={(e) => handleInputChange(e)}
                    >
                        <option value="">Chọn điểm đi</option>
                        {lstProvince &&
                            lstProvince.length > 0 &&
                            lstProvince.map((item) => {
                                return (
                                    <option key={item.id} value={item.code}>
                                        {item.name} - {item.airportName}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="destination" className="form-label">
                        Chọn điểm đến
                    </label>
                    <select
                        id="destination"
                        className="form-select"
                        required={true}
                        name="destination"
                        value={flightInfo.destination}
                        onChange={(e) => handleInputChange(e)}
                    >
                        <option value="">Chọn điểm đến</option>
                        {lstProvince &&
                            lstProvince.length > 0 &&
                            lstProvince.map((item) => {
                                return (
                                    <option key={item.id} value={item.code}>
                                        {item.name} - {item.airportName}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="departureTime" className="form-label">
                        Giờ cất cánh
                    </label>
                    <input
                        className="form-control"
                        type="time"
                        id="departureTime"
                        name="departureTime"
                        required
                        value={flightInfo.departureTime}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="arrivalTime" className="form-label">
                        Giờ hạ cánh
                    </label>
                    <input
                        className="form-control"
                        type="time"
                        id="arrivalTime"
                        name="arrivalTime"
                        value={flightInfo.arrivalTime}
                        required
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="form-label" htmlFor="price">
                        Giá vé
                    </label>
                    <input
                        id="price"
                        className="form-control"
                        type="number"
                        name="price"
                        required={true}
                        value={flightInfo.price}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="form-label" htmlFor="availableSeat">
                        Số ghế
                    </label>
                    <input
                        id="availableSeat"
                        className="form-control"
                        type="number"
                        name="availableSeat"
                        required={true}
                        value={flightInfo.availableSeat}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="form-label" htmlFor="airlineId">
                        Hãng hàng không
                    </label>
                    <select
                        id="airlineId"
                        className="form-select"
                        name="airlineId"
                        value={flightInfo.airlineId}
                        onChange={(e) => handleInputChange(e)}
                        required
                    >
                        <option value="">Chọn hãng</option>
                        {lstAirlines &&
                            lstAirlines.length > 0 &&
                            lstAirlines.map((item) => {
                                return (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                );
                            })}
                    </select>
                </div>
            </div>
        </form>
    );
}
export default EditFlight;
