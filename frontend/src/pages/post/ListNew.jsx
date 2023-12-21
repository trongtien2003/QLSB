import { useEffect, useState } from "react";
import { findPostByCatId } from "../../api/postService";

function ListNew() {
    const [lstPost, setLstPost] = useState([]);
    useEffect(() => {
        document.title = "Tin tức";
        findPostByCatId(1).then((res) => {
            console.log(res.data);
            setLstPost(res.data);
        });
    }, []);

    return (
        <section className="container py-3 ">
            {lstPost.length > 0 &&
                lstPost.map((item) => {
                    return (
                        <div key={item.id} className="my-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        Tin tức
                                    </h6>
                                    <p className="card-text text-truncate">
                                        {item.markdown}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </section>
    );
}

export default ListNew;
