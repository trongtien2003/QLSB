import { useEffect, useState } from "react";
import "./Banner.css";
import { findAllProvince } from "../api/provinceService";
import { useNavigate } from "react-router-dom";
function Banner() {
    const navigate = useNavigate();
    const [lstProvince, setLstProvince] = useState([]);
    const [data, setData] = useState({
        from: "",
        to: "",
        date: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    useEffect(() => {
        findAllProvince().then((res) => {
            setLstProvince(res.data);
        });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { from, to, date } = data;
        const path = `/booking?from=${from}&to=${to}&d=${date}`;
        navigate(path);
    };

    return (
        <div className="banner container">
            <div className="card custom-card" style={{ width: "20rem" }}>
                <h5 className="card-header py-3">Chào mừng bạn</h5>
                <form onSubmit={handleSubmit} className="card-body">
                    <h5 className="card-title">Chọn nơi bạn muốn đến</h5>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="from" className="form-label">
                                Khởi hành từ
                            </label>
                            <select
                                name="from"
                                id="from"
                                className="form-select"
                                required
                                value={data.from}
                                onChange={handleChange}
                            >
                                <option value="">Chọn điểm khởi hành</option>
                                {lstProvince.length > 0 &&
                                    lstProvince.map((item) => {
                                        return (
                                            <option
                                                key={item.id}
                                                value={item.code}
                                            >
                                                {item.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="to" className="form-label">
                                Đến
                            </label>
                            <select
                                name="to"
                                id="to"
                                className="form-select"
                                required
                                value={data.to}
                                onChange={handleChange}
                            >
                                <option value="">Chọn điểm đến</option>
                                {lstProvince.length > 0 &&
                                    lstProvince.map((item) => {
                                        return (
                                            <option
                                                key={item.id}
                                                value={item.code}
                                            >
                                                {item.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="seat" className="form-label">
                                Số hành khách
                            </label>
                            <input
                                type="number"
                                name="seat"
                                id="seat"
                                className="form-control"
                                defaultValue={1}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">
                                Ngày đi
                            </label>
                            <input
                                id="date"
                                type="date"
                                name="date"
                                className="form-control"
                                required
                                value={data.date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value={"Tìm kiếm"}
                    />
                </form>
            </div>

            <video src="video-sanbay.mp4" autoPlay muted loop></video>
        </div>
    );
}

export default Banner;
