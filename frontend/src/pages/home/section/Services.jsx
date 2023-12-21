import { useEffect, useState } from "react";
import { findOneBySlug } from "../../../api/categoryService";
import { findPostByCatId } from "../../../api/postService";
import { Link } from "react-router-dom";

const Services = () => {
    const [id, setId] = useState("");
    const [lstPost, setLstPost] = useState([]);
    useEffect(() => {
        findOneBySlug("dich-vu").then((res) => {
            setId(res.data.id);
        });
    }, []);
    useEffect(() => {
        if (id) {
            findPostByCatId(id).then((res) => {
                console.log(res.data);
                setLstPost(res.data);
            });
        }
    }, [id]);

    return (
        <section className="container py-3">
            <h4 className="text-uppercase text-center text-primary mb-4">
                dịch vụ nổi bật
            </h4>
            <div className="row">
                {lstPost.length > 0 &&
                    lstPost.map((item, index) => {
                        return (
                            <div key={index} className="col-md-4">
                                <div className="card mb-3">
                                    <img
                                        style={{
                                            width: "100%",
                                            height: 400,
                                            objectFit: "cover",
                                        }}
                                        src={`/images/services/customer-service.png`}
                                        className="card-img-top img-fluid"
                                        alt={item}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">
                                            {item.title}
                                        </h5>
                                        <Link
                                            to={`/post/${item.id}`}
                                            className="btn btn-primary"
                                        >
                                            Xem ngay
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default Services;
