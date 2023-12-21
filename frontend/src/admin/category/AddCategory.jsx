import { useState } from "react";
import { createCategory } from "../../api/categoryService";
import { useNavigate } from "react-router-dom";

function AddCategory() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Chưa điền đủ thông tin");
            return;
        }
        createCategory({ name }).then(() => {
            navigate("/admin/category");
        });
    };
    return (
        <form action="post" onSubmit={handleSubmit} className="container">
            <h3 className="text-uppercase py-3">Thêm danh mục</h3>
            <div className="border p-3 rounded-3 shadow d-flex flex-column gap-3 w-50 mx-auto">
                <label htmlFor="name" className="form-label">
                    Tên danh mục
                </label>
                <input
                    id="name"
                    className="form-control"
                    type="text"
                    name="name"
                    required
                    placeholder="Nhập tên danh mục"
                    value={name}
                    onChange={(e) => handleChange(e)}
                />
                <button className="btn btn-primary" type="submit">
                    Lưu danh mục
                </button>
            </div>
        </form>
    );
}

export default AddCategory;
