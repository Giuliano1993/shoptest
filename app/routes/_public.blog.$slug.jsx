import { useParams, Link } from "react-router";

export default function BlogPost() {
    const { slug } = useParams();

    return (
        <div className="container" style={{ paddingTop: "var(--spacing-lg)", paddingBottom: "var(--spacing-xl)" }}>
            <article style={{ maxWidth: "800px", margin: "0 auto" }} className="animate-fade-in">
                <Link to="/blog" style={{ color: "#888", marginBottom: "var(--spacing-md)", display: "inline-block" }}>
                    ← Back to Blog
                </Link>

                <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "var(--spacing-sm)" }}>
                    {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </h1>

                <div style={metaStyle}>
                    <span>By Designer</span>
                    <span>•</span>
                    <span>Oct 12, 2023</span>
                </div>

                <div style={imagePlaceholderStyle}></div>

                <div style={contentStyle}>
                    <p>
                        This is a placeholder for the blog post content. In a real application,
                        this would be fetched from a CMS or a database based on the slug: <strong>{slug}</strong>.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>The Core Concept</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <blockquote>
                        "Design is not just what it looks like and feels like. Design is how it works."
                    </blockquote>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </article>
        </div>
    );
}

const metaStyle = {
    display: "flex",
    gap: "12px",
    fontSize: "0.9rem",
    color: "#888",
    marginBottom: "var(--spacing-md)",
};

const imagePlaceholderStyle = {
    width: "100%",
    height: "400px",
    backgroundColor: "#2a2a2a",
    borderRadius: "var(--radius-lg)",
    marginBottom: "var(--spacing-md)",
    background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
};

const contentStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#ddd",
};
