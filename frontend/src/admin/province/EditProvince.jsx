import { useEffect, useState } from "react";
import { findOneProvince, updateProvince } from "../../api/provinceService";
import { useNavigate, useParams } from "react-router-dom";

function EditProvince() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [dataPro, setDataPro] = useState({
        code: "",
        name: "",
        airportName: "",
    });
    useEffect(() => {
        findOneProvince(id).then((res) => {
            if (res.data) setDataPro(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataPro({
            ...dataPro,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { code, name, airportName } = dataPro;
        if (!code || !name || !airportName) {
            alert("Bạn chưa điền đủ thông tin");
            return;
        }
        updateProvince(id, dataPro)
            .then((res) => {
                if (res.data && res.data.statusCode === 0)
                    navigate("/admin/province");
            })
            .catch((e) => {
                alert(e.response.data.message);
            });
    };
    return (
        <form method="post" onSubmit={handleSubmit} className="container pe-3">
            <div className="d-flex justify-content-between align-items-center py-3">
                <h3 className="text-uppercase m-0">sửa tỉnh thành</h3>
                <button className="btn btn-success" type="submit">
                    Lưu thông tin
                </button>
            </div>
            <div className="w-50 mx-auto border p-3 shadow rounded-3">
                <div className="mb-3">
                    <label className="form-label" htmlFor="code">
                        Mã tỉnh thành
                    </label>
                    <input
                        name="code"
                        id="code"
                        className="form-control"
                        value={dataPro.code}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Tên tỉnh thành
                    </label>
                    <input
                        name="name"
                        id="name"
                        className="form-control"
                        value={dataPro.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="airport" className="form-label">
                        Tên sân bay
                    </label>
                    <input
                        name="airportName"
                        id="airport"
                        className="form-control"
                        value={dataPro.airportName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
        </form>
    );
}

export default EditProvince;
