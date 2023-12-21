import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findOnePost } from "../../api/postService";

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        findOnePost(id).then((res) => {
            console.log(res.data);
            setPost(res.data);
        });
    }, [id]);

    return (
        <section className="container py-3">
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </section>
    );
}

export default Post;
