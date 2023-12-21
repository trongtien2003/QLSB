import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAirline } from "../../api/airlineService";

function AddAirline() {
    useEffect(() => {
        document.title = "Thêm hãng hàng không";
    }, []);

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Bạn chưa điền đủ thông tin");
            return;
        }
        createAirline({ name })
            .then((res) => {
                if (res.data && res.data.statusCode === 0)
                    navigate("/admin/airline");
            })
            .catch((e) => {
                alert(e.response.data.message);
            });
    };
    return (
        <section className="container">
            <div className="d-flex justify-content-between align-items-center py-3">
                <h3 className="text-uppercase">Thêm hãng hàng không</h3>
            </div>
            <form
                method="post"
                onSubmit={handleSubmit}
                className="w-50 mx-auto border p-3 shadow rounded-3"
            >
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Tên hãng hàng không
                    </label>
                    <input
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Nhập tên hãng hàng không"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-100"
                    onClick={handleSubmit}
                >
                    Lưu thông tin
                </button>
            </form>
        </section>
    );
}

export default AddAirline;
