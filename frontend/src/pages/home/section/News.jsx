import { useEffect, useState } from "react";
import { findPostByCatId } from "../../../api/postService";
import { Link } from "react-router-dom";

export const News = () => {
    const [lstPost, setLstPost] = useState([]);
    useEffect(() => {
        findPostByCatId(1).then((res) => {
            console.log(res);
            setLstPost(res.data);
        });
    }, []);

    return (
        <section className="container py-3">
            <h4 className="text-uppercase text-center text-primary mb-4">
                tin tức
            </h4>
            <div className="row">
                {lstPost.length > 0 &&
                    lstPost.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="col-md-4"
                                title={item.title}
                            >
                                <div className="card">
                                    <img
                                        src={`/images/news/news-politics.png`}
                                        className="card-img-top"
                                        alt={item}
                                        style={{
                                            width: "100%",
                                            height: 400,
                                            objectFit: "cover",
                                        }}
                                    />
                                    <div className="card-body">
                                        <h4 className="text-truncate">
                                            <Link to={`/post/${item.id}`}>
                                                {item.title}
                                            </Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};
