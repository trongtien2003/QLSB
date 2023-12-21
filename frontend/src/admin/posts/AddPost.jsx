import MarkdownEditor from "../../components/MarkdownEditor";
import { useState } from "react";
import { createPost } from "../../api/postService";
import { useEffect } from "react";
import { findAllCategory } from "../../api/categoryService";
import { useNavigate } from "react-router-dom";

function AddPost() {
    const navigate = useNavigate();
    const [lstCategories, setLstCategories] = useState([]);
    useEffect(() => {
        document.title = "Thêm mới bài viết";
        findAllCategory().then((res) => {
            setLstCategories(res.data);
        });
    }, []);

    const initalState = {
        title: "",
        catId: "5",
        markdown: "",
        html: "",
    };
    const [postData, setPostData] = useState(initalState);
    const handleChange = (e) => {
        const { value, name } = e.target;
        setPostData({
            ...postData,
            [name]: value,
        });
    };
    function handleEditorChange({ html, text }) {
        setPostData({
            ...postData,
            markdown: text,
            html: html,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!postData.markdown || !postData.html) {
            alert("Chưa điền đủ thông tin");
            return;
        }
        createPost(postData)
            .then((res) => {
                if (res.data.statusCode == 0) {
                    alert("Lưu thành công");
                    navigate("/admin/post");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <form method="post" onSubmit={handleSubmit} className="container">
            <div className="d-flex py-3 justify-content-between align-items-center mb-3">
                <h1 className="text-uppercase m-0">Thêm bài viết</h1>
                <button type="submit" className="btn btn-primary">
                    Lưu bài viết
                </button>
            </div>
            <div>
                <div className="row mb-3">
                    <div className="col-md-8">
                        <label htmlFor="title" className="form-label">
                            Tiêu đề bài viết
                        </label>
                        <input
                            id="title"
                            className="form-control"
                            type="text"
                            name="title"
                            required
                            placeholder="Nhập tiêu đề bài viết"
                            value={postData.title}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="catId" className="form-label">
                            Loại bài viết
                        </label>
                        <select
                            id="catId"
                            className="form-select"
                            name="catId"
                            required
                            value={postData.catId}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Chọn loại bài viết</option>
                            {lstCategories.length > 0 &&
                                lstCategories.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                </div>

                <MarkdownEditor handleEditorChange={handleEditorChange} />
            </div>
        </form>
    );
}

export default AddPost;
