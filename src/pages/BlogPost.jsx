import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import "../App.css";

export default function BlogPost() {
    const { id } = useParams();

    const postId = parseInt(id, 10);
    const post = blogPosts.find((p) => p.id === postId);

    if (!post) {
        return <h2 className="not-found">Post not found</h2>;
    }

    return (
        <div className="blogpost-container">
            <div className="blogpost-content">
                <h1>{post.title}</h1>

                {post.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}