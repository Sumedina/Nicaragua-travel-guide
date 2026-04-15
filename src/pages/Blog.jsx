import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import "../App.css";

export default function Blog() {
    return (
        <div className="blog-container">
            <h1 className="blog-title">Travel Blog</h1>

            {blogPosts.length === 0 ? (
                <p>No articles yet</p>
            ) : (
                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="blog-card">
                            <Link to={`/blog/${post.id}`} className="blog-link">
                                <h2>{post.title}</h2>
                                <p>Read more →</p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}