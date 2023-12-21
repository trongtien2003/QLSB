import { useEffect, useState } from "react";
import { findOnePost } from "../../api/postService";

function About() {
    const [post, setPost] = useState({});
    useEffect(() => {
        document.title = "Giới thiệu";
        findOnePost(11).then((res) => {
            console.log(res.data);
            setPost(res.data);
        });
    }, []);

    return (
        <section className="container py-3">
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </section>
    );
}

export default About;
