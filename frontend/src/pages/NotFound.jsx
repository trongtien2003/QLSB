import { Link, useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div
            style={{ width: "100vw", height: "100vh" }}
            className="d-flex justify-content-center align-items-center flex-column"
        >
            <h1 className="text-danger font-monospace fw-bold">404</h1>
            <p className="fs-4 text-uppercase">Không tìm thấy trang</p>
            <div className="d-flex gap-3">
                <Link to={"/"} className="btn btn-primary">
                    Trang chủ
                </Link>
                <button onClick={() => navigate(-1)} className="btn btn-info">
                    Quay lại
                </button>
            </div>
        </div>
    );
}

export default NotFound;
