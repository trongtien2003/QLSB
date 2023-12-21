import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findOneAirline, updateAirline } from "../../api/airlineService";

function EditAirline() {
    const { id } = useParams();
    useEffect(() => {
        document.title = "Sửa hãng hàng không";
        findOneAirline(id).then((res) => {
            setData(res.data);
        });
    }, [id]);

    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
    });
    const handleChange = (e) => {
        const { value } = e.target;
        setData({
            ...data,
            name: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data) {
            alert("Bạn chưa điền đủ thông tin");
            return;
        }
        updateAirline(id, { name: data.name })
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
                <h3 className="text-uppercase">Sửa hãng hàng không</h3>
            </div>
            <form
                method="post"
                className="w-50 p-3 border rounded-3 shadow mx-auto"
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Tên hãng hàng không
                    </label>
                    <input
                        id="name"
                        className="form-control"
                        name="name"
                        value={data.name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Nhập tên hãng hàng không"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Lưu thông tin
                </button>
            </form>
        </section>
    );
}

export default EditAirline;
